'use client';
// GENERADO por scripts/convertir-logica.mjs desde legacy/index.html (v0.0.7).
// No editar a mano: volver a correr `npm run convertir`.
//
// La logica de dominio (listings, reservas, disponibilidad, conversaciones,
// agenda, publicacion, persistencia) es la de v0.0.7 sin cambios. Los unicos
// parches estan declarados en el script generador.
import React from 'react';
import Plantilla from './Plantilla';

const anchoVentana = () => (typeof window === 'undefined' ? 390 : window.innerWidth);
const altoVentana = () => (typeof window === 'undefined' ? 844 : window.innerHeight);

export default class Simulador extends React.Component {
  state = { vw: anchoVentana(), vh: altoVentana(), desde: '', hasta: '', mes: '', vista: 'lista', sesion: false, tab: 'inicio', correo: 'iker@motoapp.com', clave: 'motoapp2026', entrando: false, ciudad: '', categoria: 'Todas', precio: 0, buscarPaso: 'config', buscando: false, selector: false, reservaUsuario: null, fotoIdx: 0, avisoEnvio: '', favoritos: [], listing: null, volverA: 'inicio', verDetalles: false, resumen: false, paso: 'resumen', reservas: [], modo: 'usuario', tabProp: 'resumen', reservaProp: null, chat: null, borrador: '', conversaciones: {}, cuentaActiva: 'u-iker', pubSel: '', pubAbierta: false, mapaFallido: false,
    listingsDemo: [], mesAgenda: '', diaAgenda: '', filtroAgenda: 'todas', pasoPub: 1, publicada: '', borradorPub: null };

  // Coordenadas de ciudad para las publicaciones creadas en la demo.
  coordsCiudad = { Barcelona: [41.3851, 2.1734], Madrid: [40.4168, -3.7038], Valencia: [39.4699, -0.3763], Sevilla: [37.3891, -5.9845] };

  // Los Listings de fixture y los publicados en la sesión son UNA sola colección.
  listings(extra) {
    const demo = extra || this.state.listingsDemo || [];
    return this.datos.listings.concat(demo);
  }

  coordsDe(b) {
    if (this.coords[b.id]) return this.coords[b.id];
    const c = this.coordsCiudad[b.ciudad];
    if (!c) return null;
    return [c[0] + (b.desvio || 0), c[1] + (b.desvio || 0)];
  }

  zonasPorCiudad = {
    Barcelona: ['Eixample', 'Gràcia', 'Sant Martí', 'Sants'],
    Madrid: ['Centro', 'Retiro', 'Malasaña', 'Chamberí'],
    Valencia: ['Ciutat Vella', 'Ruzafa', 'El Carmen'],
    Sevilla: ['Arenal', 'Triana', 'Nervión']
  };

  formularioVacio() {
    return { marca: '', modelo: '', categoria: 'naked', anio: '2023', cc: '', transmision: 'Manual', ciudad: 'Barcelona', zona: 'Eixample', punto: '', precioDia: '', deposito: '300', descripcion: '' };
  }

  // PHOTO PACK v0.0.7 APPROVED DEMO ASSET. Única fuente de imagen de la aplicación,
  // asociada exclusivamente por listingId. Las tres vistas de un listing son la misma
  // unidad visual; la variante 'card' se deriva de la hero, nunca de otra vista.
  conFoto = ['l-mt07', 'l-ninja', 'l-gs', 'l-africa', 'l-bonne', 'l-pcx', 'l-forza', 'l-iron', 'l-z900'];
  vistasFoto = [
    { archivo: 'hero', etiqueta: 'vista general' },
    { archivo: 'lateral', etiqueta: 'perfil lateral' },
    { archivo: 'detalle', etiqueta: 'detalle' }
  ];

  rutaFoto(id, archivo) { return '/img/motos/' + id + '/' + archivo + '.webp'; }
  fotosDe(id) {
    if (this.conFoto.indexOf(id) < 0) return [];
    return this.vistasFoto.map(v => ({ ruta: this.rutaFoto(id, v.archivo), etiqueta: v.etiqueta }));
  }
  pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  foto(id) { const f = this.fotosDe(id); return f.length ? f[0].ruta : this.pixel; }
  tieneFoto(id) { return this.conFoto.indexOf(id) >= 0; }
  // Valor completo de background-image: si el hole no resuelve todavía, la declaración
  // se descarta y no se dispara ninguna petición con la ruta literal del hole. Si el
  // archivo falla, el div queda transparente y la placa de categoría hace de fallback.
  cssDe(ruta) { return ruta ? 'url("' + ruta + '")' : 'none'; }
  // Cards, thumbnails y mapa: variante ligera derivada de la hero del mismo listing.
  fotoCss(id) { return this.tieneFoto(id) ? this.cssDe(this.rutaFoto(id, 'card')) : 'none'; }
  // Ficha: la vista pedida de la galería, a tamaño hero.
  heroCss(id, i) {
    const f = this.fotosDe(id);
    if (!f.length) return 'none';
    return this.cssDe(f[Math.max(0, Math.min(f.length - 1, i || 0))].ruta);
  }
  moverFoto(paso) {
    const f = this.fotosDe(this.state.listing);
    if (f.length < 2) return;
    const n = f.length;
    this.setState({ fotoIdx: ((this.state.fotoIdx + paso) % n + n) % n });
  }

  // Color de categoría: identidad visual estable de cada moto en todo el recorrido.
  colores = {
    naked: '#7A6BA8', deportiva: '#D1552E', adventure: '#6E7A44',
    touring: '#3C6382', scooter: '#C9A24A', custom: '#8A5A3A', clasica: '#4A6B63'
  };

  nombresCategoria = {
    naked: 'Naked', deportiva: 'Deportiva', adventure: 'Adventure',
    touring: 'Touring', scooter: 'Scooter', custom: 'Custom', clasica: 'Clásica'
  };

  datos = {
    cuenta: 'u-iker',
    ownerListing: 'l-z900',
    personas: {
      'u-iker': { id: 'u-iker', nombre: 'Iker Beltrán', corto: 'Iker', correo: 'iker@motoapp.com', telefono: '+34 6•• ••• 337', pago: 'Visa ···· 4242', idioma: 'Español', desde: '2022', rating: '4,9', respuesta: 'Responde en menos de 1 h' },
      'u-sofia': { id: 'u-sofia', nombre: 'Sofía Marchena', corto: 'Sofía', correo: 'sofia@motoapp.com', telefono: '+34 6•• ••• 208', pago: 'Visa ···· 8813', idioma: 'Español', desde: '2021', rating: '4,9', respuesta: 'Responde en menos de 1 h' },
      'u-dani': { id: 'u-dani', nombre: 'Dani Roldán', corto: 'Dani', correo: 'dani@motoapp.com', telefono: '+34 6•• ••• 471', pago: 'Visa ···· 5502', idioma: 'Español', desde: '2023', rating: '4,8', respuesta: 'Responde el mismo día' },
      'u-teo': { id: 'u-teo', nombre: 'Teo Lacasa', corto: 'Teo', correo: 'teo@motoapp.com', telefono: '+34 6•• ••• 019', pago: 'Visa ···· 3140', idioma: 'Español', desde: '2020', rating: '4,9', respuesta: 'Responde en menos de 2 h' },
      'u-ruth': { id: 'u-ruth', nombre: 'Ruth Vergara', corto: 'Ruth', correo: 'ruth@motoapp.com', telefono: '+34 6•• ••• 662', pago: 'Visa ···· 7726', idioma: 'Español', desde: '2022', rating: '5,0', respuesta: 'Responde en menos de 1 h' },
      'u-nadia': { id: 'u-nadia', nombre: 'Nadia Espósito', corto: 'Nadia', correo: 'nadia@motoapp.com', telefono: '+34 6•• ••• 355', pago: 'Visa ···· 9014', idioma: 'Español', desde: '2024', rating: '4,8', respuesta: 'Responde el mismo día' }
    },
    ciudades: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
    listings: [
      { id: 'l-mt07', ownerId: 'u-sofia', marca: 'Yamaha', modelo: 'MT-07', anio: '2022', categoria: 'naked', color: 'Gris cyan', colorHex: '#4A5560', cc: 689, transmision: 'Manual', ciudad: 'Barcelona', zona: 'Eixample', punto: 'Gran Via de les Corts Catalanes 620', horario: 'Entrega 9:00–20:00 · devolución hasta 20:00', precioDia: 75, rating: '4,9', resenas: 74, deposito: 300, kmDia: 200, combustible: 'Depósito lleno / lleno', potencia: '73 CV',
        incluye: ['Casco homologado', 'Seguro a terceros (demo)', '200 km/día incluidos', 'Candado de disco'], equipamiento: ['ABS', 'Soporte de móvil', 'Puños calefactables', 'Baúl 45 L'] },
      { id: 'l-ninja', ownerId: 'u-dani', marca: 'Kawasaki', modelo: 'Ninja 650', anio: '2021', categoria: 'deportiva', color: 'Verde y negro', colorHex: '#3FA535', cc: 649, transmision: 'Manual', ciudad: 'Madrid', zona: 'Centro', punto: 'Calle de Alcalá 44', horario: 'Entrega 8:30–19:00 · devolución hasta 19:00', precioDia: 75, rating: '4,8', resenas: 52, deposito: 350, kmDia: 250, combustible: 'Depósito lleno / lleno', potencia: '68 CV',
        incluye: ['Casco integral', 'Seguro a terceros (demo)', '250 km/día incluidos', 'Guantes de verano'], equipamiento: ['ABS', 'Modos de conducción', 'Quickshifter', 'Escape homologado'] },
      { id: 'l-gs', ownerId: 'u-teo', marca: 'BMW', modelo: 'R 1250 GS', anio: '2023', categoria: 'adventure', color: 'Blanco, azul y rojo', colorHex: '#E4E8ED', cc: 1254, transmision: 'Manual', ciudad: 'Madrid', zona: 'Retiro', punto: 'Calle de Alfonso XII 26', horario: 'Entrega 9:00–18:00 · devolución hasta 18:00', precioDia: 120, rating: '5,0', resenas: 31, deposito: 600, kmDia: 300, combustible: 'Depósito lleno / lleno', potencia: '136 CV',
        incluye: ['Casco modular', 'Seguro a terceros (demo)', '300 km/día incluidos', 'Maletas laterales'], equipamiento: ['Control de crucero', 'Puños calefactables', 'Suspensión electrónica', 'Navegador'] },
      { id: 'l-africa', ownerId: 'u-ruth', marca: 'Honda', modelo: 'Africa Twin', anio: '2022', categoria: 'adventure', color: 'Tricolor, llantas doradas', colorHex: '#EDEFF2', cc: 1084, transmision: 'DCT automática', ciudad: 'Valencia', zona: 'Ciutat Vella', punto: 'Carrer de la Pau 18', horario: 'Entrega 9:00–19:00 · devolución hasta 19:00', precioDia: 110, rating: '4,9', resenas: 46, deposito: 500, kmDia: 300, combustible: 'Depósito lleno / lleno', potencia: '102 CV',
        incluye: ['Casco modular', 'Seguro a terceros (demo)', '300 km/día incluidos', 'Baúl 45 L'], equipamiento: ['Cambio DCT', 'Control de tracción', 'Pantalla regulable', 'Toma USB'] },
      { id: 'l-bonne', ownerId: 'u-sofia', marca: 'Triumph', modelo: 'Bonneville T120', anio: '2020', categoria: 'clasica', color: 'Burdeos y negro', colorHex: '#6B2230', cc: 1200, transmision: 'Manual', ciudad: 'Sevilla', zona: 'Arenal', punto: 'Calle Adriano 12', horario: 'Entrega 10:00–20:00 · devolución hasta 20:00', precioDia: 110, rating: '4,8', resenas: 63, deposito: 400, kmDia: 200, combustible: 'Depósito lleno / lleno', potencia: '80 CV',
        incluye: ['Casco jet', 'Seguro a terceros (demo)', '200 km/día incluidos', 'Alforjas de piel'], equipamiento: ['Control de tracción', 'Asiento biplaza', 'Puños calefactables', 'Toma USB'] },
      { id: 'l-pcx', ownerId: 'u-dani', marca: 'Honda', modelo: 'PCX 125', anio: '2023', categoria: 'scooter', color: 'Blanco perla', colorHex: '#F1F1EE', cc: 125, transmision: 'Automática', ciudad: 'Valencia', zona: 'Ruzafa', punto: 'Carrer de Cadis 34', horario: 'Entrega 9:00–21:00 · devolución hasta 21:00', precioDia: 35, rating: '4,7', resenas: 118, deposito: 200, kmDia: 150, combustible: 'Depósito lleno / lleno', potencia: '12 CV',
        incluye: ['Dos cascos jet', 'Seguro a terceros (demo)', '150 km/día incluidos', 'Cofre trasero'], equipamiento: ['ABS', 'Start-stop', 'Toma USB', 'Hueco bajo el asiento'] },
      { id: 'l-forza', ownerId: 'u-ruth', marca: 'Honda', modelo: 'Forza 350', anio: '2023', categoria: 'scooter', color: 'Grafito mate', colorHex: '#4C5054', cc: 330, transmision: 'Automática', ciudad: 'Barcelona', zona: 'Sant Martí', punto: 'Carrer de Pujades 128', horario: 'Entrega 9:00–20:00 · devolución hasta 20:00', precioDia: 38, rating: '4,8', resenas: 87, deposito: 200, kmDia: 200, combustible: 'Depósito lleno / lleno', potencia: '29 CV',
        incluye: ['Dos cascos jet', 'Seguro a terceros (demo)', '200 km/día incluidos', 'Cofre 45 L'], equipamiento: ['Parabrisas eléctrico', 'Smart Key', 'Toma USB', 'Control de tracción'] },
      { id: 'l-iron', ownerId: 'u-teo', marca: 'Harley-Davidson', modelo: 'Iron 883', anio: '2019', categoria: 'custom', color: 'Negro mate', colorHex: '#232629', cc: 883, transmision: 'Manual', ciudad: 'Madrid', zona: 'Malasaña', punto: 'Calle del Pez 21', horario: 'Entrega 10:00–19:00 · devolución hasta 19:00', precioDia: 95, rating: '4,7', resenas: 38, deposito: 450, kmDia: 200, combustible: 'Depósito lleno / lleno', potencia: '52 CV',
        incluye: ['Casco jet', 'Seguro a terceros (demo)', '200 km/día incluidos', 'Alforja lateral'], equipamiento: ['Escape Vance & Hines', 'Asiento bajo', 'Manillar drag', 'Toma USB'] },
      { id: 'l-z900', ownerId: 'u-iker', marca: 'Kawasaki', modelo: 'Z900', anio: '2022', categoria: 'naked', color: 'Azul Twilight', colorHex: '#2B3A55', cc: 948, transmision: 'Manual', ciudad: 'Barcelona', zona: 'Gràcia', punto: 'Carrer Gran de Gràcia 88', horario: 'Entrega 9:00–20:00 · devolución hasta 20:00', precioDia: 95, rating: '4,9', resenas: 41, deposito: 400, kmDia: 250, combustible: 'Depósito lleno / lleno', potencia: '125 CV',
        incluye: ['Casco integral', 'Seguro a terceros (demo)', '250 km/día incluidos', 'Candado de disco'], equipamiento: ['ABS', 'Modos de conducción', 'Quickshifter', 'Soporte de móvil'] }
    ]
  };

  // Puntos de entrega anclados a las coordenadas reales de Motoapp en España
  // (Barcelona 41.3851/2.1734, Madrid 40.4168/-3.7038, Valencia 39.4699/-0.3763,
  // Sevilla 37.3891/-5.9845), con desplazamientos de barrio para separar los pines.
  coords = {
    'l-mt07': [41.3872, 2.1701],
    'l-ninja': [40.4185, -3.7005],
    'l-gs': [40.4150, -3.6890],
    'l-africa': [39.4712, -0.3745],
    'l-bonne': [37.3878, -5.9962],
    'l-pcx': [39.4623, -0.3735],    'l-forza': [41.3990, 2.1925],
    'l-iron': [40.4260, -3.7040],
    'l-z900': [41.4040, 2.1560]
  };

  // Disponibilidad simulada: días ocupados expresados como desplazamiento desde hoy,
  // para que el ensayo siga teniendo sentido en cualquier fecha de presentación.
  bloqueosDemo = {
    'l-ninja': [[8, 13]],
    'l-pcx': [[11, 11]],    'l-gs': [[0, 4], [24, 29]],
    'l-bonne': [[30, 34]]
  };

  navDefs = [
    { clave: 'inicio', etiqueta: 'Inicio', d: 'M3.5 10.6L12 3.6l8.5 7v9.8h-17z' },
    { clave: 'buscar', etiqueta: 'Buscar', d: 'M10.8 17.6a6.8 6.8 0 1 0 0-13.6 6.8 6.8 0 0 0 0 13.6zm5 .4l4 4' },
    { clave: 'favoritos', etiqueta: 'Favoritos', d: 'M12 20.3l-1.4-1.3C5 15 2 12.3 2 8.9 2 6.1 4.1 4 6.9 4c1.6 0 3.1.7 4.1 1.9C12.1 4.7 13.6 4 15.2 4 18 4 20 6.1 20 8.9c0 3.4-3 6.1-8.6 11.1z' },
    { clave: 'reservas', etiqueta: 'Mis reservas', d: 'M4 5.5h16v14H4zM8 3.5v4M16 3.5v4M4 10h16' },
    { clave: 'perfil', etiqueta: 'Perfil', d: 'M12 11.5a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zM4.5 20.5c0-3.7 3.4-5.8 7.5-5.8s7.5 2.1 7.5 5.8' }
  ];

  clave1 = 'moto-market-demo-v2';

  rangosPrecio = [
    { clave: 0, etiqueta: 'Cualquiera' },
    { clave: 1, etiqueta: 'Hasta 50 €', max: 50 },
    { clave: 2, etiqueta: '50–90 €', min: 50, max: 90 },
    { clave: 3, etiqueta: 'Más de 90 €', min: 90 }
  ];

  mapaRef = React.createRef();
  chatRef = React.createRef();
  inputRef = React.createRef();

  placa(cat) {
    const c = this.colores[cat] || '#5B6570';
    return 'linear-gradient(114deg, #14171B 0%, #14171B 44%, ' + c + ' 44%, ' + c + ' 47.6%, #2A2F36 47.6%, #1B1F25 100%)';
  }

  iniciarMapa() {
    if (this.mapa) return;
    const el = this.mapaRef.current;
    const L = window.L;
    if (!el || !L || !L.markerClusterGroup) {
      this.intentosMapa = (this.intentosMapa || 0) + 1;
      // Sin retries infinitos: tras ~2 s el mapa cede el paso a la lista.
      if (this.intentosMapa > 14) {
        if (!this.state.mapaFallido) this.setState({ mapaFallido: true });
        return;
      }
      clearTimeout(this.reintentoMapa);
      this.reintentoMapa = setTimeout(() => this.iniciarMapa(), 150);
      return;
    }
    this.intentosMapa = 0;
    el.className = '';
    el.innerHTML = '';
    this.nodoMapa = el;
    this.mapa = L.map(el, { zoomControl: false, attributionControl: false }).setView([40.2, -3.6], 6);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' }).addTo(this.mapa);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' }).addTo(this.mapa);
    L.control.attribution({ prefix: false, position: 'bottomleft' }).addTo(this.mapa);
    this.capa = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 45,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: cluster => {
        const n = cluster.getChildCount();
        const size = n < 10 ? 38 : n < 50 ? 46 : 54;
        return L.divIcon({
          html: '<div class="cluster-bubble" style="width:' + size + 'px;height:' + size + 'px;">' + n + '</div>',
          className: '',
          iconSize: [size, size]
        });
      }
    }).addTo(this.mapa);
    this.pintarPines();
    setTimeout(() => { if (this.mapa) { this.mapa.invalidateSize(); this.encuadrar(); } }, 80);
  }

  // El encuadre se recalcula cuando el contenedor ya tiene altura: con altura 0,
  // Leaflet resolvería el ajuste a zoom 0 y el mapa quedaría en la tesela del mundo.
  encuadrar() {
    const L = window.L;
    if (!L || !this.mapa || !this.marcadores || !this.marcadores.length) return;
    const el = this.nodoMapa;
    if (!el || !el.clientHeight) {
      clearTimeout(this.reintentoEncuadre);
      this.reintentoEncuadre = setTimeout(() => this.encuadrar(), 120);
      return;
    }
    this.mapa.invalidateSize();
    this.mapa.fitBounds(L.featureGroup(this.marcadores).getBounds().pad(0.4), { animate: false });
  }

  // El pin lleva el precio: permite comparar ubicación y precio sin abrir la ficha.
  pintarPines() {
    const L = window.L;
    if (!L || !this.capa) return;
    this.capa.clearLayers();
    const marcadores = [];
    this.pinesActuales().forEach(b => {
      const c = this.coordsDe(b);
      if (!c) return;
      const color = this.colores[b.categoria] || '#5B6570';
      const icon = L.divIcon({
        html: '<div style="display:flex;align-items:center;height:28px;padding:0 10px;border-radius:14px;background:#0E1013;border:2px solid ' + color + ';color:#fff;font-family:Archivo,sans-serif;font-size:12.5px;font-weight:700;white-space:nowrap;box-shadow:0 2px 7px rgba(0,0,0,.4);">' + this.eur(b.precioDia) + '</div>',
        className: '',
        iconSize: [64, 28],
        iconAnchor: [32, 14]
      });
      const marcador = L.marker(c, { icon: icon });
      const contenido = document.createElement('div');
      // Misma colección photos[] que el resto de la aplicación: la variante de card
      // del propio listing, con la placa de categoría debajo como fallback de §7.
      const marco = document.createElement('div');
      marco.className = 'lp-foto';
      marco.style.background = this.placa(b.categoria);
      if (this.tieneFoto(b.id)) {
        const foto = document.createElement('span');
        foto.setAttribute('role', 'img');
        foto.setAttribute('aria-label', b.marca + ' ' + b.modelo + (b.color ? ', ' + b.color.toLowerCase() : '') + ', en ' + b.ciudad);
        foto.style.backgroundImage = 'url("' + this.rutaFoto(b.id, 'card') + '")';
        marco.appendChild(foto);
      }
      const cuerpo = document.createElement('div');
      cuerpo.className = 'lp-cuerpo';
      const titulo = document.createElement('div');
      titulo.className = 'lp-title';
      titulo.textContent = b.marca + ' ' + b.modelo;
      const precio = document.createElement('div');
      precio.className = 'lp-price';
      precio.textContent = this.eur(b.precioDia) + ' / día · ★ ' + b.rating + ' · ' + b.zona;
      const btn = document.createElement('button');
      btn.className = 'lp-btn';
      btn.textContent = 'Ver ficha';
      btn.setAttribute('aria-label', 'Ver la ficha de ' + b.marca + ' ' + b.modelo);
      btn.onclick = () => this.abrirListing(b.id);
      cuerpo.appendChild(titulo);
      cuerpo.appendChild(precio);
      cuerpo.appendChild(btn);
      contenido.appendChild(marco);
      contenido.appendChild(cuerpo);
      marcador.bindPopup(contenido, { closeButton: false });
      marcadores.push(marcador);
    });
    this.capa.addLayers(marcadores);
    this.marcadores = marcadores;
    this.firmaPines = this.firmaElegibles();
    this.encuadrar();
  }

  firmaElegibles() {
    return this.state.tab + '|' + this.pinesActuales().map(b => b.id).join(',');
  }

  destruirMapa() {
    clearTimeout(this.reintentoMapa);
    clearTimeout(this.reintentoEncuadre);
    if (this.mapa) { this.mapa.remove(); this.mapa = null; this.capa = null; this.firmaPines = null; this.marcadores = null; }
    const el = this.nodoMapa;
    this.nodoMapa = null;
    if (el) { el.className = ''; el.innerHTML = ''; }
  }

  largoChat() {
    const s = this.state;
    const r = s.chat ? s.reservas.filter(x => x.id === s.chat)[0] : null;
    const c = r ? s.conversaciones[r.conversationId] : null;
    return c ? (c.mensajes || []).length : -1;
  }

  // El hilo abierto siempre muestra el último mensaje, sin usar scrollIntoView.
  componentDidUpdate(prevProps, prevState) {
    const el = this.chatRef.current;
    const largo = this.largoChat();
    if (el && (this.ultimoChat !== this.state.chat || this.ultimoLargo !== largo)) {
      this.ultimoChat = this.state.chat;
      this.ultimoLargo = largo;
      el.scrollTop = el.scrollHeight;
    }
    const s = this.state;
    const enMapa = s.sesion && s.modo === 'usuario' && !s.listing && !s.mapaFallido && !s.buscando && !s.reservaUsuario &&
      (s.tab === 'inicio' || (s.tab === 'buscar' && s.vista === 'mapa' && s.buscarPaso === 'resultados' && this.contextoValido()));
    if (enMapa) {
      if (this.mapa && this.nodoMapa !== this.mapaRef.current) this.destruirMapa();
      if (!this.mapa) this.iniciarMapa();
      else if (this.firmaPines !== this.firmaElegibles()) this.pintarPines();
    } else if (this.mapa) {
      this.destruirMapa();
    }
  }

  componentDidMount() {
    this.cargarMapaLib();
    let g = null;
    try { g = JSON.parse(localStorage.getItem(this.clave1) || 'null'); } catch (e) { g = null; }
    const listingsDemo = Array.isArray(g && g.listingsDemo) ? g.listingsDemo.filter(x => x && x.id && x.ownerId) : [];
    const reservasOk = this.normalizarReservas(g && g.reservas, listingsDemo);
    const tabsProp = ['panel', 'agenda', 'publicar', 'mensajes', 'perfil'];
    const ctx = this.contextoGuardado(g);
    this.alRedimensionar = () => {
      this.setState({ vw: anchoVentana(), vh: altoVentana() });
      clearTimeout(this.temporizadorMedida);
      this.temporizadorMedida = setTimeout(() => { if (this.mapa) this.encuadrar(); }, 120);
    };
    window.addEventListener('resize', this.alRedimensionar);
    const p = this.props.pantallaInicial;
    const mapaPantallas = { 'Inicio': 'inicio', 'Buscar': 'buscar', 'Favoritos': 'favoritos', 'Mis reservas': 'reservas', 'Perfil': 'perfil' };
    const inicial = p && p !== 'Login' ? mapaPantallas[p] : null;
    this.setState({
      sesion: p && p !== 'Login' ? true : (g ? !!g.sesion : false),
      tab: inicial || (g && g.tab) || 'inicio',
      ciudad: ctx.ciudad,
      categoria: (g && g.categoria) || 'Todas',
      precio: (g && g.precio) || 0,
      desde: ctx.desde,
      hasta: ctx.hasta,
      mes: ctx.mes,
      vista: g && g.vista === 'mapa' ? 'mapa' : 'lista',
      buscarPaso: ctx.ciudad && ctx.hasta && g && g.buscarPaso === 'resultados' ? 'resultados' : 'config',
      favoritos: (g && g.favoritos) || [],
      reservas: reservasOk,
      modo: (g && g.modo) || 'usuario',
      listingsDemo: listingsDemo,
      tabProp: tabsProp.indexOf(g && g.tabProp) >= 0 ? g.tabProp : 'panel',
      cuentaActiva: (g && g.cuentaActiva) || 'u-iker',
      pubSel: this.pubSelValido(g && g.pubSel, (g && g.cuentaActiva) || 'u-iker', listingsDemo),
      borradorPub: Object.assign(this.formularioVacio(), (g && g.borradorPub) || {}),
      pasoPub: Math.min(4, Math.max(1, (g && g.pasoPub) || 1)),
      conversaciones: this.normalizarConversaciones(g && g.conversaciones, reservasOk)
    });
  }

  // Integridad referencial de la demo: una reserva sobrevive solo si su listing y sus
  // dos participantes se resuelven. El ownerId se rederiva del listing, nunca se infiere.
  normalizarReservas(guardadas, listingsDemo) {
    const d = this.datos;
    const todos = this.listings(listingsDemo || []);
    const lista = [];
    (guardadas || []).forEach(r => {
      const b = todos.filter(x => x.id === r.listingId)[0];
      if (!b) return;
      if (!r.buyerId || !d.personas[r.buyerId]) return;
      if (!d.personas[b.ownerId]) return;
      if (r.buyerId === b.ownerId) return;
      if (!r.desde || !r.hasta) return;
      const id = r.id || r.codigo;
      if (!id) return;
      const rr = this.etiquetaRango(r.desde, r.hasta);
      lista.push(Object.assign({}, r, {
        id: id, codigo: id, listingId: b.id, ownerId: b.ownerId,
        fechas: rr.etiqueta, dias: rr.dias,
        conversationId: r.conversationId || ('cv-' + id),
        precioDia: r.precioDia || b.precioDia,
        status: r.status || 'confirmed'
      }));
    });
    if (!lista.filter(r => r.id === 'RD-2071').length) lista.unshift(this.reservaEntranteDemo());
    return lista;
  }

  // Una conversación sin su reserva es un registro huérfano: se descarta.
  normalizarConversaciones(guardadas, reservas) {
    const base = Object.assign(this.conversacionEntranteDemo(), guardadas || {});
    const out = {};
    Object.keys(base).forEach(id => {
      const c = base[id];
      if (!c || !c.reservationId) return;
      const r = reservas.filter(x => x.id === c.reservationId)[0];
      if (!r) return;
      out[id] = {
        id: id,
        reservationId: r.id,
        buyerId: r.buyerId,
        ownerId: r.ownerId,
        participantIds: [r.buyerId, r.ownerId],
        // Contrato de Message: id, conversationId, senderId válido, texto, createdAt ISO y hora.
        mensajes: (c.mensajes || []).map((m, i) => {
          if (!m || !m.texto || !m.senderId) return null;
          if (m.senderId !== r.buyerId && m.senderId !== r.ownerId) return null;
          const creado = this.isoValido(m.createdAt) ? m.createdAt : (this.isoValido(r.createdAt) ? r.createdAt : new Date().toISOString());
          return {
            id: m.id || ('msg-' + id + '-' + (i + 1)),
            conversationId: id,
            senderId: m.senderId,
            texto: m.texto,
            hora: m.hora || this.horaDe(creado),
            createdAt: creado
          };
        }).filter(m => !!m)
      };
    });
    // Toda reserva debe tener su conversación: si falta, se crea vacía.
    reservas.forEach(r => {
      if (!out[r.conversationId]) {
        out[r.conversationId] = {
          id: r.conversationId, reservationId: r.id, buyerId: r.buyerId, ownerId: r.ownerId,
          participantIds: [r.buyerId, r.ownerId], mensajes: []
        };
      }
    });
    return out;
  }

  reiniciarDemo() {
    this.ultimoCodigo = null;
    this.toquesHora = 0;
    try { localStorage.removeItem(this.clave1); } catch (e) {}
    this.setState({
      sesion: false, tab: 'inicio', correo: 'iker@motoapp.com', clave: 'motoapp2026', entrando: false,
      vista: 'lista', ciudad: '', categoria: 'Todas', precio: 0,
      buscarPaso: 'config', buscando: false, selector: false, reservaUsuario: null, fotoIdx: 0, avisoEnvio: '',
      desde: '', hasta: '', mes: this.hoyIso().slice(0, 7), favoritos: [],
      listing: null, volverA: 'inicio', verDetalles: false, resumen: false, paso: 'resumen',
      modo: 'usuario', tabProp: 'panel', reservaProp: null, chat: null, borrador: '',
      cuentaActiva: 'u-iker', pubSel: '', pubAbierta: false, listingsDemo: [],
      mesAgenda: '', diaAgenda: '', filtroAgenda: 'todas', pasoPub: 1, publicada: '', borradorPub: this.formularioVacio(),
      reservas: [this.reservaEntranteDemo()], conversaciones: this.normalizarConversaciones(null, [this.reservaEntranteDemo()])
    });
  }

  // Operación B: otra persona reserva la moto de la cuenta. Sus fechas se derivan
  // del mismo reloj que el resto de la demo, nunca de un literal fijo.
  reservaEntranteDemo() {
    const b = this.datos.listings.filter(x => x.id === this.datos.ownerListing)[0];
    const base = this.aDia(this.hoyIso()).getTime();
    const desde = this.aIso(new Date(base + 5 * 86400000));
    const hasta = this.aIso(new Date(base + 7 * 86400000));
    const r = this.etiquetaRango(desde, hasta);
    return {
      id: 'RD-2071', codigo: 'RD-2071', conversationId: 'cv-RD-2071',
      listingId: b.id, buyerId: 'u-nadia', ownerId: b.ownerId,
      titulo: b.marca + ' ' + b.modelo, marca: b.marca, modelo: b.modelo, categoria: b.categoria,
      punto: b.punto, ciudad: b.ciudad, zona: b.zona,
      desde: desde, hasta: hasta, fechas: r.etiqueta, dias: r.dias,
      precioDia: b.precioDia, subtotal: b.precioDia * r.dias, total: b.precioDia * r.dias,
      deposito: b.deposito, status: 'confirmed', estado: 'Confirmada',
      createdAt: new Date(base - 2 * 86400000).toISOString()
    };
  }

  // ISO válido y hora coherente también en los fixtures: mismo reloj que el resto.
  isoValido(v) { return typeof v === 'string' && !isNaN(new Date(v).getTime()) && v.length >= 10; }
  horaDe(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }
  isoConHora(diasAtras, h, m) {
    const base = this.aDia(this.hoyIso());
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() - diasAtras, h, m, 0);
    return d.toISOString();
  }

  conversacionEntranteDemo() {
    const t1 = this.isoConHora(2, 10, 12);
    const t2 = this.isoConHora(2, 10, 26);
    return { 'cv-RD-2071': {
      id: 'cv-RD-2071', reservationId: 'RD-2071', buyerId: 'u-nadia', ownerId: 'u-iker',
      participantIds: ['u-nadia', 'u-iker'],
      mensajes: [
        { id: 'msg-cv-RD-2071-1', conversationId: 'cv-RD-2071', senderId: 'u-nadia', texto: 'Hola Iker, ¿la recogida sigue siendo en Gràcia a las 9:00?', hora: this.horaDe(t1), createdAt: t1 },
        { id: 'msg-cv-RD-2071-2', conversationId: 'cv-RD-2071', senderId: 'u-iker', texto: 'Sí, Nadia. Gran de Gràcia 88. Llevo el casco talla M y el candado montado.', hora: this.horaDe(t2), createdAt: t2 }
      ]
    } };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.alRedimensionar);
    clearTimeout(this.temporizadorMedida);
    clearTimeout(this.temporizadorHora);
    clearTimeout(this.temporizadorBusqueda);
    clearTimeout(this.temporizadorAviso);
    this.destruirMapa();
  }

  guardar(parche) {
    this.setState(parche, () => {
      const s = this.state;
      try {
        localStorage.setItem(this.clave1, JSON.stringify({
          sesion: s.sesion, tab: s.tab, ciudad: s.ciudad, categoria: s.categoria, precio: s.precio,
          desde: s.desde, hasta: s.hasta, mes: s.mes, vista: s.vista, buscarPaso: s.buscarPaso, favoritos: s.favoritos, reservas: s.reservas, modo: s.modo, tabProp: s.tabProp,
          conversaciones: s.conversaciones, cuentaActiva: s.cuentaActiva, pubSel: s.pubSel, listingsDemo: s.listingsDemo, borradorPub: s.borradorPub, pasoPub: s.pasoPub
        }));
      } catch (e) {}
    });
  }

  // La publicación seleccionada solo se restaura si existe y pertenece a la cuenta activa.
  pubSelValido(id, cuentaId, listingsDemo) {
    if (!id) return '';
    const l = this.listings(listingsDemo || []).filter(x => x.id === id)[0];
    if (!l) return '';
    if (cuentaId && l.ownerId !== cuentaId) return '';
    return l.id;
  }

  // Cuenta activa de la demo: el contexto de anfitrión puede apuntar a otra identidad.
  cuenta() { return this.state.cuentaActiva || this.datos.cuenta; }
  // Activación por teclado para las superficies accionables del Bloque 1.
  teclado(fn) {
    return e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };
  }
  yo() { return this.persona(this.cuenta()); }
  persona(id) { return this.datos.personas[id] || { nombre: '—', corto: '—' }; }
  listing(id) { return this.listings().filter(b => b.id === id)[0]; }

  eur(n) {
    const s = String(Math.round(n));
    let out = '';
    for (let i = 0; i < s.length; i++) {
      if (i > 0 && (s.length - i) % 3 === 0) out += '.';
      out += s.charAt(i);
    }
    return out + ' €';
  }

  carnet(cc) {
    if (cc <= 125) return 'Carnet A1 o B con 3 años';
    if (cc <= 500) return 'Carnet A2 o superior';
    return 'Carnet A';
  }

  tarjeta(b, dias) {
    const fotoSrc = this.foto(b.id);
    return {
      id: b.id,
      marca: b.marca,
      modelo: b.modelo,
      titulo: b.marca + ' ' + b.modelo,
      categoria: this.nombresCategoria[b.categoria],
      placa: this.placa(b.categoria),
      placaMeta: b.cc + ' cc · ' + b.anio,
      fotoSrc: fotoSrc,
      fotoCss: this.fotoCss(b.id),
      cardCss: this.fotoCss(b.id),
      altFoto: b.marca + ' ' + b.modelo + (b.color ? ', ' + b.color.toLowerCase() : '') + ', en ' + b.ciudad,
      hayFoto: this.tieneFoto(b.id),
      sinFoto: !this.tieneFoto(b.id),
      ubicacion: b.ciudad + ' · ' + b.zona,
      rating: b.rating,
      resenas: b.resenas,
      etiquetaAbrir: 'Ver ' + b.marca + ' ' + b.modelo + ' en ' + b.ciudad,
      etiquetaFav: this.state.favoritos.indexOf(b.id) >= 0 ? 'Quitar de favoritos' : 'Guardar en favoritos',
      teclas: e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.abrirListing(b.id); }
      },
      meta: this.nombresCategoria[b.categoria] + ' · ' + b.cc + ' cc · ' + b.ciudad,      precioDia: this.eur(b.precioDia),
      total: dias > 0 ? this.eur(b.precioDia * dias) + ' total · ' + dias + (dias === 1 ? ' día' : ' días') : '',
      corazonRelleno: this.state.favoritos.indexOf(b.id) >= 0 ? '#E10600' : 'none',
      corazonBorde: this.state.favoritos.indexOf(b.id) >= 0 ? '#E10600' : '#14171B',
      fav: e => { if (e && e.stopPropagation) e.stopPropagation(); this.alternarFavorito(b.id); },
      abrir: () => this.abrirListing(b.id)
    };
  }

  abrirListing(id) {
    this.guardar({ listing: id, volverA: this.state.tab, verDetalles: false, resumen: false, paso: 'resumen', fotoIdx: 0 });
  }

  confirmarReserva(b, rango, dias, total) {
    const s = this.state;
    if (b.ownerId === this.cuenta()) { this.setState({ paso: 'resumen', resumen: false }); return; }
    const fx = this.fechas();
    const desde = fx.desde;
    const hasta = fx.hasta || fx.desde;
    // Revalidación antes de crear: nadie puede reservar dos veces el mismo rango.
    if (!this.disponible(b.id, desde, hasta)) { this.setState({ paso: 'error' }); return; }
    // Fechas visibles e importes derivados de los ISO canónicos, nunca de copias.
    const rr = this.etiquetaRango(desde, hasta);
    const codigo = 'RD-' + (2100 + s.reservas.length * 43);
    const convId = 'cv-' + codigo;
    const ahora = new Date();
    const hora = ('0' + ahora.getHours()).slice(-2) + ':' + ('0' + ahora.getMinutes()).slice(-2);
    // ownerId se toma del listing, no del modo ni de la pantalla.
    const reserva = {
      id: codigo, codigo: codigo, conversationId: convId, listingId: b.id,
      buyerId: this.cuenta(), ownerId: b.ownerId,
      titulo: b.marca + ' ' + b.modelo, marca: b.marca, modelo: b.modelo, categoria: b.categoria,
      punto: b.punto, ciudad: b.ciudad, zona: b.zona,
      desde: desde, hasta: hasta, fechas: rr.etiqueta, dias: rr.dias,
      precioDia: b.precioDia, subtotal: b.precioDia * rr.dias, total: b.precioDia * rr.dias,
      deposito: b.deposito, status: 'confirmed', estado: 'Confirmada',
      createdAt: ahora.toISOString()
    };
    this.ultimoCodigo = codigo;
    const convs = Object.assign({}, s.conversaciones);
    convs[convId] = {
      id: convId, reservationId: codigo, buyerId: reserva.buyerId, ownerId: reserva.ownerId,
      participantIds: [reserva.buyerId, reserva.ownerId],
      mensajes: [{
        id: 'msg-' + codigo + '-1', conversationId: convId, senderId: b.ownerId,
        texto: 'Hola ' + this.yo().corto + ', gracias por la reserva. Te espero en ' + b.punto + '. Cualquier duda, por aquí.',
        hora: hora, createdAt: ahora.toISOString()
      }]
    };
    this.guardar({ reservas: s.reservas.concat([reserva]), paso: 'confirmada', conversaciones: convs });
  }

  // Cambio de identidad explícito del escenario demo: pasa a ver la app como el
  // anfitrión de una reserva concreta, sin duplicar ningún objeto.
  verComoAnfitrion(r) {
    if (!r) return;
    this.guardar({
      cuentaActiva: r.ownerId, pubSel: '', filtroAgenda: 'todas', diaAgenda: '', mesAgenda: '', modo: 'propietario', tabProp: 'panel', reservaProp: r.id,
      listing: null, resumen: false, paso: 'resumen', chat: null, tab: 'inicio'
    });
  }

  volverACuentaBase() {
    this.guardar({
      cuentaActiva: this.datos.cuenta, pubSel: '', filtroAgenda: 'todas', diaAgenda: '', mesAgenda: '', pubAbierta: false, modo: 'usuario', tab: 'reservas',
      tabProp: 'panel', reservaProp: null, chat: null, listing: null
    });
  }

  cambiarModo(modo) {
    this.guardar({ cuentaActiva: this.datos.cuenta, modo: modo, listing: null, resumen: false, paso: 'resumen', chat: null, reservaProp: null, pubAbierta: false, pubSel: '', filtroAgenda: 'todas', diaAgenda: '', mesAgenda: '', tab: modo === 'usuario' ? 'perfil' : 'inicio', tabProp: 'panel' });
  }

  // El remitente es la cuenta activa, no el modo de la interfaz.
  enviarMensaje(convId) {
    const s = this.state;
    const t = (s.borrador || '').trim();
    const conv = convId ? s.conversaciones[convId] : null;
    if (!t || !conv) return;
    const d = new Date();
    const hora = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    const convs = Object.assign({}, s.conversaciones);
    const prev = conv.mensajes || [];
    convs[convId] = Object.assign({}, conv, {
      mensajes: prev.concat([{
        id: 'msg-' + convId + '-' + (prev.length + 1), conversationId: convId,
        senderId: this.cuenta(), texto: t, hora: hora, createdAt: d.toISOString()
      }])
    });
    this.setState({ borrador: '', avisoEnvio: 'Mensaje enviado' });
    this.guardar({ conversaciones: convs });
    clearTimeout(this.temporizadorAviso);
    this.temporizadorAviso = setTimeout(() => this.setState({ avisoEnvio: '' }), 2200);
    const input = this.inputRef.current;
    if (input) input.focus();
  }

  mesNombres = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  mesCortos = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  letrasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  aIso(fecha) {
    return fecha.getFullYear() + '-' + String(fecha.getMonth() + 1).padStart(2, '0') + '-' + String(fecha.getDate()).padStart(2, '0');
  }

  aDia(iso) {
    const p = iso.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  hoyIso() {
    const h = new Date();
    h.setHours(0, 0, 0, 0);
    return this.aIso(h);
  }

  // v0.0.6: la aplicación no decide ciudad ni fechas. Sin selección explícita del
  // usuario el contexto queda vacío y no existe búsqueda válida.
  contextoGuardado(g) {
    const hoy = this.hoyIso();
    const iso = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(this.aDia(v).getTime());
    const ciudad = g && this.datos.ciudades.indexOf(g.ciudad) >= 0 ? g.ciudad : '';
    let desde = g && iso(g.desde) && g.desde >= hoy ? g.desde : '';
    let hasta = desde && g && iso(g.hasta) && g.hasta >= desde ? g.hasta : '';
    const mes = g && typeof g.mes === 'string' && /^\d{4}-\d{2}$/.test(g.mes) && g.mes >= hoy.slice(0, 7)
      ? g.mes : (desde ? desde.slice(0, 7) : hoy.slice(0, 7));
    return { ciudad: ciudad, desde: desde, hasta: hasta, mes: mes };
  }

  fechas() {
    const s = this.state;
    return { desde: s.desde || '', hasta: s.hasta || '', mes: s.mes || this.hoyIso().slice(0, 7) };
  }

  rangoValido() {
    const fx = this.fechas();
    if (!fx.desde || !fx.hasta) return false;
    if (fx.desde < this.hoyIso()) return false;
    return fx.hasta >= fx.desde;
  }

  contextoValido() { return !!this.state.ciudad && this.rangoValido(); }

  rangoActivo() {
    const fx = this.fechas();
    if (!fx.desde) return null;
    return this.etiquetaRango(fx.desde, fx.hasta || fx.desde);
  }

  // Etiqueta larga para la cabecera de resultados: "Madrid · 13–15 septiembre".
  rangoLargo(desdeIso, hastaIso) {
    const a = this.aDia(desdeIso);
    const b = this.aDia(hastaIso || desdeIso);
    if (a.getMonth() === b.getMonth()) {
      if (a.getDate() === b.getDate()) return a.getDate() + ' ' + this.mesNombres[a.getMonth()];
      return a.getDate() + '–' + b.getDate() + ' ' + this.mesNombres[b.getMonth()];
    }
    return a.getDate() + ' ' + this.mesNombres[a.getMonth()] + ' – ' + b.getDate() + ' ' + this.mesNombres[b.getMonth()];
  }

  // Fechas visibles de una Reservation: siempre derivadas de desde/hasta (ISO canónicos).
  fechasDe(r) { return this.etiquetaRango(r.desde, r.hasta).etiqueta; }
  diasDe(r) { return this.etiquetaRango(r.desde, r.hasta).dias; }
  textoDiasDe(r) { const n = this.diasDe(r); return n + (n === 1 ? ' día' : ' días'); }

  // Etiqueta y duración de cualquier rango: la usan la búsqueda, las reservas y los fixtures.
  etiquetaRango(desdeIso, hastaIso) {
    const a = this.aDia(desdeIso);
    const b = this.aDia(hastaIso || desdeIso);
    const dias = Math.max(1, Math.round((b - a) / 86400000) + 1);
    if (dias === 1) return { etiqueta: a.getDate() + ' ' + this.mesCortos[a.getMonth()], dias: 1 };
    const etiqueta = a.getMonth() === b.getMonth()
      ? a.getDate() + '–' + b.getDate() + ' ' + this.mesCortos[b.getMonth()]
      : a.getDate() + ' ' + this.mesCortos[a.getMonth()] + ' – ' + b.getDate() + ' ' + this.mesCortos[b.getMonth()];
    return { etiqueta: etiqueta, dias: dias };
  }

  tocarDia(iso) {
    const fx = this.fechas();
    if (iso < this.hoyIso()) return;
    if (!fx.desde || fx.hasta || iso < fx.desde) { this.guardar({ desde: iso, hasta: '' }); return; }
    this.guardar({ hasta: iso });
  }

  celdasMes() {
    const fx = this.fechas();
    const anc = this.aDia(fx.mes + '-01');
    const y = anc.getFullYear();
    const m = anc.getMonth();
    const hoy = this.hoyIso();
    const total = new Date(y, m + 1, 0).getDate();
    const hueco = (new Date(y, m, 1).getDay() + 6) % 7;
    const celdas = [];
    for (let i = 0; i < hueco; i++) {
      celdas.push({ clave: 'h' + i, dia: '', etiqueta: '', activo: false, bloqueado: true, fondo: 'transparent', color: 'transparent', peso: '400', cursor: 'default', tocar: () => {} });
    }
    for (let n = 1; n <= total; n++) {
      const iso = this.aIso(new Date(y, m, n));
      const pasado = iso < hoy;
      const extremo = iso === fx.desde || (!!fx.hasta && iso === fx.hasta);
      const dentro = !!fx.hasta && iso > fx.desde && iso < fx.hasta;
      celdas.push({
        clave: iso,
        dia: String(n),
        etiqueta: n + ' de ' + this.mesNombres[m] + (pasado ? ', no disponible' : ''),
        activo: extremo || dentro,
        bloqueado: pasado,
        fondo: extremo ? '#14171B' : dentro ? '#F5DEDC' : 'transparent',
        color: extremo ? '#FFFFFF' : pasado ? '#C7C9CC' : '#14171B',
        peso: extremo || dentro ? '700' : '400',
        cursor: pasado ? 'default' : 'pointer',
        tocar: pasado ? () => {} : () => this.tocarDia(iso)
      });
    }
    return celdas;
  }

  moverMes(paso) {
    const fx = this.fechas();
    const anc = this.aDia(fx.mes + '-01');
    const nuevo = new Date(anc.getFullYear(), anc.getMonth() + paso, 1);
    if (this.aIso(nuevo).slice(0, 7) < this.hoyIso().slice(0, 7)) return;
    this.guardar({ mes: this.aIso(nuevo).slice(0, 7) });
  }

  // Rango ocupado, en ISO, a partir del desplazamiento en días desde hoy.
  bloqueosIso(id) {
    const base = this.aDia(this.hoyIso()).getTime();
    return (this.bloqueosDemo[id] || []).map(par => ({
      desde: this.aIso(new Date(base + par[0] * 86400000)),
      hasta: this.aIso(new Date(base + par[1] * 86400000))
    }));
  }

  // Disponibilidad simulada: cruza el rango pedido con los bloqueos fixture y con
  // las reservas ya creadas sobre esa misma moto, sea de quien sea.
  disponible(id, desdeIso, hastaIso) {
    const fx = this.fechas();
    const desde = desdeIso || fx.desde;
    if (!desde) return false;
    const hasta = hastaIso || (desdeIso ? desdeIso : (fx.hasta || desde));
    const bloqueos = this.bloqueosIso(id);
    if (bloqueos.filter(b => b.desde <= hasta && b.hasta >= desde).length) return false;
    const ocupada = (this.state.reservas || []).filter(r =>
      r.listingId === id && r.desde && r.hasta && r.desde <= hasta && r.hasta >= desde
    );
    return ocupada.length === 0;
  }

  // Catálogo único visible para el comprador activo: fixture + publicados en la demo,
  // sin sus propias motos (regla de no auto-reserva aplicada en el origen).
  catalogo() {
    const cuentaId = this.cuenta();
    return this.listings().filter(b => b.ownerId !== cuentaId);
  }

  // Filtros autorizados en v0.0.6: ciudad, fechas, categoría y precio/día.
  coincidenFiltros() {
    const s = this.state;
    if (!s.ciudad) return [];
    const rp = this.rangosPrecio.filter(x => x.clave === (s.precio || 0))[0];
    return this.listings().filter(b => {
      if (b.ownerId === this.cuenta()) return false;
      if (b.ciudad !== s.ciudad) return false;
      if (s.categoria !== 'Todas' && b.categoria !== s.categoria) return false;
      if (rp && rp.min && b.precioDia < rp.min) return false;
      if (rp && rp.max && b.precioDia > rp.max) return false;
      return true;
    });
  }

  // Única fuente de elegibilidad: la consumen resultados y mapa. Sin contexto válido
  // no hay resultados, porque no hay búsqueda.
  elegibles() {
    if (!this.contextoValido()) return [];
    const fx = this.fechas();
    return this.coincidenFiltros().filter(b => this.disponible(b.id, fx.desde, fx.hasta));
  }

  noDisponibles() {
    if (!this.contextoValido()) return [];
    const fx = this.fechas();
    return this.coincidenFiltros().filter(b => !this.disponible(b.id, fx.desde, fx.hasta));
  }

  // Los pines del mapa: en Buscar, exactamente el conjunto de la lista; en Inicio, el catálogo.
  pinesActuales() {
    return this.state.tab === 'buscar' ? this.elegibles() : this.catalogo();
  }

  alternarFavorito(id) {
    const f = this.state.favoritos.slice();
    const i = f.indexOf(id);
    if (i >= 0) f.splice(i, 1); else f.push(id);
    this.guardar({ favoritos: f });
  }

  // Agenda: días del mes con reservas del anfitrión activo, derivadas de la colección única.
  celdasAgendaCalc(reservas) {
    const s = this.state;
    const mes = s.mesAgenda || this.hoyIso().slice(0, 7);
    const anc = this.aDia(mes + '-01');
    const y = anc.getFullYear();
    const m = anc.getMonth();
    const total = new Date(y, m + 1, 0).getDate();
    const hueco = (new Date(y, m, 1).getDay() + 6) % 7;
    const hoy = this.hoyIso();
    const celdas = [];
    for (let i = 0; i < hueco; i++) {
      celdas.push({ clave: 'h' + i, dia: '', etiqueta: '', bloqueado: true, fondo: 'transparent', color: 'transparent', punto: 'transparent', peso: '400', cursor: 'default', tocar: () => {} });
    }
    for (let n = 1; n <= total; n++) {
      const iso = this.aIso(new Date(y, m, n));
      const delDia = reservas.filter(r => r.desde <= iso && r.hasta >= iso);
      const ocupado = delDia.length > 0;
      const sel = s.diaAgenda === iso;
      celdas.push({
        clave: iso,
        dia: String(n),
        etiqueta: ocupado ? n + ': ' + delDia.length + (delDia.length === 1 ? ' reserva' : ' reservas') : String(n),
        bloqueado: false,
        fondo: sel ? '#14171B' : ocupado ? '#F5DEDC' : 'transparent',
        color: sel ? '#FFFFFF' : iso < hoy ? '#C7C9CC' : '#14171B',
        punto: ocupado ? (sel ? '#FFFFFF' : '#E10600') : 'transparent',
        peso: ocupado ? '700' : '400',
        cursor: 'pointer',
        tocar: () => this.guardar({ diaAgenda: sel ? '' : iso })
      });
    }
    return celdas;
  }

  moverMesAgenda(paso) {
    const mes = this.state.mesAgenda || this.hoyIso().slice(0, 7);
    const anc = this.aDia(mes + '-01');
    const nuevo = new Date(anc.getFullYear(), anc.getMonth() + paso, 1);
    this.guardar({ mesAgenda: this.aIso(nuevo).slice(0, 7), diaAgenda: '' });
  }

  campoPub(clave) {
    return e => {
      const f = Object.assign(this.formularioVacio(), this.state.borradorPub || {});
      f[clave] = e.target.value;
      this.guardar({ borradorPub: f });
    };
  }

  elegirPub(clave, valor) {
    const f = Object.assign(this.formularioVacio(), this.state.borradorPub || {});
    f[clave] = valor;
    this.guardar({ borradorPub: f });
  }

  entero(v) {
    const t = String(v == null ? '' : v).trim();
    if (!t || !/^-?\d+$/.test(t)) return null;
    return parseInt(t, 10);
  }

  faltaEnPaso(f, paso) {
    const maxAnio = new Date().getFullYear() + 1;
    if (paso === 1) {
      if (!f.marca.trim()) return 'Falta la marca.';
      if (!f.modelo.trim()) return 'Falta el modelo.';
      const anio = this.entero(f.anio);
      if (anio === null) return 'El año debe ser un número.';
      if (anio < 1980 || anio > maxAnio) return 'El año debe estar entre 1980 y ' + maxAnio + '.';
      const cc = this.entero(f.cc);
      if (cc === null) return 'La cilindrada debe ser un número en cc.';
      if (cc <= 0) return 'La cilindrada debe ser mayor que cero.';
      if (cc < 49 || cc > 2500) return 'La cilindrada debe estar entre 49 y 2500 cc.';
      return '';
    }
    if (paso === 2) {
      if (!f.zona.trim()) return 'Elige una zona de entrega.';
      if (!f.punto.trim()) return 'Falta el punto de entrega.';
      const precio = this.entero(f.precioDia);
      if (precio === null) return 'El precio por día debe ser un número.';
      if (precio <= 0) return 'El precio por día debe ser mayor que cero.';
      const fianza = this.entero(f.deposito);
      if (fianza === null) return 'La fianza debe ser un número.';
      if (fianza < 0) return 'La fianza no puede ser negativa.';
      return '';
    }
    return '';
  }

  // Crea el Listing en la MISMA colección que consume el resto de la aplicación.
  publicarMoto(f) {
    const s = this.state;
    if (this.publicando) return;
    if (this.faltaEnPaso(f, 1) || this.faltaEnPaso(f, 2)) return;
    this.publicando = true;
    const n = (s.listingsDemo || []).length + 1;
    const id = 'l-demo-' + Date.now().toString(36).slice(-4) + '-' + n;
    const cc = this.entero(f.cc);
    const nuevo = {
      id: id, ownerId: this.cuenta(), marca: f.marca.trim(), modelo: f.modelo.trim(),
      anio: String(this.entero(f.anio)), categoria: f.categoria, cc: cc,
      transmision: f.transmision, ciudad: f.ciudad, zona: f.zona.trim(), punto: f.punto.trim(),
      horario: 'Entrega 9:00–20:00 · devolución hasta 20:00',
      precioDia: this.entero(f.precioDia), rating: '—', resenas: 0,
      deposito: this.entero(f.deposito), kmDia: 200,
      combustible: 'Depósito lleno / lleno', potencia: '—',
      descripcion: (f.descripcion || '').trim(),
      incluye: ['Casco homologado', 'Seguro a terceros (demo)', '200 km/día incluidos'],
      equipamiento: ['ABS', 'Soporte de móvil'],
      desvio: 0.004 * n
    };
    this.guardar({
      listingsDemo: (s.listingsDemo || []).concat([nuevo]),
      publicada: id, pasoPub: 1, borradorPub: this.formularioVacio()
    });
    setTimeout(() => { this.publicando = false; }, 400);
  }

  renderVals() {
    const s = this.state;
    const d = this.datos;
    const yo = this.yo();
    const rango = this.rangoValido() ? this.rangoActivo() : null;
    const rangoOk = this.rangoValido();
    const ctxOk = this.contextoValido();
    const fx = this.fechas();
    const anclaMes = this.aDia(fx.mes + '-01');
    const compacto = (s.vw || 1200) < 760;
    const altoMapa = (compacto ? Math.max(250, Math.round((s.vh || 860) * 0.4)) : 340) + 'px';
    const dias = rango ? rango.dias : 0;
    const mostrarTotal = this.props.mostrarTotales !== false;

    const filtrados = this.elegibles();
    const noDisp = this.noDisponibles();
    const catUsuario = this.catalogo();
    // Orden de preferencia por variedad visual; solo ordena, no inventa datos.
    const preferidas = ['l-gs', 'l-mt07', 'l-pcx', 'l-bonne', 'l-iron'];
    const inicio = preferidas.map(id => catUsuario.filter(b => b.id === id)[0]).filter(b => !!b)
      .concat(catUsuario.filter(b => preferidas.indexOf(b.id) < 0)).slice(0, 3);

    const cuentaId = this.cuenta();
    const todos = this.listings();
    const sel = todos.filter(x => x.id === s.listing && x.ownerId !== cuentaId)[0] || null;
    const prop = sel ? this.persona(sel.ownerId) : null;
    const total = sel ? sel.precioDia * dias : 0;
    const dispSel = sel ? (rangoOk && this.disponible(sel.id, fx.desde, fx.hasta)) : false;
    const fotosSel = sel ? this.fotosDe(sel.id) : [];
    const idxFoto = fotosSel.length ? Math.max(0, Math.min(fotosSel.length - 1, s.fotoIdx || 0)) : 0;
    const fichaSel = sel ? {
      marca: sel.marca,
      modelo: sel.modelo,
      titulo: sel.marca + ' ' + sel.modelo,
      categoria: this.nombresCategoria[sel.categoria],
      placa: this.placa(sel.categoria),
      fotoSrc: this.foto(sel.id),
      fotoCss: this.fotoCss(sel.id),
      heroCss: this.heroCss(sel.id, idxFoto),
      altActual: fotosSel.length
        ? sel.marca + ' ' + sel.modelo + ' · ' + fotosSel[idxFoto].etiqueta
        : sel.marca + ' ' + sel.modelo,
      hayFoto: this.tieneFoto(sel.id),
      sinFoto: !this.tieneFoto(sel.id),
      hayGaleria: fotosSel.length > 1,
      indicador: (idxFoto + 1) + ' / ' + fotosSel.length,
      puntos: fotosSel.map((v, i) => ({
        etiqueta: 'Ver ' + v.etiqueta,
        activo: i === idxFoto,
        color: i === idxFoto ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
        ancho: i === idxFoto ? '18px' : '6px',
        ir: () => this.setState({ fotoIdx: i })
      })),
      anterior: () => this.moverFoto(-1),
      siguiente: () => this.moverFoto(1),
      tocarInicio: e => { this.tocoEn = e.touches && e.touches[0] ? e.touches[0].clientX : null; },
      tocarFin: e => {
        const x = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
        const desde = this.tocoEn;
        this.tocoEn = null;
        if (desde == null || x == null) return;
        if (Math.abs(x - desde) > 40) this.moverFoto(x - desde < 0 ? 1 : -1);
      },
      color: sel.color || 'Color sin indicar',
      colorMuestra: sel.colorHex || '#9AA0A8',
      ubicacion: sel.ciudad + ' · ' + sel.zona,
      rating: sel.rating,
      resenas: sel.resenas + ' reseñas',
      stats: [
        { valor: sel.cc + ' cc', etiqueta: 'Cilindrada' },
        { valor: sel.transmision, etiqueta: 'Transmisión' },
        { valor: sel.anio, etiqueta: 'Año' }
      ],
      precioDia: this.eur(sel.precioDia),
      desglose: rangoOk ? this.eur(sel.precioDia) + ' × ' + dias + (dias === 1 ? ' día' : ' días') : this.eur(sel.precioDia) + ' por día',
      total: rangoOk ? this.eur(total) : '—',
      totalBarra: rangoOk ? this.eur(total) : this.eur(sel.precioDia) + ' / día',
      deposito: this.eur(sel.deposito),
      fechas: rangoOk ? rango.etiqueta : '',
      fechasTexto: rangoOk ? rango.etiqueta + ' · ' + dias + (dias === 1 ? ' día' : ' días') : 'Sin fechas elegidas',
      etiquetaFechas: rangoOk ? 'Cambiar las fechas de la reserva' : 'Elegir las fechas de la reserva',
      etiquetaFav: s.favoritos.indexOf(sel.id) >= 0 ? 'Quitar de favoritos' : 'Guardar en favoritos',
      textoBotonFechas: rangoOk ? 'Cambiar' : 'Elegir fechas',
      diasTexto: dias + (dias === 1 ? ' día' : ' días'),
      puntoEntrega: sel.punto,
      zonaEntrega: sel.ciudad + ' · ' + sel.zona,
      metaResumen: this.nombresCategoria[sel.categoria] + (sel.color ? ' · ' + sel.color.toLowerCase() : ''),
      horarioEntrega: sel.horario,
      incluye: sel.incluye.map(x => ({ texto: x })),
      requisitos: [
        { texto: this.carnet(sel.cc) },
        { texto: 'Mínimo 21 años' },
        { texto: '2 años de antigüedad del carnet' },
        { texto: 'Fianza de ' + this.eur(sel.deposito) + ' retenida (simulada)' }
      ],
      equipamiento: sel.equipamiento.map(x => ({ texto: x })),
      detalles: [
        { etiqueta: 'Potencia', valor: sel.potencia },
        { etiqueta: 'Kilometraje incluido', valor: sel.kmDia + ' km/día' },
        { etiqueta: 'Combustible', valor: sel.combustible },
        { etiqueta: 'Categoría', valor: this.nombresCategoria[sel.categoria] },
        { etiqueta: 'Color', valor: sel.color || 'Sin indicar' },
        { etiqueta: 'Fianza (demo)', valor: this.eur(sel.deposito) }
      ],
      propietario: prop.nombre,
      propietarioInicial: prop.nombre.charAt(0),
      propietarioDesde: 'En Motoapp desde ' + prop.desde,
      propietarioRating: prop.rating,
      propietarioRespuesta: prop.respuesta,
      corazonRelleno: s.favoritos.indexOf(sel.id) >= 0 ? '#E10600' : 'none',
      corazonBorde: s.favoritos.indexOf(sel.id) >= 0 ? '#E10600' : '#14171B',
      fav: () => this.alternarFavorito(sel.id),
      resumenReserva: (rangoOk ? rango.etiqueta + ' · ' : '') + sel.ciudad + ' · ' + sel.zona,
      sinFechas: !rangoOk,
      disponible: dispSel,
      noDisponible: rangoOk && !dispSel,
      textoNoDisponible: 'El anfitrión ya la tiene comprometida esos días. Elegí otro rango de fechas.'
    } : {};

    // Vista usuario y vista anfitrión: dos consultas sobre la MISMA colección.
    const misReservas = s.reservas.filter(r => r.ownerId === cuentaId && r.buyerId !== r.ownerId);
    const misViajes = s.reservas.filter(r => r.buyerId === cuentaId && r.buyerId !== r.ownerId);
    const publicaciones = todos.filter(x => x.ownerId === cuentaId);
    const pub = publicaciones.filter(x => x.id === s.pubSel)[0] || publicaciones[0] || todos.filter(x => x.id === d.ownerListing)[0];
    const reservasPub = misReservas.filter(r => r.listingId === pub.id);
    const hoyIso = this.hoyIso();
    const vigentes = misReservas.filter(r => r.hasta >= hoyIso).slice().sort((a, b) => (a.desde < b.desde ? -1 : 1));
    const prox = vigentes[0] || null;
    const diasOcupados = (() => {
      const set = {};
      vigentes.forEach(r => {
        let t = this.aDia(r.desde).getTime();
        const fin = this.aDia(r.hasta).getTime();
        while (t <= fin) { set[this.aIso(new Date(t))] = 1; t += 86400000; }
      });
      return Object.keys(set).length;
    })();
    const rp = s.reservaProp ? misReservas.filter(r => r.id === s.reservaProp)[0] || null : null;
    const ru = s.reservaUsuario ? misViajes.filter(r => r.id === s.reservaUsuario)[0] || null : null;
    const chatR = s.chat ? s.reservas.filter(r => r.id === s.chat)[0] || null : null;
    const conv = chatR ? (s.conversaciones[chatR.conversationId] || null) : null;
    const chatOtro = chatR ? this.persona(chatR.ownerId === cuentaId ? chatR.buyerId : chatR.ownerId) : null;
    const ultima = s.reservas.length ? s.reservas[s.reservas.length - 1] : null;

    const reservasFiltradas = (s.filtroAgenda && s.filtroAgenda !== 'todas')
      ? misReservas.filter(r => r.listingId === s.filtroAgenda)
      : misReservas;
    const reservasAgenda = s.diaAgenda
      ? reservasFiltradas.filter(r => r.desde <= s.diaAgenda && r.hasta >= s.diaAgenda)
      : reservasFiltradas.filter(r => r.hasta >= this.hoyIso()).slice().sort((a, b) => (a.desde < b.desde ? -1 : 1));
    const anclaAgenda = this.aDia((s.mesAgenda || this.hoyIso().slice(0, 7)) + '-01');
    const fp = Object.assign(this.formularioVacio(), s.borradorPub || {});
    const pasoPub = Math.min(4, Math.max(1, s.pasoPub || 1));
    const listingPublicado = s.publicada ? todos.filter(x => x.id === s.publicada)[0] : null;
    const ultimoMensaje = (() => {
      let mejor = null;
      misReservas.forEach(r => {
        const c = s.conversaciones[r.conversationId];
        const m = c && c.mensajes && c.mensajes.length ? c.mensajes[c.mensajes.length - 1] : null;
        if (m && (!mejor || (m.createdAt || '') > (mejor.createdAt || ''))) mejor = Object.assign({}, m, { quien: this.persona(r.buyerId).corto });
      });
      return mejor;
    })();
    const actividad = [];
    if (prox) actividad.push({ texto: this.persona(prox.buyerId).corto + ' reservó ' + prox.titulo + ' para ' + this.fechasDe(prox), cuando: prox.id });
    if (ultimoMensaje) actividad.push({ texto: 'Mensaje de ' + ultimoMensaje.quien + ': ' + ultimoMensaje.texto, cuando: ultimoMensaje.hora });
    if (listingPublicado) actividad.push({ texto: 'Publicaste ' + listingPublicado.marca + ' ' + listingPublicado.modelo, cuando: 'ahora' });

    const conTotal = b => {
      const t = this.tarjeta(b, dias);
      if (!mostrarTotal) t.total = '';
      return t;
    };

    const catsUsadas = ['naked', 'deportiva', 'adventure', 'touring', 'scooter', 'custom', 'clasica'].filter(c =>
      todos.filter(b => b.categoria === c && b.ownerId !== cuentaId).length > 0
    );

    return {
      sinSesion: !s.sesion,
      conSesion: s.sesion && s.modo === 'usuario',
      modoPropietario: s.sesion && s.modo === 'propietario',
      esInicio: s.sesion && s.tab === 'inicio',
      esBuscar: s.sesion && s.tab === 'buscar',
      esFavoritos: s.sesion && s.tab === 'favoritos',
      esReservas: s.sesion && s.tab === 'reservas',
      esPerfil: s.sesion && s.tab === 'perfil',
      colorStatus: !s.sesion ? '#FFFFFF' : (sel ? '#FFFFFF' : '#14171B'),
      colorBarra: s.sesion ? 'rgba(20,23,27,0.25)' : 'rgba(255,255,255,0.6)',

      correo: s.correo,
      clave: s.clave,
      textoEntrar: s.entrando ? 'Entrando…' : 'Iniciar sesión',
      onCorreo: e => this.setState({ correo: e.target.value }),
      onClave: e => this.setState({ clave: e.target.value }),
      onEntrar: () => {
        this.setState({ entrando: true });
        setTimeout(() => { this.setState({ entrando: false }); this.guardar({ sesion: true, tab: 'inicio' }); }, 650);
      },
      onSalir: () => this.guardar({ sesion: false, tab: 'inicio' }),

      nombreUsuario: yo.corto,
      correoUsuario: yo.correo,
      inicialUsuario: yo.corto.charAt(0),
      rangoActual: rangoOk ? rango.etiqueta + ' · ' + dias + (dias === 1 ? ' día' : ' días') : (fx.desde ? this.etiquetaRango(fx.desde, fx.desde).etiqueta + ' · falta la devolución' : 'Sin fechas'),
      colorRangoActual: rangoOk ? '#14171B' : '#9AA0A8',
      irPerfil: () => this.guardar({ tab: 'perfil' }),
      conteoMapa: catUsuario.length + (catUsuario.length === 1 ? ' moto' : ' motos'),
      altoMapa: altoMapa,
      altoMapaHome: (compacto ? Math.max(196, Math.round((s.vh || 860) * 0.24)) : 230) + 'px',
      panelTrabajo: this.props.vista === 'Trabajo' && !compacto,
      padExterior: compacto ? '0' : '56px 48px 72px',
      gapExterior: compacto ? '0' : '64px',
      anchoMarco: compacto ? '100%' : '408px',
      altoMarco: compacto ? '100dvh' : '862px',
      padMarco: compacto ? '0' : '9px',
      radioMarco: compacto ? '0' : '52px',
      sombraMarco: compacto ? 'none' : '0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
      anchoPantalla: compacto ? '100%' : '390px',
      altoPantalla: compacto ? '100dvh' : '844px',
      radioPantalla: compacto ? '0' : '44px',
      altoExterior: compacto ? '100dvh' : '100vh',
      overflowExterior: compacto ? 'hidden' : 'visible',

      categorias: catsUsadas.map(c => {
        const n = todos.filter(b => b.categoria === c && b.ownerId !== cuentaId).length;
        return {
          nombre: this.nombresCategoria[c],
          placa: this.placa(c),
          conteo: n + (n === 1 ? ' moto' : ' motos'),
          accion: s.categoria === c ? 'Filtrando' : 'Ver todas',
          anillo: s.categoria === c ? '#E10600' : 'transparent',
          color: s.categoria === c ? '#C00500' : '#4A4F57',
          ir: () => this.guardar({ categoria: s.categoria === c ? 'Todas' : c, tab: 'buscar' })
        };
      }),

      listingsInicio: inicio.map(conTotal),
      conteoInicio: catUsuario.length === 0 ? 'Sin motos' : inicio.length + ' de ' + catUsuario.length,
      sinInicio: inicio.length === 0,
      textoSinInicio: 'En cuanto haya motos de otros anfitriones aparecerán acá.',

      hayNoDisponibles: noDisp.length > 0,
      notaDisponibilidad: noDisp.length + (noDisp.length === 1 ? ' moto de este filtro no está disponible' : ' motos de este filtro no están disponibles') + ' en estas fechas.',

      chipsCiudad: d.ciudades.map(n => ({
        nombre: n,
        activo: s.ciudad === n,
        etiqueta: 'Buscar en ' + n,
        fondo: s.ciudad === n ? '#14171B' : '#FFFFFF',
        color: s.ciudad === n ? '#FFFFFF' : '#4A4F57',
        borde: s.ciudad === n ? '#14171B' : '#E4E3E0',
        ir: () => this.guardar({ ciudad: n })
      })),
      ciudadElegida: s.ciudad || 'Sin elegir',
      colorCiudadElegida: s.ciudad ? '#14171B' : '#9AA0A8',
      chipsCategoria: [{ clave: 'Todas', nombre: 'Todas', punto: '#9AA0A8' }].concat(catsUsadas.map(c => ({
        clave: c, nombre: this.nombresCategoria[c], punto: this.colores[c]
      }))).map(c => ({
        nombre: c.nombre,
        activo: s.categoria === c.clave,
        punto: s.categoria === c.clave ? '#FFFFFF' : c.punto,
        fondo: s.categoria === c.clave ? '#14171B' : '#FFFFFF',
        color: s.categoria === c.clave ? '#FFFFFF' : '#4A4F57',
        borde: s.categoria === c.clave ? '#14171B' : '#E4E3E0',
        ir: () => this.guardar({ categoria: c.clave })
      })),
      chipsPrecio: this.rangosPrecio.map(p => ({
        etiqueta: p.etiqueta,
        activo: (s.precio || 0) === p.clave,
        fondo: (s.precio || 0) === p.clave ? '#14171B' : '#FFFFFF',
        color: (s.precio || 0) === p.clave ? '#FFFFFF' : '#4A4F57',
        borde: (s.precio || 0) === p.clave ? '#14171B' : '#E4E3E0',
        ir: () => this.guardar({ precio: p.clave })
      })),
      diasSemana: this.letrasSemana.map(l => ({ letra: l })),
      celdas: this.celdasMes(),
      mesTitulo: this.mesNombres[anclaMes.getMonth()] + ' ' + anclaMes.getFullYear(),
      mesAnterior: () => this.moverMes(-1),
      mesSiguiente: () => this.moverMes(1),
      colorMesAnterior: fx.mes <= this.hoyIso().slice(0, 7) ? '#C7C9CC' : '#4A4F57',
      pistaFechas: !fx.desde ? 'Tocá el día de recogida.' : (fx.hasta ? 'Tocá cualquier día para empezar otro rango.' : 'Ahora elegí el día de devolución.'),
      limpiarFiltros: () => this.guardar({ categoria: 'Todas', precio: 0 }),
      esLista: s.vista !== 'mapa',
      esMapa: s.vista === 'mapa',
      mapaRef: this.mapaRef,
      fondoLista: s.vista !== 'mapa' ? '#FFFFFF' : 'transparent',
      colorLista: s.vista !== 'mapa' ? '#14171B' : '#6E747C',
      fondoMapa: s.vista === 'mapa' ? '#FFFFFF' : 'transparent',
      colorMapa: s.vista === 'mapa' ? '#14171B' : '#6E747C',
      verLista: () => this.guardar({ vista: 'lista' }),
      verMapa: () => this.guardar({ vista: 'mapa' }),

      resultados: filtrados.map(conTotal),
      sinResultados: filtrados.length === 0,
      textoSinResultados: 'Probá con otras fechas, otra ciudad o quitá los filtros de categoría y precio.',
      tituloResultados: filtrados.length === 1 ? '1 moto' : filtrados.length + ' motos',

      listingsFavoritos: todos.filter(b => b.ownerId !== cuentaId && s.favoritos.indexOf(b.id) >= 0).map(conTotal),
      favoritosVacio: s.favoritos.length === 0,
      textoFavoritos: s.favoritos.length === 0 ? 'Guarda motos para compararlas' : s.favoritos.length + (s.favoritos.length === 1 ? ' moto guardada' : ' motos guardadas'),

      filasPerfil: [
        { etiqueta: 'Correo', valor: 'Verificado' },
        { etiqueta: 'Teléfono', valor: yo.telefono },
        { etiqueta: 'Carnet', valor: 'A · desde 2016' },
        { etiqueta: 'Método de pago', valor: yo.pago }
      ],

      parar: e => { if (e && e.stopPropagation) e.stopPropagation(); },
      reiniciar: () => this.reiniciarDemo(),
      tocarHora: () => {
        this.toquesHora = (this.toquesHora || 0) + 1;
        clearTimeout(this.temporizadorHora);
        if (this.toquesHora >= 3) { this.reiniciarDemo(); return; }
        this.temporizadorHora = setTimeout(() => { this.toquesHora = 0; }, 700);
      },
      fichaAbierta: !!sel,
      mostrarNav: s.sesion && !sel && !s.reservaUsuario,
      f: fichaSel,
      cerrarFicha: () => this.guardar({ listing: null, tab: s.volverA, resumen: false, paso: 'resumen' }),
      alternarDetalles: () => this.setState({ verDetalles: !s.verDetalles }),
      verDetalles: s.verDetalles,
      textoDetalles: s.verDetalles ? 'Ocultar ficha técnica' : 'Ver ficha técnica',
      siguienteRango: () => this.guardar({ listing: null, tab: 'buscar' }),
      abrirResumen: () => { if (!dispSel) return; this.setState({ resumen: true, paso: 'resumen' }); },
      cerrarResumen: () => { if (s.paso === 'resumen' || s.paso === 'pago') this.setState({ resumen: false, paso: 'resumen' }); },
      resumenAbierto: s.resumen,
      pasoResumen: s.paso === 'resumen',
      pasoPago: s.paso === 'pago',
      pasoProcesando: s.paso === 'procesando',
      pasoConfirmada: s.paso === 'confirmada',
      pasoError: s.paso === 'error',
      reintentar: () => this.setState({ paso: 'resumen' }),
      mapaOk: !s.mapaFallido,
      mapaFallido: s.mapaFallido,
      padNav: compacto ? 'calc(14px + env(safe-area-inset-bottom))' : '14px',
      padHoja: compacto ? 'calc(26px + env(safe-area-inset-bottom))' : '26px',
      continuarPago: () => this.setState({ paso: 'pago' }),
      volverResumen: () => this.setState({ paso: 'resumen' }),
      textoPagar: 'Pagar ' + this.eur(total),
      pagar: () => {
        if (this.pagando) return;
        // Revalidación de entrada: si el rango se perdió, error controlado, nunca botón muerto.
        if (!rangoOk || !dispSel) { this.setState({ paso: 'error' }); return; }
        this.pagando = true;
        this.setState({ paso: 'procesando' });
        setTimeout(() => { this.pagando = false; this.confirmarReserva(sel, rango, dias, total); }, 1700);
      },
      irAReservas: () => this.guardar({ resumen: false, paso: 'resumen', listing: null, tab: 'reservas' }),
      verUltimaComoAnfitrion: () => {
        const r = this.state.reservas.filter(x => x.id === this.ultimoCodigo)[0];
        this.verComoAnfitrion(r);
      },
      anfitrionUltima: sel ? this.persona(sel.ownerId).nombre : '',
      reservaCodigo: this.ultimoCodigo || '',
      metodoPago: yo.pago,

      reservas: misViajes.map(r => ({
        codigo: r.codigo,
        titulo: r.titulo,
        marca: r.marca,
        modelo: r.modelo,
        placa: this.placa(r.categoria),
        fotoSrc: this.foto(r.listingId),
        fotoCss: this.fotoCss(r.listingId),        hayFoto: this.tieneFoto(r.listingId),
        sinFoto: !this.tieneFoto(r.listingId),
        fechas: this.fechasDe(r),
        detalle: this.textoDiasDe(r) + ' · fianza ' + this.eur(r.deposito),
        entrega: r.punto + ' · ' + r.ciudad,
        propietario: 'Anfitrión · ' + this.persona(r.ownerId).nombre,
        total: this.eur(r.total),
        anfitrion: this.persona(r.ownerId).corto,
        etiqueta: 'Abrir el detalle de la reserva ' + r.id + ' de ' + r.titulo,
        teclas: this.teclado(() => this.guardar({ reservaUsuario: r.id })),
        verComoAnfitrion: e => { if (e && e.stopPropagation) e.stopPropagation(); this.verComoAnfitrion(r); },
        abrir: () => this.guardar({ reservaUsuario: r.id }),
        chat: e => { if (e && e.stopPropagation) e.stopPropagation(); this.setState({ chat: r.id, borrador: '' }); }
      })),
      hayViajes: misViajes.length > 0,
      sinViajes: misViajes.length === 0,
      hayReservas: misReservas.length > 0,
      sinReservas: misReservas.length === 0,

      aPropietario: () => this.cambiarModo('propietario'),
      aUsuario: () => { if (cuentaId !== d.cuenta) { this.volverACuentaBase(); } else { this.cambiarModo('usuario'); } },
      viendoComoOtro: cuentaId !== d.cuenta,
      textoSalirAnfitrion: cuentaId !== d.cuenta ? 'Volver a la cuenta de ' + this.persona(d.cuenta).corto : 'Cambiar a modo usuario',
      avisoContexto: 'Escenario demo · estás viendo Motoapp como ' + this.persona(cuentaId).nombre + ', anfitrión de esta moto.',
      publicacionesTexto: publicaciones.length > 1 ? publicaciones.length + ' publicaciones · mostrando ' + pub.marca + ' ' + pub.modelo : '',
      hayVariasPublicaciones: publicaciones.length > 1,
      subtituloPublicacion: publicaciones.length > 1
        ? 'Viendo ' + (publicaciones.map(x => x.id).indexOf(pub.id) + 1) + ' de ' + publicaciones.length + ' publicaciones. La gestión completa llega en el siguiente bloque.'
        : 'Tu publicación en Motoapp.',
      chipsPublicacion: publicaciones.map(x => ({
        etiqueta: x.marca + ' ' + x.modelo,
        fondo: x.id === pub.id ? '#14171B' : '#FFFFFF',
        color: x.id === pub.id ? '#FFFFFF' : '#4A4F57',
        borde: x.id === pub.id ? '#14171B' : '#E4E3E0',
        ir: () => this.guardar({ pubSel: x.id })
      })),
      depuracion: ultima ? [
        { etiqueta: 'reservationId', valor: ultima.id },
        { etiqueta: 'listingId', valor: ultima.listingId },
        { etiqueta: 'buyerId', valor: ultima.buyerId },
        { etiqueta: 'ownerId', valor: ultima.ownerId },
        { etiqueta: 'conversationId', valor: ultima.conversationId },
        { etiqueta: 'status', valor: ultima.status }
      ] : [],
      cuentaActivaNombre: this.persona(cuentaId).nombre,
      navProp: [
        { clave: 'panel', etiqueta: 'Panel', d: 'M3.5 10.6L12 3.6l8.5 7v9.8h-17z' },
        { clave: 'agenda', etiqueta: 'Agenda', d: 'M4 5.5h16v14H4zM8 3.5v4M16 3.5v4M4 10h16' },
        { clave: 'publicar', etiqueta: 'Publicar', d: 'M12 5v14M5 12h14' },
        { clave: 'mensajes', etiqueta: 'Mensajes', d: 'M4 5h16v11H9l-5 4z' },
        { clave: 'perfil', etiqueta: 'Perfil', d: 'M12 11.5a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zM4.5 20.5c0-3.7 3.4-5.8 7.5-5.8s7.5 2.1 7.5 5.8' }
      ].map(n => ({
        etiqueta: n.etiqueta, d: n.d,
        color: s.tabProp === n.clave ? '#E10600' : '#9AA0A8',
        ir: () => this.guardar({ tabProp: n.clave, reservaProp: null, pubAbierta: false })
      })),
      propPanel: s.tabProp === 'panel',
      propAgenda: s.tabProp === 'agenda',
      propPublicar: s.tabProp === 'publicar',
      propMensajes: s.tabProp === 'mensajes',
      propPerfil: s.tabProp === 'perfil',
      irPublicar: () => this.guardar({ tabProp: 'publicar' }),
      irPanel: () => this.guardar({ tabProp: 'panel', publicada: '' }),
      irAgenda: () => this.guardar({ tabProp: 'agenda', pubAbierta: false }),
      resumenAnfitrion: publicaciones.length + (publicaciones.length === 1 ? ' moto publicada · ' : ' motos publicadas · ') + (misReservas.length === 0 ? 'sin reservas' : misReservas.length + (misReservas.length === 1 ? ' reserva confirmada' : ' reservas confirmadas')),
      indicadores: [
        { etiqueta: 'Reservas próximas', valor: String(vigentes.length) },
        { etiqueta: 'Motos publicadas', valor: String(publicaciones.length) },
        { etiqueta: 'Días ocupados', valor: String(diasOcupados) },
        { etiqueta: 'Ingresos previstos', valor: this.eur(vigentes.reduce((a, r) => a + (r.total || 0), 0)) }
      ],
      conteoMotos: publicaciones.length + (publicaciones.length === 1 ? ' publicación' : ' publicaciones'),
      sinMotos: publicaciones.length === 0,
      misMotos: publicaciones.map(x => ({
        id: x.id, titulo: x.marca + ' ' + x.modelo, modelo: x.modelo,
        ubicacion: x.ciudad + ' · ' + x.zona,
        precioDia: this.eur(x.precioDia),
        placa: this.placa(x.categoria),
        fotoCss: this.fotoCss(x.id), hayFoto: this.tieneFoto(x.id), sinFoto: !this.tieneFoto(x.id),
        etiqueta: 'Abrir mi publicación ' + x.marca + ' ' + x.modelo,
        teclas: this.teclado(() => this.guardar({ pubSel: x.id, pubAbierta: true })),
        abrir: () => this.guardar({ pubSel: x.id, pubAbierta: true })
      })),
      pubAbierta: s.pubAbierta,
      cerrarPub: () => this.guardar({ pubAbierta: false }),
      actividad: actividad,
      hayActividad: actividad.length > 0,

      resumenAgenda: misReservas.length === 0 ? 'Las reservas de tus motos se marcarán aquí.' : 'Reservas confirmadas sobre tus motos, en tiempo real.',
      chipsAgenda: [{ id: 'todas', etiqueta: 'Todas' }].concat(publicaciones.map(x => ({ id: x.id, etiqueta: x.marca + ' ' + x.modelo }))).map(c => ({
        etiqueta: c.etiqueta,
        fondo: (s.filtroAgenda || 'todas') === c.id ? '#14171B' : '#FFFFFF',
        color: (s.filtroAgenda || 'todas') === c.id ? '#FFFFFF' : '#4A4F57',
        borde: (s.filtroAgenda || 'todas') === c.id ? '#14171B' : '#E4E3E0',
        ir: () => this.guardar({ filtroAgenda: c.id, diaAgenda: '' })
      })),
      agendaMesAnterior: () => this.moverMesAgenda(-1),
      agendaMesSiguiente: () => this.moverMesAgenda(1),
      mesAgendaTitulo: this.mesNombres[anclaAgenda.getMonth()] + ' ' + anclaAgenda.getFullYear(),
      celdasAgenda: this.celdasAgendaCalc(reservasFiltradas),
      pistaAgenda: s.diaAgenda ? 'Toca el día otra vez para ver todas las reservas.' : 'Los días con punto rojo tienen reservas.',
      tituloAgenda: s.diaAgenda ? 'Reservas del ' + this.aDia(s.diaAgenda).getDate() + ' de ' + this.mesNombres[this.aDia(s.diaAgenda).getMonth()] : 'Próximas reservas',
      tituloVacioAgenda: s.diaAgenda ? 'Ese día no tienes reservas' : 'Sin reservas todavía',
      reservasAgenda: reservasAgenda.map(r => ({
        codigo: r.id, titulo: r.titulo, modelo: r.modelo, placa: this.placa(r.categoria),
        fotoCss: this.fotoCss(r.listingId), hayFoto: this.tieneFoto(r.listingId), sinFoto: !this.tieneFoto(r.listingId),
        cliente: this.persona(r.buyerId).nombre,
        fechas: this.fechasDe(r),
        detalle: this.textoDiasDe(r) + ' · ' + r.zona,
        total: this.eur(r.total),
        etiqueta: 'Abrir la reserva ' + r.id + ' de ' + this.persona(r.buyerId).nombre,
        teclas: this.teclado(() => this.guardar({ reservaProp: r.id })),
        abrir: () => this.guardar({ reservaProp: r.id })
      })),
      sinAgenda: reservasAgenda.length === 0,

      pubHecha: !!s.publicada,
      pubEnCurso: !s.publicada,
      pubHechaTexto: listingPublicado ? listingPublicado.marca + ' ' + listingPublicado.modelo : 'Tu moto',
      publicarOtra: () => this.guardar({ publicada: '', pasoPub: 1, borradorPub: this.formularioVacio() }),
      pasoPub: String(pasoPub),
      tituloPaso: ['Moto', 'Ubicación y precio', 'Fotos y descripción', 'Vista previa'][pasoPub - 1],
      pasosPub: [1, 2, 3, 4].map(n => ({ fondo: n <= pasoPub ? '#E10600' : '#E4E3E0' })),
      paso1: pasoPub === 1,
      paso2: pasoPub === 2,
      paso3: pasoPub === 3,
      paso4: pasoPub === 4,
      hayAtras: pasoPub > 1,
      pasoAtras: () => this.guardar({ pasoPub: Math.max(1, pasoPub - 1) }),
      pasoSiguiente: () => {
        if (this.faltaEnPaso(fp, pasoPub)) return;
        if (pasoPub < 4) { this.guardar({ pasoPub: pasoPub + 1 }); return; }
        this.publicarMoto(fp);
      },
      pasoBloqueado: !!this.faltaEnPaso(fp, pasoPub),
      faltaTexto: this.faltaEnPaso(fp, pasoPub),
      colorSiguiente: this.faltaEnPaso(fp, pasoPub) ? '#C9C7C2' : '#E10600',
      cursorSiguiente: this.faltaEnPaso(fp, pasoPub) ? 'default' : 'pointer',
      textoSiguiente: pasoPub === 4 ? 'Publicar moto' : 'Continuar',
      form: {
        marca: fp.marca, modelo: fp.modelo, anio: fp.anio, cc: fp.cc, zona: fp.zona,
        punto: fp.punto, precioDia: fp.precioDia, deposito: fp.deposito, descripcion: fp.descripcion,
        onMarca: this.campoPub('marca'), onModelo: this.campoPub('modelo'), onAnio: this.campoPub('anio'),
        onCc: this.campoPub('cc'), onZona: this.campoPub('zona'), onPunto: this.campoPub('punto'),
        onPrecio: this.campoPub('precioDia'), onDeposito: this.campoPub('deposito'), onDescripcion: this.campoPub('descripcion'),
        categorias: ['naked', 'deportiva', 'adventure', 'touring', 'scooter', 'custom', 'clasica'].map(c => ({
          nombre: this.nombresCategoria[c],
          fondo: fp.categoria === c ? '#14171B' : '#FFFFFF',
          color: fp.categoria === c ? '#FFFFFF' : '#4A4F57',
          borde: fp.categoria === c ? '#14171B' : '#E4E3E0',
          ir: () => this.elegirPub('categoria', c)
        })),
        transmisiones: ['Manual', 'Automática'].map(t => ({
          nombre: t,
          fondo: fp.transmision === t ? '#14171B' : '#FFFFFF',
          color: fp.transmision === t ? '#FFFFFF' : '#4A4F57',
          borde: fp.transmision === t ? '#14171B' : '#E4E3E0',
          ir: () => this.elegirPub('transmision', t)
        })),
        ciudades: d.ciudades.map(c => ({
          nombre: c,
          fondo: fp.ciudad === c ? '#14171B' : '#FFFFFF',
          color: fp.ciudad === c ? '#FFFFFF' : '#4A4F57',
          borde: fp.ciudad === c ? '#14171B' : '#E4E3E0',
          ir: () => {
            const zonas = this.zonasPorCiudad[c] || [];
            const f = Object.assign(this.formularioVacio(), this.state.borradorPub || {});
            f.ciudad = c;
            if (zonas.indexOf(f.zona) < 0) f.zona = zonas[0] || '';
            this.guardar({ borradorPub: f });
          }
        })),
        zonas: (this.zonasPorCiudad[fp.ciudad] || []).map(z => ({
          nombre: z,
          fondo: fp.zona === z ? '#14171B' : '#FFFFFF',
          color: fp.zona === z ? '#FFFFFF' : '#4A4F57',
          borde: fp.zona === z ? '#14171B' : '#E4E3E0',
          ir: () => this.elegirPub('zona', z)
        })),
        requisitos: this.carnet(+fp.cc || 125) + ' · mínimo 21 años · fianza simulada de ' + this.eur(+fp.deposito || 300),
        placa: this.placa(fp.categoria),
        marcaVista: fp.marca || 'Marca',
        modeloVista: fp.modelo || 'Modelo',
        tituloVista: (fp.marca || 'Marca') + ' ' + (fp.modelo || 'Modelo'),
        ubicacionVista: fp.ciudad + (fp.zona ? ' · ' + fp.zona : ''),
        filasVista: [
          { etiqueta: 'Categoría', valor: this.nombresCategoria[fp.categoria] },
          { etiqueta: 'Cilindrada', valor: (fp.cc || '—') + ' cc' },
          { etiqueta: 'Transmisión', valor: fp.transmision },
          { etiqueta: 'Año', valor: fp.anio || '—' },
          { etiqueta: 'Precio', valor: this.eur(+fp.precioDia || 0) + ' / día' },
          { etiqueta: 'Entrega', valor: fp.punto || '—' }
        ]
      },
      perfilDesde: 'En Motoapp desde ' + (this.persona(cuentaId).desde || '—'),
      filasAnfitrion: [
        { etiqueta: 'Valoración', valor: this.persona(cuentaId).rating || '—' },
        { etiqueta: 'Respuesta', valor: this.persona(cuentaId).respuesta || '—' },
        { etiqueta: 'Publicaciones', valor: String(publicaciones.length) },
        { etiqueta: 'Reservas recibidas', valor: String(misReservas.length) }
      ],
      pubTitulo: pub.marca + ' ' + pub.modelo,
      pubMarca: pub.marca,
      pubModelo: pub.modelo,
      pubPlaca: this.placa(pub.categoria),
      pubFotoSrc: this.foto(pub.id),
      pubFotoCss: this.fotoCss(pub.id),
      pubHayFoto: this.tieneFoto(pub.id),
      pubSinFoto: !this.tieneFoto(pub.id),
      pubUbicacion: pub.punto + ' · ' + pub.ciudad,
      pubCc: pub.cc + ' cc',
      pubTransmision: pub.transmision,
      pubCategoria: this.nombresCategoria[pub.categoria],
      pubPrecio: this.eur(pub.precioDia) + ' / día',
      pubReservasTexto: reservasPub.length === 0 ? 'Sin reservas todavía' : reservasPub.length + (reservasPub.length === 1 ? ' reserva confirmada' : ' reservas confirmadas'),
      ingresos: this.eur(misReservas.reduce((a, r) => a + r.total, 0)),
      proxima: prox ? {
        marca: prox.marca, modelo: prox.modelo, placa: this.placa(prox.categoria),
        fotoSrc: this.foto(prox.listingId), fotoCss: this.fotoCss(prox.listingId), hayFoto: this.tieneFoto(prox.listingId), sinFoto: !this.tieneFoto(prox.listingId),
        fechas: this.fechasDe(prox),
        detalle: this.textoDiasDe(prox) + ' · ' + prox.zona,
        cliente: this.persona(prox.buyerId).nombre, total: this.eur(prox.total),
        etiqueta: 'Abrir la reserva ' + prox.id + ' de ' + this.persona(prox.buyerId).nombre,
        teclas: this.teclado(() => this.guardar({ reservaProp: prox.id })),
        abrir: () => this.guardar({ reservaProp: prox.id })
      } : {},
      hayProxima: !!prox,
      sinProxima: !prox,
      detalleAbierto: !!rp,
      cerrarDetalle: () => this.guardar({ reservaProp: null }),
      rp: rp ? {
        codigo: rp.codigo, marca: rp.marca, modelo: rp.modelo, placa: this.placa(rp.categoria),
        fotoSrc: this.foto(rp.listingId), fotoCss: this.fotoCss(rp.listingId), hayFoto: this.tieneFoto(rp.listingId), sinFoto: !this.tieneFoto(rp.listingId),
        cliente: this.persona(rp.buyerId).nombre, clienteInicial: this.persona(rp.buyerId).nombre.charAt(0),
        filas: [
          { etiqueta: 'Moto', valor: rp.titulo },
          { etiqueta: 'Fechas', valor: this.fechasDe(rp) + ' · ' + this.textoDiasDe(rp) },
          { etiqueta: 'Recogida', valor: rp.punto },
          { etiqueta: 'Ciudad', valor: rp.ciudad + ' · ' + rp.zona },
          { etiqueta: 'Fianza (demo)', valor: this.eur(rp.deposito) },
          { etiqueta: 'Código', valor: rp.codigo },
          { etiqueta: 'Importe', valor: this.eur(rp.total) }
        ],
        abrirChat: () => this.setState({ chat: rp.id, borrador: '' })
      } : {},
      hilos: (s.modo === 'propietario' ? misReservas : misViajes).map(r => {
        const c = s.conversaciones[r.conversationId] || { mensajes: [] };
        const m = c.mensajes || [];
        const ult = m.length ? m[m.length - 1] : null;
        const otro = this.persona(r.ownerId === cuentaId ? r.buyerId : r.ownerId);
        return {
          codigo: r.id,
          conQuien: otro.nombre,
          inicial: otro.nombre.charAt(0),
          ultimo: ult ? ult.texto : 'Sin mensajes todavía',
          hora: ult ? ult.hora : '',
          contexto: r.titulo + ' · ' + r.id,
          etiqueta: 'Abrir la conversación con ' + otro.nombre,
          teclas: this.teclado(() => this.setState({ chat: r.id, borrador: '' })),
          abrir: () => this.setState({ chat: r.id, borrador: '' })
        };
      }),
      sinHilos: (s.modo === 'propietario' ? misReservas : misViajes).length === 0,
      hayHilos: (s.modo === 'propietario' ? misReservas : misViajes).length > 0,

      chatAbierto: !!chatR,
      cerrarChat: () => this.setState({ chat: null, avisoEnvio: '' }),
      chatRef: this.chatRef,
      inputRef: this.inputRef,
      teclaChat: e => {
        if (e.key !== 'Enter' || e.shiftKey) return;
        e.preventDefault();
        this.enviarMensaje(chatR ? chatR.conversationId : null);
      },
      avisoEnvio: s.avisoEnvio || '',
      envioBloqueado: !(s.borrador || '').trim(),
      colorEnviar: (s.borrador || '').trim() ? '#E10600' : '#E7CBC9',
      cursorEnviar: (s.borrador || '').trim() ? 'pointer' : 'default',
      padCompositor: compacto ? 'calc(12px + env(safe-area-inset-bottom))' : '12px',
      borrador: s.borrador,
      onBorrador: e => this.setState({ borrador: e.target.value }),
      enviar: () => this.enviarMensaje(chatR ? chatR.conversationId : null),
      chatTitulo: chatOtro ? chatOtro.nombre : '',
      chatInicial: chatOtro ? chatOtro.nombre.charAt(0) : '',
      chatSubtitulo: chatR ? chatR.titulo + ' · ' + this.fechasDe(chatR) : '',
      chatRol: chatR ? (chatR.ownerId === cuentaId ? 'Cliente' : 'Anfitrión') : '',
      chatMensajes: (conv ? (conv.mensajes || []) : []).map(m => {
        const mio = m.senderId === cuentaId;
        return {
          texto: m.texto, hora: m.hora,
          alineado: mio ? 'flex-end' : 'flex-start',
          fondo: mio ? '#E10600' : '#FFFFFF',
          color: mio ? '#FFFFFF' : '#14171B',
          borde: mio ? '#E10600' : '#E4E3E0',
          radio: mio ? '16px 16px 5px 16px' : '16px 16px 16px 5px',
          horaColor: mio ? 'rgba(255,255,255,0.72)' : '#9AA0A8'
        };
      }),

      buscarConfig: (!ctxOk || s.buscarPaso !== 'resultados') ? !s.buscando : false,
      buscarResultados: ctxOk && s.buscarPaso === 'resultados' && !s.buscando,
      buscando: !!s.buscando,
      hayAvisoBusqueda: !ctxOk,
      avisoBusqueda: !s.ciudad
        ? 'Elegí una ciudad para continuar.'
        : (!fx.desde ? 'Elegí la fecha de recogida.' : (!fx.hasta ? 'Elegí también la fecha de devolución.' : 'Ese rango no es válido: la devolución no puede ser anterior a la recogida.')),
      verMotosBloqueado: !ctxOk,
      colorVerMotos: ctxOk ? '#E10600' : '#C9C7C2',
      cursorVerMotos: ctxOk ? 'pointer' : 'default',
      textoVerMotos: 'Ver motos',
      verMotos: () => {
        if (!this.contextoValido() || this.state.buscando) return;
        this.setState({ buscando: true });
        clearTimeout(this.temporizadorBusqueda);
        this.temporizadorBusqueda = setTimeout(() => this.guardar({ buscando: false, buscarPaso: 'resultados' }), 520);
      },
      editarBusqueda: () => this.guardar({ buscarPaso: 'config' }),
      contextoTitulo: ctxOk ? s.ciudad + ' · ' + this.rangoLargo(fx.desde, fx.hasta) : (s.ciudad || 'Buscar moto'),
      contextoConteo: filtrados.length + (filtrados.length === 1 ? ' moto disponible · ' : ' motos disponibles · ') + dias + (dias === 1 ? ' día' : ' días'),
      filtrosActivos: s.categoria !== 'Todas' || (s.precio || 0) !== 0,

      selectorAbierto: !!s.selector && !!sel,
      abrirSelector: () => this.setState({ selector: true, resumen: false, paso: 'resumen' }),
      cerrarSelector: () => this.setState({ selector: false }),
      aplicarBloqueado: !rangoOk,
      colorAplicar: rangoOk ? '#E10600' : '#C9C7C2',
      cursorAplicar: rangoOk ? 'pointer' : 'default',
      avisoSelector: rangoOk
        ? (dispSel ? 'Disponible en estas fechas.' : 'Esta moto no está disponible en ese rango. Probá otras fechas.')
        : 'Elegí recogida y devolución para poder reservar.',
      aplicarFechas: () => {
        if (!this.rangoValido()) return;
        const parche = { selector: false };
        if (!this.state.ciudad && sel) parche.ciudad = sel.ciudad;
        this.guardar(parche);
      },

      detalleUsuarioAbierto: !!ru,
      cerrarDetalleUsuario: () => this.guardar({ reservaUsuario: null }),
      ru: ru ? {
        codigo: ru.codigo, estado: 'Confirmada', titulo: ru.titulo, marca: ru.marca, modelo: ru.modelo,
        placa: this.placa(ru.categoria),
        fotoCss: this.fotoCss(ru.listingId), hayFoto: this.tieneFoto(ru.listingId), sinFoto: !this.tieneFoto(ru.listingId),
        anfitrion: this.persona(ru.ownerId).nombre,
        anfitrionInicial: this.persona(ru.ownerId).nombre.charAt(0),
        filas: [
          { etiqueta: 'Moto', valor: ru.titulo },
          { etiqueta: 'Fechas', valor: this.fechasDe(ru) + ' · ' + this.textoDiasDe(ru) },
          { etiqueta: 'Recogida', valor: ru.punto },
          { etiqueta: 'Ciudad', valor: ru.ciudad + ' · ' + ru.zona },
          { etiqueta: 'Precio por día', valor: this.eur(ru.precioDia) },
          { etiqueta: 'Total del alquiler', valor: this.eur(ru.total) },
          { etiqueta: 'Fianza (simulada)', valor: this.eur(ru.deposito) },
          { etiqueta: 'Estado', valor: 'Confirmada' }
        ],
        abrirChat: () => this.setState({ chat: ru.id, borrador: '' }),
        abrirFicha: () => this.guardar({ reservaUsuario: null, listing: ru.listingId, volverA: 'reservas', verDetalles: false, resumen: false, paso: 'resumen' })
      } : {},

      verMiReserva: () => {
        const r = this.state.reservas.filter(x => x.id === this.ultimoCodigo)[0];
        this.guardar({ resumen: false, paso: 'resumen', listing: null, tab: 'reservas', reservaUsuario: r ? r.id : null });
      },
      escribirAlAnfitrion: () => {
        const id = this.ultimoCodigo;
        this.guardar({ resumen: false, paso: 'resumen', listing: null, tab: 'reservas' });
        this.setState({ chat: id, borrador: '' });
      },
      volverAlInicio: () => this.guardar({ resumen: false, paso: 'resumen', listing: null, tab: 'inicio' }),
      cambiarFechasDesdeError: () => this.setState({ resumen: false, paso: 'resumen', selector: true }),
      volverAResultados: () => this.guardar({ resumen: false, paso: 'resumen', listing: null, tab: 'buscar', buscarPaso: this.contextoValido() ? 'resultados' : 'config' }),

      chatVacio: !!conv && (conv.mensajes || []).length === 0,
      textoChatVacio: chatR && chatR.ownerId === cuentaId
        ? 'Escribile al cliente para coordinar la entrega.'
        : 'Escribile al anfitrión para coordinar la entrega.',

      irInicio: () => this.guardar({ tab: 'inicio' }),
      irBuscar: () => this.guardar({ tab: 'buscar' }),
      irBuscarDesdeFicha: () => this.guardar({ listing: null, tab: 'buscar', resumen: false, paso: 'resumen' }),
      nav: this.navDefs.map(n => ({
        etiqueta: n.etiqueta,
        d: n.d,
        color: s.tab === n.clave ? '#E10600' : '#9AA0A8',
        relleno: s.tab === n.clave && n.clave === 'favoritos' ? '#E10600' : 'none',
        ir: () => this.guardar({ tab: n.clave })
      }))
    };
  }

  // --- agregado en el port a Next.js ---

  // El codigo del mapa espera window.L con markerClusterGroup, tal como lo
  // entregaban los <script> de CDN. Se conserva ese contrato y solo cambia
  // de donde sale la libreria; iniciarMapa() ya reintenta mientras no este.
  cargarMapaLib() {
    if (typeof window === 'undefined' || window.L) return;
    import('leaflet')
      .then((mod) => {
        window.L = mod.default || mod;
        return import('leaflet.markercluster');
      })
      .catch(() => { this.setState({ mapaFallido: true }); });
  }

  render() {
    return Plantilla({ ...this.props, ...this.renderVals() });
  }
}


Simulador.defaultProps = {
  vista: 'Presentación',
  pantallaInicial: 'Login',
  mostrarTotales: true,
};
