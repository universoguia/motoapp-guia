// COSTURA DE DATOS — el unico archivo que hay que tocar para conectar Supabase.
//
// Todas las pantallas de los modulos piden los datos por aca y nunca leen el
// catalogo directamente. Hoy cada funcion resuelve contra las constantes de
// ./catalogo. Manana, cada una pasa a ser una consulta y las pantallas siguen
// igual, porque la forma de lo que devuelven no cambia.
//
// Son async a proposito: ya devuelven promesas, asi que cambiar el origen no
// obliga a reescribir ningun componente.
//
// Equivalencias con el esquema de motoappmarket (supabase/schema.sql):
//   TIENDAS   -> providers
//   VENTAS    -> moto_listings (los que no son de alquiler)
//   SUBASTAS  -> moto_listings con campos auction_* + moto_bids
//   PRODUCTOS -> products
//   pedidos   -> orders
//
// Lo que NO esta y hay que decidir al conectar backend:
//   - pagos reales (motoappmarket usa Stripe; aca el checkout es simulado)
//   - avisos por email (alla es Resend desde el servidor)
//   - el cierre automatico de subastas por cron

import { TIENDAS, VENTAS, SUBASTAS, PRODUCTOS, CIUDADES, CATEGORIAS_TIENDA, CATEGORIAS_PRODUCTO } from './catalogo.js';

const listo = (x) => Promise.resolve(x);

const RE_TILDES = new RegExp('[\\u0300-\\u036f]', 'g');
const sinTildes = (t) => String(t || '').toLowerCase().normalize('NFD').replace(RE_TILDES, '');

// --- Tiendas -----------------------------------------------------------

export function listarTiendas({ ciudad, categoria, texto } = {}) {
  let out = TIENDAS.slice();
  if (ciudad) out = out.filter((t) => t.ciudad === ciudad);
  if (categoria && categoria !== 'todas') out = out.filter((t) => t.categorias.includes(categoria));
  if (texto) {
    const q = sinTildes(texto);
    out = out.filter((t) => sinTildes(t.nombre).includes(q) || sinTildes(t.ciudad).includes(q) || sinTildes(t.zona).includes(q));
  }
  return listo(out);
}

export function obtenerTienda(id) {
  return listo(TIENDAS.filter((t) => t.id === id)[0] || null);
}

// Coordenada del pin: centro de la ciudad mas el desvio propio de la tienda,
// igual que hace el alquiler con sus listings.
export function coordenadaDe(tienda) {
  const c = CIUDADES[tienda.ciudad];
  if (!c) return null;
  return [c.centro[0] + (tienda.desvio || 0), c.centro[1] + (tienda.desvio || 0)];
}

// --- Motos en venta ----------------------------------------------------

export function listarVentas({ ciudad, categoria, vendedor, precioMax } = {}) {
  let out = VENTAS.slice();
  if (ciudad) out = out.filter((v) => v.ciudad === ciudad);
  if (categoria && categoria !== 'todas') out = out.filter((v) => v.categoria === categoria);
  // 'particular' = C2C, 'profesional' = publicada por una tienda (B2B).
  if (vendedor === 'particular') out = out.filter((v) => v.vendedor === 'particular');
  if (vendedor === 'profesional') out = out.filter((v) => v.vendedor !== 'particular');
  if (precioMax) out = out.filter((v) => v.precio <= precioMax);
  return listo(out.sort((a, b) => a.precio - b.precio));
}

export function obtenerVenta(id) {
  return listo(VENTAS.filter((v) => v.id === id)[0] || null);
}

// --- Subastas ----------------------------------------------------------

// El estado de una subasta se deriva del reloj que se le pase, para que la
// demo sea reproducible y no dependa de cuando se abrio la app.
function estadoSubasta(s, ahora) {
  const pujas = (s.pujas || []).slice().sort((a, b) => b.monto - a.monto);
  const mejor = pujas[0] || null;
  // La subasta se abrio `abiertaHaceHoras` antes de `ahora` y dura
  // `duracionDias`; de ahi sale cuanto le queda.
  const duracionHoras = s.duracionDias * 24;
  const cierra = new Date(ahora.getTime() + (duracionHoras - s.abiertaHaceHoras) * 3600000);
  const horas = Math.max(0, Math.round((cierra - ahora) / 3600000));
  return {
    ...s,
    pujas,
    mejorPuja: mejor,
    pujaActual: mejor ? mejor.monto : s.precioMinimo,
    proximaPuja: mejor ? mejor.monto + s.incremento : s.precioMinimo,
    totalPujas: (s.pujas || []).length,
    cierra,
    horasRestantes: horas,
    cerrada: horas <= 0,
    // Se muestra "quedan X" en dias u horas segun cuanto falte.
    restante: horas <= 0 ? 'Cerrada' : horas < 24 ? `Quedan ${horas} h` : `Quedan ${Math.floor(horas / 24)} d`,
  };
}

export function listarSubastas({ ahora = new Date() } = {}) {
  return listo(SUBASTAS.map((s) => estadoSubasta(s, ahora)));
}

export function obtenerSubasta(id, { ahora = new Date() } = {}) {
  const s = SUBASTAS.filter((x) => x.id === id)[0];
  return listo(s ? estadoSubasta(s, ahora) : null);
}

// Registrar una puja. En motoappmarket esto es POST /api/bids, que valida en
// el servidor (monto minimo, subasta abierta, tienda con remates habilitados)
// porque moto_bids no acepta INSERT directo. Aca se valida en el cliente y se
// guarda en memoria: al conectar backend, esta funcion pasa a ser la llamada
// a la API y las validaciones se vuelven las de verdad.
export function pujar(id, monto, quien, { ahora = new Date() } = {}) {
  const s = SUBASTAS.filter((x) => x.id === id)[0];
  if (!s) return Promise.reject(new Error('La subasta no existe.'));
  const estado = estadoSubasta(s, ahora);
  if (estado.cerrada) return Promise.reject(new Error('Esta subasta ya cerró.'));
  if (monto < estado.proximaPuja) {
    return Promise.reject(new Error(`La puja mínima es ${estado.proximaPuja} €.`));
  }
  s.pujas = (s.pujas || []).concat([{ id: 'p' + Date.now(), quien, monto, haceHoras: 0 }]);
  return listo(estadoSubasta(s, ahora));
}

// --- Accesorios --------------------------------------------------------

export function listarProductos({ categoria, texto, precioMax } = {}) {
  let out = PRODUCTOS.slice();
  if (categoria && categoria !== 'todas') out = out.filter((p) => p.categoria === categoria);
  if (texto) {
    const q = sinTildes(texto);
    out = out.filter((p) => sinTildes(p.nombre).includes(q) || sinTildes(p.categoria).includes(q));
  }
  if (precioMax) out = out.filter((p) => p.precio <= precioMax);
  return listo(out);
}

export function obtenerProducto(id) {
  return listo(PRODUCTOS.filter((p) => p.id === id)[0] || null);
}

// Confirmar un pedido de accesorios. En motoappmarket es
// /api/checkout-product (Stripe) + /api/order-confirm, que escribe en orders
// y avisa por email al negocio. Aca solo arma el comprobante.
export function crearPedido({ producto, cantidad, ciudad }) {
  const subtotal = producto.precio * cantidad;
  return listo({
    codigo: 'PD-' + Math.floor(1000 + Math.random() * 9000),
    producto: producto.nombre,
    cantidad,
    subtotal,
    envio: producto.envio,
    total: subtotal + producto.envio,
    ciudad,
    simulado: true,
  });
}

export { CIUDADES, CATEGORIAS_TIENDA, CATEGORIAS_PRODUCTO };
