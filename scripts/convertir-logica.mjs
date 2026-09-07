// Extrae la clase de logica de legacy/index.html (v0.0.7) y la porta a un
// componente de clase de React. La logica de dominio se copia VERBATIM: solo
// se aplican los parches minimos listados en PARCHES, y el script falla si
// alguno deja de encontrar su objetivo (asi un cambio en el original no pasa
// silenciosamente).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGEN = path.join(RAIZ, 'legacy', 'index.html');

const html = fs.readFileSync(ORIGEN, 'utf8');
const ini = html.indexOf('class Component extends DCLogic');
const fin = html.lastIndexOf('</script>');
if (ini < 0 || fin < 0) throw new Error('no encuentro la clase de logica en legacy/index.html');
let src = html.slice(ini, fin).trimEnd();

// DCLogic tiene la misma semantica que React.Component (state, setState con
// merge, componentDidMount/DidUpdate/WillUnmount, this.props), asi que el
// cuerpo de la clase viaja sin tocar.
const PARCHES = [
  {
    porque: 'React.Component en lugar del runtime de canvas',
    de: 'class Component extends DCLogic {',
    a: 'class Simulador extends React.Component {',
  },
  {
    porque: 'el estado se inicializa antes de que exista window (SSR)',
    de: 'state = { vw: window.innerWidth, vh: window.innerHeight,',
    a: 'state = { vw: anchoVentana(), vh: altoVentana(),',
  },
  {
    porque: 'las fotos ahora se sirven desde /public',
    de: "rutaFoto(id, archivo) { return 'img/motos/' + id + '/' + archivo + '.webp'; }",
    a: "rutaFoto(id, archivo) { return '/img/motos/' + id + '/' + archivo + '.webp'; }",
  },
  {
    porque: 'Leaflet y MarkerCluster ya no vienen por CDN: se cargan como modulos',
    de: 'componentDidMount() {',
    a: 'componentDidMount() {\n    this.cargarMapaLib();',
  },
];

for (const p of PARCHES) {
  if (!src.includes(p.de)) throw new Error('parche sin objetivo (' + p.porque + '): ' + p.de.slice(0, 70));
  src = src.replace(p.de, p.a);
}

// Guardas de SSR para el resto de accesos directos a window.
src = src
  .replace(/window\.innerWidth/g, 'anchoVentana()')
  .replace(/window\.innerHeight/g, 'altoVentana()');

// Metodos que se agregan al final de la clase.
const AGREGADO = `
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
`;

src = src.replace(/\}\s*$/, AGREGADO + '}\n');

const salida = `'use client';
// GENERADO por scripts/convertir-logica.mjs desde legacy/index.html (v0.0.7).
// No editar a mano: volver a correr \`npm run convertir\`.
//
// La logica de dominio (listings, reservas, disponibilidad, conversaciones,
// agenda, publicacion, persistencia) es la de v0.0.7 sin cambios. Los unicos
// parches estan declarados en el script generador.
import React from 'react';
import Plantilla from './Plantilla';

const anchoVentana = () => (typeof window === 'undefined' ? 390 : window.innerWidth);
const altoVentana = () => (typeof window === 'undefined' ? 844 : window.innerHeight);

export default ${src}

Simulador.defaultProps = {
  vista: 'Presentación',
  pantallaInicial: 'Login',
  mostrarTotales: true,
};
`;

const destino = path.join(RAIZ, 'components', 'simulador', 'Simulador.jsx');
fs.mkdirSync(path.dirname(destino), { recursive: true });
fs.writeFileSync(destino, salida);
console.log('OK ->', destino, '(' + salida.split('\n').length + ' lineas, ' + PARCHES.length + ' parches aplicados)');
