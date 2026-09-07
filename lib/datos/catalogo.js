// Catalogo de demostracion de los modulos de marketplace (venta, subastas,
// accesorios y tiendas).
//
// Es el equivalente a lo que en motoappmarket vive en Supabase: providers,
// moto_listings, moto_bids y products. Aca son datos fijos para que la demo
// funcione sin backend. Cuando se conecte Supabase, esto se reemplaza por
// consultas dentro de lib/datos/index.js y ninguna pantalla se entera.
//
// Ninguno de estos negocios es real. No se copiaron datos de clientes de
// motoappmarket: sus tiendas y sus ~1.040 negocios de OpenStreetMap viven en
// la base de Rodrigo y quedaron deliberadamente fuera.

// Ciudades y zonas: las mismas que ya usa el alquiler entre particulares.
export const CIUDADES = {
  Barcelona: { centro: [41.3851, 2.1734], zonas: ['Eixample', 'Gràcia', 'Sant Martí', 'Sants'] },
  Madrid: { centro: [40.4168, -3.7038], zonas: ['Centro', 'Retiro', 'Malasaña', 'Chamberí'] },
  Valencia: { centro: [39.4699, -0.3763], zonas: ['Ciutat Vella', 'Ruzafa', 'El Carmen'] },
  Sevilla: { centro: [37.3891, -5.9845], zonas: ['Arenal', 'Triana', 'Nervión'] },
};

// Las 4 categorias de negocio de motoappmarket.
export const CATEGORIAS_TIENDA = [
  { id: 'venta', nombre: 'Venta', icono: '🏍️', color: '#D1552E' },
  { id: 'arriendo', nombre: 'Arriendo', icono: '🛵', color: '#C9A24A' },
  { id: 'servicio', nombre: 'Servicio', icono: '🔧', color: '#6E7A44' },
  { id: 'accesorios', nombre: 'Accesorios', icono: '⚙️', color: '#7A6BA8' },
];

// Subcategorias del marketplace de accesorios (mismas que lib/productCats.js).
export const CATEGORIAS_PRODUCTO = [
  { id: 'Cascos', icono: '🪖' },
  { id: 'Guantes', icono: '🧤' },
  { id: 'Chaquetas', icono: '🧥' },
  { id: 'Botas', icono: '🥾' },
  { id: 'Maletas y equipaje', icono: '🎒' },
  { id: 'Intercomunicadores', icono: '🎧' },
  { id: 'Neumáticos', icono: '🛞' },
  { id: 'Repuestos', icono: '🔩' },
  { id: 'Electrónica y GPS', icono: '📟' },
  { id: 'Cuidado y limpieza', icono: '🧴' },
];

// --- Tiendas -----------------------------------------------------------
// `subastasHabilitadas` reproduce providers.auctions_enabled: en
// motoappmarket rematar es un servicio de pago que se activa por tienda.
export const TIENDAS = [
  {
    id: 't-motorbcn', nombre: 'Motor Barcelona', ciudad: 'Barcelona', zona: 'Eixample',
    categorias: ['venta', 'servicio'], desvio: 0.012, rating: '4,7', resenas: 128,
    verificada: true, subastasHabilitadas: true,
    descripcion: 'Concesionario multimarca con taller propio y garantía de 12 meses.',
  },
  {
    id: 't-tallergracia', nombre: 'Taller Gràcia', ciudad: 'Barcelona', zona: 'Gràcia',
    categorias: ['servicio'], desvio: -0.009, rating: '4,9', resenas: 214,
    verificada: true, subastasHabilitadas: false,
    descripcion: 'Mecánica general, revisiones y preparación de ITV. Cita previa.',
  },
  {
    id: 't-ridergear', nombre: 'RiderGear', ciudad: 'Barcelona', zona: 'Sant Martí',
    categorias: ['accesorios'], desvio: 0.021, rating: '4,6', resenas: 89,
    verificada: false, subastasHabilitadas: false,
    descripcion: 'Equipación del piloto: cascos, textil y protecciones.',
  },
  {
    id: 't-madridmotos', nombre: 'Madrid Motos', ciudad: 'Madrid', zona: 'Centro',
    categorias: ['venta', 'arriendo', 'servicio'], desvio: 0.014, rating: '4,5', resenas: 302,
    verificada: true, subastasHabilitadas: true,
    descripcion: 'Venta de ocasión, alquiler por días y servicio técnico oficial.',
  },
  {
    id: 't-retiroscooter', nombre: 'Retiro Scooter', ciudad: 'Madrid', zona: 'Retiro',
    categorias: ['arriendo'], desvio: -0.011, rating: '4,4', resenas: 67,
    verificada: false, subastasHabilitadas: false,
    descripcion: 'Flota de scooters 125 para ciudad, con casco incluido.',
  },
  {
    id: 't-vlcmoto', nombre: 'València Moto', ciudad: 'Valencia', zona: 'Ruzafa',
    categorias: ['venta', 'accesorios'], desvio: 0.010, rating: '4,8', resenas: 141,
    verificada: true, subastasHabilitadas: false,
    descripcion: 'Ocasión seleccionada y tienda de accesorios en el mismo local.',
  },
  {
    id: 't-trianabikes', nombre: 'Triana Bikes', ciudad: 'Sevilla', zona: 'Triana',
    categorias: ['venta', 'servicio'], desvio: -0.013, rating: '4,3', resenas: 74,
    verificada: false, subastasHabilitadas: false,
    descripcion: 'Compra-venta de clásicas y custom, con taller de restauración.',
  },
];

// --- Motos en venta ----------------------------------------------------
// `vendedor` reproduce la division C2C / B2B de motoappmarket: 'particular'
// o el id de la tienda que publica.
export const VENTAS = [
  {
    id: 'v-cb500', marca: 'Honda', modelo: 'CB500F', anio: 2021, km: 12400,
    precio: 5400, categoria: 'naked', ciudad: 'Barcelona', zona: 'Eixample',
    vendedor: 't-motorbcn', garantia: '12 meses', color: 'Negro mate',
  },
  {
    id: 'v-mt03', marca: 'Yamaha', modelo: 'MT-03', anio: 2020, km: 18900,
    precio: 4200, categoria: 'naked', ciudad: 'Barcelona', zona: 'Sants',
    vendedor: 'particular', garantia: null, color: 'Azul',
  },
  {
    id: 'v-r3', marca: 'Yamaha', modelo: 'R3', anio: 2022, km: 7300,
    precio: 5900, categoria: 'deportiva', ciudad: 'Madrid', zona: 'Centro',
    vendedor: 't-madridmotos', garantia: '12 meses', color: 'Azul Racing',
  },
  {
    id: 'v-vstrom', marca: 'Suzuki', modelo: 'V-Strom 650', anio: 2019, km: 31500,
    precio: 5100, categoria: 'adventure', ciudad: 'Madrid', zona: 'Chamberí',
    vendedor: 'particular', garantia: null, color: 'Amarillo',
  },
  {
    id: 'v-xmax', marca: 'Yamaha', modelo: 'XMAX 300', anio: 2023, km: 4100,
    precio: 5600, categoria: 'scooter', ciudad: 'Valencia', zona: 'Ruzafa',
    vendedor: 't-vlcmoto', garantia: '24 meses', color: 'Gris',
  },
  {
    id: 'v-w800', marca: 'Kawasaki', modelo: 'W800', anio: 2018, km: 22700,
    precio: 6300, categoria: 'clasica', ciudad: 'Sevilla', zona: 'Triana',
    vendedor: 't-trianabikes', garantia: '6 meses', color: 'Verde y crema',
  },
  {
    id: 'v-duke390', marca: 'KTM', modelo: '390 Duke', anio: 2021, km: 14800,
    precio: 4700, categoria: 'naked', ciudad: 'Valencia', zona: 'El Carmen',
    vendedor: 'particular', garantia: null, color: 'Naranja',
  },
];

// --- Subastas (Hot Deal) -----------------------------------------------
// La tienda fija precio minimo, dias e incremento. `cierra` se calcula en
// lib/datos/index.js sobre el reloj de la demo, no aca, para que el catalogo
// no dependa de cuando se abrio la app.
export const SUBASTAS = [
  {
    id: 's-monster', marca: 'Ducati', modelo: 'Monster 797', anio: 2019, km: 19200,
    categoria: 'naked', ciudad: 'Barcelona', zona: 'Eixample', tienda: 't-motorbcn',
    precioMinimo: 5200, incremento: 100, duracionDias: 3, abiertaHaceHoras: 26, color: 'Rojo',
    pujas: [
      { id: 'p1', quien: 'Marta G.', monto: 5200, haceHoras: 26 },
      { id: 'p2', quien: 'Iker B.', monto: 5300, haceHoras: 14 },
      { id: 'p3', quien: 'Nuria P.', monto: 5450, haceHoras: 3 },
    ],
  },
  {
    id: 's-triple', marca: 'Triumph', modelo: 'Street Triple 765', anio: 2020, km: 16400,
    categoria: 'naked', ciudad: 'Madrid', zona: 'Centro', tienda: 't-madridmotos',
    precioMinimo: 7300, incremento: 150, duracionDias: 5, abiertaHaceHoras: 8, color: 'Negro',
    pujas: [{ id: 'p4', quien: 'Dani R.', monto: 7300, haceHoras: 8 }],
  },
  {
    id: 's-tenere', marca: 'Yamaha', modelo: 'Ténéré 700', anio: 2021, km: 25100,
    categoria: 'adventure', ciudad: 'Madrid', zona: 'Retiro', tienda: 't-madridmotos',
    precioMinimo: 8100, incremento: 200, duracionDias: 2, abiertaHaceHoras: 5, color: 'Azul',
    pujas: [],
  },
];

// --- Accesorios --------------------------------------------------------
export const PRODUCTOS = [
  { id: 'a-casco-int', nombre: 'Casco integral fibra', categoria: 'Cascos', precio: 249, tienda: 't-ridergear', stock: 8, envio: 6 },
  { id: 'a-casco-mod', nombre: 'Casco modular con solar', categoria: 'Cascos', precio: 189, tienda: 't-ridergear', stock: 12, envio: 6 },
  { id: 'a-guantes-ver', nombre: 'Guantes verano perforados', categoria: 'Guantes', precio: 54, tienda: 't-ridergear', stock: 23, envio: 4 },
  { id: 'a-guantes-inv', nombre: 'Guantes invierno impermeables', categoria: 'Guantes', precio: 79, tienda: 't-vlcmoto', stock: 15, envio: 4 },
  { id: 'a-chaqueta-tex', nombre: 'Chaqueta textil 3 capas', categoria: 'Chaquetas', precio: 219, tienda: 't-ridergear', stock: 6, envio: 7 },
  { id: 'a-botas-tour', nombre: 'Botas touring impermeables', categoria: 'Botas', precio: 165, tienda: 't-vlcmoto', stock: 9, envio: 7 },
  { id: 'a-topcase', nombre: 'Top case 45 L con respaldo', categoria: 'Maletas y equipaje', precio: 139, tienda: 't-vlcmoto', stock: 11, envio: 9 },
  { id: 'a-intercom', nombre: 'Intercomunicador Bluetooth', categoria: 'Intercomunicadores', precio: 129, tienda: 't-ridergear', stock: 18, envio: 4 },
  { id: 'a-neumatico', nombre: 'Neumático sport-touring 180/55', categoria: 'Neumáticos', precio: 148, tienda: 't-motorbcn', stock: 20, envio: 0 },
  { id: 'a-pastillas', nombre: 'Pastillas de freno sinterizadas', categoria: 'Repuestos', precio: 42, tienda: 't-motorbcn', stock: 34, envio: 4 },
  { id: 'a-kit-arrastre', nombre: 'Kit de arrastre reforzado', categoria: 'Repuestos', precio: 96, tienda: 't-tallergracia', stock: 14, envio: 5 },
  { id: 'a-gps', nombre: 'Soporte GPS con carga USB', categoria: 'Electrónica y GPS', precio: 68, tienda: 't-ridergear', stock: 21, envio: 4 },
  { id: 'a-cadena-lub', nombre: 'Lubricante de cadena', categoria: 'Cuidado y limpieza', precio: 16, tienda: 't-tallergracia', stock: 50, envio: 4 },
  { id: 'a-limpiador', nombre: 'Limpiador de casco y visor', categoria: 'Cuidado y limpieza', precio: 12, tienda: 't-ridergear', stock: 42, envio: 4 },
];
