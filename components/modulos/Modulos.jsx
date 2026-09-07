'use client';

// Modulos de marketplace traidos de motoappmarket: comprar moto (C2C/B2B),
// subastas Hot Deal, accesorios con envio y tiendas cerca.
//
// Viven DENTRO del marco del telefono, como pantallas del simulador v0.0.7, y
// se enganchan en las dos ranuras que la plantilla generada expone:
//   __inicioExtra -> los accesos, al pie de Inicio
//   __modulos     -> la capa a pantalla completa
//
// Nada de esto toca el alquiler entre particulares: es codigo aparte que se
// suma al costado. Los datos salen siempre de lib/datos, nunca del catalogo.

import React, { useEffect, useMemo, useState } from 'react';
import * as datos from '@/lib/datos';

// --- lenguaje visual de v0.0.7 -----------------------------------------
const T = {
  fondo: '#F4F4F3',
  tinta: '#14171B',
  suave: '#6E747C',
  tenue: '#98A1AB',
  borde: '#E4E3E0',
  rojo: '#E10600',
  oscuro: '#0E1013',
  radio: 18,
};

const eur = (n) => new Intl.NumberFormat('es-ES').format(n) + ' €';

const MODULOS = [
  { id: 'comprar', titulo: 'Comprar moto', bajada: 'De particular y de tienda', icono: '🏍️', color: '#D1552E' },
  { id: 'subastas', titulo: 'Subastas', bajada: 'Hot Deal, puja y llevátela', icono: '🔥', color: '#E10600' },
  { id: 'accesorios', titulo: 'Accesorios', bajada: 'Equipación y repuestos', icono: '⚙️', color: '#7A6BA8' },
  { id: 'tiendas', titulo: 'Tiendas cerca', bajada: 'Venta, taller y alquiler', icono: '🔧', color: '#6E7A44' },
];

// --- piezas compartidas ------------------------------------------------

function Placa({ color, etiqueta, alto = 128 }) {
  // Mismo criterio de fallback que el alquiler: sin foto, placa de categoria.
  return (
    <div style={{ position: 'relative', height: alto, background: color, display: 'flex', alignItems: 'flex-end', padding: 14 }}>
      <span style={{ height: 26, display: 'inline-flex', alignItems: 'center', padding: '0 12px', borderRadius: 999, background: 'rgba(255,255,255,0.16)', color: '#fff', fontSize: 11.5, fontWeight: 600 }}>
        {etiqueta}
      </span>
    </div>
  );
}

function Chips({ opciones, valor, alElegir, etiqueta }) {
  return (
    <div role="group" aria-label={etiqueta} style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
      {opciones.map((o) => {
        const activo = o.id === valor;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => alElegir(o.id)}
            aria-pressed={activo}
            style={{
              flex: 'none', minHeight: 44, padding: '0 16px', borderRadius: 999, cursor: 'pointer',
              border: '1px solid ' + (activo ? T.oscuro : T.borde),
              background: activo ? T.oscuro : '#fff',
              color: activo ? '#fff' : T.tinta,
              fontFamily: 'inherit', fontSize: 13.5, fontWeight: 600, whiteSpace: 'nowrap',
            }}
          >
            {o.nombre}
          </button>
        );
      })}
    </div>
  );
}

function Vacio({ texto }) {
  return (
    <div style={{ padding: '40px 8px', textAlign: 'center', color: T.suave, fontSize: 13.5, lineHeight: 1.5 }}>
      {texto}
    </div>
  );
}

function Cabecera({ titulo, bajada, cerrar }) {
  return (
    <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '6px 20px 14px' }}>
      <button
        type="button"
        onClick={cerrar}
        aria-label="Volver"
        style={{ flex: 'none', width: 44, height: 44, borderRadius: 999, border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, cursor: 'pointer', fontSize: 17, fontFamily: 'inherit' }}
      >
        ‹
      </button>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{titulo}</div>
        {bajada ? <div style={{ marginTop: 2, fontSize: 12.5, color: T.suave }}>{bajada}</div> : null}
      </div>
    </div>
  );
}

// --- accesos en Inicio -------------------------------------------------

export function AccesosModulos({ abrir }) {
  return (
    <div style={{ marginTop: 30 }}>
      <div style={{ fontSize: 15.5, fontWeight: 700, letterSpacing: '-0.02em' }}>También en Motoapp</div>
      <div style={{ marginTop: 4, fontSize: 12.5, color: T.suave, lineHeight: 1.5 }}>
        Además de alquilar, acá se compra, se puja y se equipa.
      </div>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {MODULOS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => abrir(m.id)}
            aria-label={m.titulo + ': ' + m.bajada}
            style={{
              textAlign: 'left', minHeight: 92, padding: 14, borderRadius: T.radio, cursor: 'pointer',
              border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, fontFamily: 'inherit',
              boxShadow: '0 8px 24px rgba(14,16,19,0.05)',
            }}
          >
            <span aria-hidden="true" style={{ display: 'inline-flex', width: 30, height: 30, borderRadius: 9, alignItems: 'center', justifyContent: 'center', background: m.color, fontSize: 15 }}>
              {m.icono}
            </span>
            <span style={{ display: 'block', marginTop: 8, fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>{m.titulo}</span>
            <span style={{ display: 'block', marginTop: 2, fontSize: 11.5, color: T.suave, lineHeight: 1.4 }}>{m.bajada}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- comprar moto ------------------------------------------------------

const VENDEDORES = [
  { id: 'todos', nombre: 'Todas' },
  { id: 'particular', nombre: 'De particular' },
  { id: 'profesional', nombre: 'De tienda' },
];

function Comprar({ cerrar }) {
  const [vendedor, setVendedor] = useState('todos');
  const [lista, setLista] = useState([]);
  const [abierta, setAbierta] = useState(null);

  useEffect(() => {
    let vivo = true;
    datos.listarVentas({ vendedor: vendedor === 'todos' ? undefined : vendedor })
      .then((r) => { if (vivo) setLista(r); });
    return () => { vivo = false; };
  }, [vendedor]);

  if (abierta) return <FichaVenta venta={abierta} cerrar={() => setAbierta(null)} />;

  return (
    <>
      <Cabecera titulo="Comprar moto" bajada={lista.length + ' motos de ocasión'} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 26px' }}>
        <Chips opciones={VENDEDORES} valor={vendedor} alElegir={setVendedor} etiqueta="Tipo de vendedor" />
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {lista.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setAbierta(v)}
              aria-label={'Ver ' + v.marca + ' ' + v.modelo}
              style={{ textAlign: 'left', padding: 0, borderRadius: T.radio, overflow: 'hidden', border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 24px rgba(14,16,19,0.05)' }}
            >
              <Placa color={COLOR_CAT[v.categoria] || '#7A6BA8'} etiqueta={NOMBRE_CAT[v.categoria] || v.categoria} alto={104} />
              <span style={{ display: 'block', padding: 14 }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{v.marca} {v.modelo}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap' }}>{eur(v.precio)}</span>
                </span>
                <span style={{ display: 'block', marginTop: 4, fontSize: 12.5, color: T.suave }}>
                  {v.anio} · {new Intl.NumberFormat('es-ES').format(v.km)} km · {v.ciudad} · {v.zona}
                </span>
                <span style={{ display: 'inline-flex', marginTop: 8, height: 24, alignItems: 'center', padding: '0 10px', borderRadius: 999, background: v.vendedor === 'particular' ? '#EFEFEE' : '#E7EFE4', fontSize: 11, fontWeight: 600, color: T.tinta }}>
                  {v.vendedor === 'particular' ? 'Particular' : 'Tienda'}
                </span>
              </span>
            </button>
          ))}
          {lista.length === 0 ? <Vacio texto="No hay motos con ese filtro." /> : null}
        </div>
      </div>
    </>
  );
}

function FichaVenta({ venta, cerrar }) {
  const [tienda, setTienda] = useState(null);
  const [aviso, setAviso] = useState('');

  useEffect(() => {
    if (venta.vendedor === 'particular') return;
    datos.obtenerTienda(venta.vendedor).then(setTienda);
  }, [venta]);

  return (
    <>
      <Cabecera titulo={venta.marca + ' ' + venta.modelo} bajada={venta.ciudad + ' · ' + venta.zona} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 20px' }}>
        <div style={{ borderRadius: T.radio, overflow: 'hidden', border: '1px solid ' + T.borde }}>
          <Placa color={COLOR_CAT[venta.categoria] || '#7A6BA8'} etiqueta={NOMBRE_CAT[venta.categoria] || venta.categoria} alto={150} />
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          {[
            { v: venta.anio, e: 'Año' },
            { v: new Intl.NumberFormat('es-ES').format(venta.km) + ' km', e: 'Kilómetros' },
            { v: venta.color, e: 'Color' },
          ].map((d) => (
            <div key={d.e} style={{ flex: 1, padding: '10px 8px', borderRadius: 12, border: '1px solid ' + T.borde, background: '#fff', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{d.v}</div>
              <div style={{ marginTop: 2, fontSize: 10.5, color: T.suave }}>{d.e}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: 14, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff' }}>
          <div style={{ fontSize: 12.5, color: T.suave }}>Vendedor</div>
          <div style={{ marginTop: 3, fontSize: 14.5, fontWeight: 700 }}>
            {venta.vendedor === 'particular' ? 'Particular verificado' : (tienda ? tienda.nombre : 'Tienda')}
          </div>
          <div style={{ marginTop: 6, fontSize: 12.5, color: T.suave, lineHeight: 1.5 }}>
            {venta.garantia ? 'Incluye garantía de ' + venta.garantia + '.' : 'Venta entre particulares, sin garantía comercial.'}
            {' '}Los datos de contacto se comparten al confirmar el interés.
          </div>
        </div>

        {aviso ? (
          <div role="status" style={{ marginTop: 14, padding: 12, borderRadius: 12, background: '#E7EFE4', fontSize: 12.5, color: T.tinta, lineHeight: 1.5 }}>
            {aviso}
          </div>
        ) : null}
      </div>

      <div style={{ flex: 'none', padding: '12px 20px calc(14px + env(safe-area-inset-bottom))', borderTop: '1px solid ' + T.borde, background: '#fff', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{eur(venta.precio)}</div>
          <div style={{ fontSize: 11.5, color: T.suave }}>{venta.ciudad} · {venta.zona}</div>
        </div>
        <button
          type="button"
          onClick={() => setAviso('Le avisamos al vendedor que te interesa. Te escribe por el chat de Motoapp.')}
          style={{ marginLeft: 'auto', minHeight: 48, padding: '0 22px', border: 'none', borderRadius: 12, background: T.rojo, color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
        >
          Me interesa
        </button>
      </div>
    </>
  );
}

// Colores y nombres de categoria: los mismos que usa el alquiler.
const COLOR_CAT = { naked: '#7A6BA8', deportiva: '#D1552E', adventure: '#6E7A44', touring: '#3C6382', scooter: '#C9A24A', custom: '#8A5A3A', clasica: '#4A6B63' };
const NOMBRE_CAT = { naked: 'Naked', deportiva: 'Deportiva', adventure: 'Adventure', touring: 'Touring', scooter: 'Scooter', custom: 'Custom', clasica: 'Clásica' };

// --- subastas ----------------------------------------------------------

function Subastas({ cerrar }) {
  const [lista, setLista] = useState([]);
  const [abierta, setAbierta] = useState(null);

  const recargar = () => datos.listarSubastas().then(setLista);
  useEffect(() => { recargar(); }, []);

  if (abierta) {
    return (
      <FichaSubasta
        id={abierta}
        cerrar={() => { setAbierta(null); recargar(); }}
      />
    );
  }

  return (
    <>
      <Cabecera titulo="Subastas" bajada="Hot Deal · cierra por tiempo" cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 26px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {lista.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setAbierta(s.id)}
              aria-label={'Ver subasta de ' + s.marca + ' ' + s.modelo}
              style={{ textAlign: 'left', padding: 0, borderRadius: T.radio, overflow: 'hidden', border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 24px rgba(14,16,19,0.05)' }}
            >
              <span style={{ position: 'relative', display: 'block' }}>
                <Placa color={COLOR_CAT[s.categoria] || '#7A6BA8'} etiqueta={NOMBRE_CAT[s.categoria] || s.categoria} alto={104} />
                <span style={{ position: 'absolute', top: 12, right: 12, height: 26, display: 'inline-flex', alignItems: 'center', padding: '0 12px', borderRadius: 999, background: s.cerrada ? 'rgba(14,16,19,0.75)' : T.rojo, color: '#fff', fontSize: 11.5, fontWeight: 700 }}>
                  {s.restante}
                </span>
              </span>
              <span style={{ display: 'block', padding: 14 }}>
                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{s.marca} {s.modelo}</span>
                <span style={{ display: 'block', marginTop: 4, fontSize: 12.5, color: T.suave }}>
                  {s.anio} · {new Intl.NumberFormat('es-ES').format(s.km)} km · {s.ciudad}
                </span>
                <span style={{ display: 'flex', marginTop: 10, alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 17, fontWeight: 700 }}>{eur(s.pujaActual)}</span>
                  <span style={{ fontSize: 11.5, color: T.suave }}>
                    {s.totalPujas === 0 ? 'sin pujas · precio mínimo' : s.totalPujas + (s.totalPujas === 1 ? ' puja' : ' pujas')}
                  </span>
                </span>
              </span>
            </button>
          ))}
          {lista.length === 0 ? <Vacio texto="No hay subastas abiertas ahora mismo." /> : null}
        </div>
      </div>
    </>
  );
}

function FichaSubasta({ id, cerrar }) {
  const [s, setS] = useState(null);
  const [monto, setMonto] = useState('');
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');

  useEffect(() => {
    datos.obtenerSubasta(id).then((r) => { setS(r); setMonto(r ? String(r.proximaPuja) : ''); });
  }, [id]);

  if (!s) return <Cabecera titulo="Subasta" cerrar={cerrar} />;

  const enviar = () => {
    setError(''); setOk('');
    datos.pujar(s.id, Number(monto), 'Iker B.')
      .then((r) => { setS(r); setMonto(String(r.proximaPuja)); setOk('Tu puja quedó registrada. Te avisamos si alguien te supera.'); })
      .catch((e) => setError(e.message));
  };

  return (
    <>
      <Cabecera titulo={s.marca + ' ' + s.modelo} bajada={s.restante + ' · ' + s.ciudad} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 20px' }}>
        <div style={{ borderRadius: T.radio, overflow: 'hidden', border: '1px solid ' + T.borde }}>
          <Placa color={COLOR_CAT[s.categoria] || '#7A6BA8'} etiqueta={NOMBRE_CAT[s.categoria] || s.categoria} alto={150} />
        </div>

        <div style={{ marginTop: 16, padding: 14, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 12.5, color: T.suave }}>Puja actual</span>
            <span style={{ fontSize: 12.5, color: T.suave }}>{s.totalPujas === 0 ? 'Sin pujas' : s.totalPujas + ' pujas'}</span>
          </div>
          <div style={{ marginTop: 3, fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em' }}>{eur(s.pujaActual)}</div>
          <div style={{ marginTop: 6, fontSize: 12.5, color: T.suave, lineHeight: 1.5 }}>
            Incremento mínimo {eur(s.incremento)}. La próxima puja válida es {eur(s.proximaPuja)}.
          </div>
        </div>

        {!s.cerrada ? (
          <div style={{ marginTop: 14, padding: 14, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff' }}>
            <label htmlFor="puja" style={{ display: 'block', fontSize: 12.5, color: T.suave }}>Tu puja</label>
            <div style={{ marginTop: 8, display: 'flex', gap: 10 }}>
              <input
                id="puja"
                type="number"
                inputMode="numeric"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                style={{ flex: 1, minWidth: 0, height: 48, padding: '0 14px', borderRadius: 12, border: '1px solid ' + T.borde, background: T.fondo, color: T.tinta, fontFamily: 'inherit', fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
              />
              <button
                type="button"
                onClick={enviar}
                style={{ flex: 'none', minHeight: 48, padding: '0 20px', border: 'none', borderRadius: 12, background: T.rojo, color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
              >
                Pujar
              </button>
            </div>
            {error ? (
              <div role="alert" style={{ marginTop: 10, padding: 10, borderRadius: 10, background: '#FBE9E7', color: '#9B1C11', fontSize: 12.5 }}>{error}</div>
            ) : null}
            {ok ? (
              <div role="status" style={{ marginTop: 10, padding: 10, borderRadius: 10, background: '#E7EFE4', color: T.tinta, fontSize: 12.5 }}>{ok}</div>
            ) : null}
          </div>
        ) : (
          <div style={{ marginTop: 14, padding: 14, borderRadius: T.radio, background: '#EFEFEE', fontSize: 13, color: T.suave }}>
            Esta subasta ya cerró. Si ganaste, te llega el aviso para pagar en 24 h.
          </div>
        )}

        <div style={{ marginTop: 18, fontSize: 14, fontWeight: 700 }}>Historial de pujas</div>
        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {s.pujas.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: 12, border: '1px solid ' + T.borde, background: i === 0 ? '#fff' : 'transparent' }}>
              <span style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 500 }}>{p.quien}</span>
              <span style={{ fontSize: 13, fontWeight: 700 }}>{eur(p.monto)}</span>
            </div>
          ))}
          {s.pujas.length === 0 ? <Vacio texto="Todavía no pujó nadie. Podés abrir vos." /> : null}
        </div>

        <div style={{ marginTop: 16, fontSize: 11.5, color: T.tenue, lineHeight: 1.6 }}>
          Subasta de demostración: las pujas no comprometen ningún pago real.
        </div>
      </div>
    </>
  );
}

// --- accesorios --------------------------------------------------------

function Accesorios({ cerrar }) {
  const [categoria, setCategoria] = useState('todas');
  const [lista, setLista] = useState([]);
  const [abierto, setAbierto] = useState(null);

  const opciones = useMemo(
    () => [{ id: 'todas', nombre: 'Todo' }].concat(datos.CATEGORIAS_PRODUCTO.map((c) => ({ id: c.id, nombre: c.icono + ' ' + c.id }))),
    []
  );

  useEffect(() => {
    let vivo = true;
    datos.listarProductos({ categoria }).then((r) => { if (vivo) setLista(r); });
    return () => { vivo = false; };
  }, [categoria]);

  if (abierto) return <FichaProducto producto={abierto} cerrar={() => setAbierto(null)} />;

  return (
    <>
      <Cabecera titulo="Accesorios" bajada={lista.length + ' productos con envío'} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 26px' }}>
        <Chips opciones={opciones} valor={categoria} alElegir={setCategoria} etiqueta="Categoría de producto" />
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {lista.map((p) => {
            const cat = datos.CATEGORIAS_PRODUCTO.filter((c) => c.id === p.categoria)[0];
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setAbierto(p)}
                aria-label={'Ver ' + p.nombre}
                style={{ textAlign: 'left', padding: 0, borderRadius: T.radio, overflow: 'hidden', border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <span aria-hidden="true" style={{ display: 'flex', height: 84, alignItems: 'center', justifyContent: 'center', background: '#EFEFEE', fontSize: 30 }}>
                  {cat ? cat.icono : '📦'}
                </span>
                <span style={{ display: 'block', padding: 12 }}>
                  <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, lineHeight: 1.35 }}>{p.nombre}</span>
                  <span style={{ display: 'block', marginTop: 6, fontSize: 14, fontWeight: 700 }}>{eur(p.precio)}</span>
                </span>
              </button>
            );
          })}
        </div>
        {lista.length === 0 ? <Vacio texto="No hay productos en esa categoría." /> : null}
      </div>
    </>
  );
}

function FichaProducto({ producto, cerrar }) {
  const [cantidad, setCantidad] = useState(1);
  const [pedido, setPedido] = useState(null);
  const cat = datos.CATEGORIAS_PRODUCTO.filter((c) => c.id === producto.categoria)[0];
  const subtotal = producto.precio * cantidad;

  if (pedido) {
    return (
      <>
        <Cabecera titulo="Pedido confirmado" bajada={pedido.codigo} cerrar={cerrar} />
        <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '0 20px 26px' }}>
          <div style={{ padding: 18, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{pedido.producto}</div>
            <div style={{ marginTop: 4, fontSize: 12.5, color: T.suave }}>Cantidad: {pedido.cantidad}</div>
            <div style={{ marginTop: 14, height: 1, background: T.borde }} />
            {[['Subtotal', pedido.subtotal], ['Envío', pedido.envio], ['Total', pedido.total]].map(([e, n], i) => (
              <div key={e} style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: i === 2 ? 15 : 13, fontWeight: i === 2 ? 700 : 500, color: i === 2 ? T.tinta : T.suave }}>
                <span>{e}</span><span>{eur(n)}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontSize: 11.5, color: T.tenue, lineHeight: 1.6 }}>
            Pedido de demostración: no se cobró nada. Con el pago real conectado, acá iría el cobro y el aviso a la tienda.
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Cabecera titulo={producto.nombre} bajada={producto.categoria} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 20px' }}>
        <div aria-hidden="true" style={{ display: 'flex', height: 170, alignItems: 'center', justifyContent: 'center', borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#EFEFEE', fontSize: 64 }}>
          {cat ? cat.icono : '📦'}
        </div>
        <div style={{ marginTop: 16, fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{eur(producto.precio)}</div>
        <div style={{ marginTop: 4, fontSize: 12.5, color: T.suave }}>
          {producto.stock} en stock · envío {producto.envio === 0 ? 'gratis' : eur(producto.envio)}
        </div>

        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600 }}>Cantidad</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
            <button type="button" aria-label="Quitar uno" onClick={() => setCantidad((c) => Math.max(1, c - 1))}
              style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, fontSize: 18, cursor: 'pointer', fontFamily: 'inherit' }}>−</button>
            <span aria-live="polite" style={{ minWidth: 28, textAlign: 'center', fontSize: 15, fontWeight: 700 }}>{cantidad}</span>
            <button type="button" aria-label="Agregar uno" onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))}
              style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, fontSize: 18, cursor: 'pointer', fontFamily: 'inherit' }}>+</button>
          </div>
        </div>
      </div>

      <div style={{ flex: 'none', padding: '12px 20px calc(14px + env(safe-area-inset-bottom))', borderTop: '1px solid ' + T.borde, background: '#fff', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{eur(subtotal + producto.envio)}</div>
          <div style={{ fontSize: 11.5, color: T.suave }}>envío incluido</div>
        </div>
        <button
          type="button"
          onClick={() => datos.crearPedido({ producto, cantidad, ciudad: 'Madrid' }).then(setPedido)}
          style={{ marginLeft: 'auto', minHeight: 48, padding: '0 22px', border: 'none', borderRadius: 12, background: T.rojo, color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
        >
          Comprar
        </button>
      </div>
    </>
  );
}

// --- tiendas -----------------------------------------------------------

function Tiendas({ cerrar }) {
  const [categoria, setCategoria] = useState('todas');
  const [lista, setLista] = useState([]);
  const [abierta, setAbierta] = useState(null);

  const opciones = useMemo(
    () => [{ id: 'todas', nombre: 'Todas' }].concat(datos.CATEGORIAS_TIENDA.map((c) => ({ id: c.id, nombre: c.icono + ' ' + c.nombre }))),
    []
  );

  useEffect(() => {
    let vivo = true;
    datos.listarTiendas({ categoria }).then((r) => { if (vivo) setLista(r); });
    return () => { vivo = false; };
  }, [categoria]);

  if (abierta) return <FichaTienda tienda={abierta} cerrar={() => setAbierta(null)} />;

  return (
    <>
      <Cabecera titulo="Tiendas cerca" bajada={lista.length + ' negocios'} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 26px' }}>
        <Chips opciones={opciones} valor={categoria} alElegir={setCategoria} etiqueta="Categoría de negocio" />
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {lista.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setAbierta(t)}
              aria-label={'Ver ' + t.nombre}
              style={{ textAlign: 'left', display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff', color: T.tinta, cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <span aria-hidden="true" style={{ flex: 'none', width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.oscuro, fontSize: 20 }}>
                {(datos.CATEGORIAS_TIENDA.filter((c) => c.id === t.categorias[0])[0] || {}).icono || '🏪'}
              </span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700 }}>{t.nombre}</span>
                  {t.verificada ? <span aria-label="Negocio verificado" style={{ fontSize: 12 }}>✅</span> : null}
                </span>
                <span style={{ display: 'block', marginTop: 2, fontSize: 12, color: T.suave }}>
                  {t.ciudad} · {t.zona} · ★ {t.rating} ({t.resenas})
                </span>
              </span>
            </button>
          ))}
          {lista.length === 0 ? <Vacio texto="No hay negocios de esa categoría." /> : null}
        </div>
      </div>
    </>
  );
}

function FichaTienda({ tienda, cerrar }) {
  return (
    <>
      <Cabecera titulo={tienda.nombre} bajada={tienda.ciudad + ' · ' + tienda.zona} cerrar={cerrar} />
      <div data-scroll style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 26px' }}>
        <div style={{ padding: 16, borderRadius: T.radio, border: '1px solid ' + T.borde, background: '#fff' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tienda.categorias.map((c) => {
              const cat = datos.CATEGORIAS_TIENDA.filter((x) => x.id === c)[0];
              return (
                <span key={c} style={{ height: 26, display: 'inline-flex', alignItems: 'center', padding: '0 12px', borderRadius: 999, background: '#EFEFEE', fontSize: 11.5, fontWeight: 600 }}>
                  {cat ? cat.icono + ' ' + cat.nombre : c}
                </span>
              );
            })}
          </div>
          <div style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.55, color: T.tinta }}>{tienda.descripcion}</div>
          <div style={{ marginTop: 12, fontSize: 12.5, color: T.suave }}>
            ★ {tienda.rating} · {tienda.resenas} reseñas{tienda.verificada ? ' · Negocio verificado' : ''}
          </div>
        </div>

        {tienda.subastasHabilitadas ? (
          <div style={{ marginTop: 14, padding: 14, borderRadius: T.radio, background: '#FBE9E7', fontSize: 12.5, color: T.tinta, lineHeight: 1.55 }}>
            🔥 Esta tienda tiene subastas habilitadas: puede publicar motos en Hot Deal.
          </div>
        ) : null}

        <div style={{ marginTop: 14, fontSize: 11.5, color: T.tenue, lineHeight: 1.6 }}>
          La dirección exacta y el teléfono se comparten al confirmar una reserva o un pedido.
        </div>
      </div>
    </>
  );
}

// --- capa a pantalla completa ------------------------------------------

const PANTALLAS = { comprar: Comprar, subastas: Subastas, accesorios: Accesorios, tiendas: Tiendas };

export function CapaModulos({ modulo, cerrar }) {
  if (!modulo) return null;
  const Pantalla = PANTALLAS[modulo];
  if (!Pantalla) return null;
  return (
    <div
      data-screen-label={'Módulo · ' + modulo}
      style={{ position: 'absolute', inset: 0, zIndex: 7, background: T.fondo, display: 'flex', flexDirection: 'column', color: T.tinta }}
    >
      <div style={{ flex: 'none', height: 46 }} aria-hidden="true" />
      <Pantalla cerrar={cerrar} />
    </div>
  );
}
