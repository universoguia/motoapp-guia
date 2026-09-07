// Convierte la plantilla canvas (<x-dc> con sc-if / sc-for / {{ holes }})
// de index.html v0.0.7 a JSX real. Determinista: misma entrada, misma salida.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGEN = path.join(RAIZ, 'legacy', 'index.html');

const VACIOS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'stop', 'use']);

// Atributos que en JSX cambian de nombre. SVG en kebab-case -> camelCase.
const ATTR = {
  'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'readonly': 'readOnly',
  'maxlength': 'maxLength', 'autocomplete': 'autoComplete', 'autofocus': 'autoFocus',
  'enterkeyhint': 'enterKeyHint', 'inputmode': 'inputMode', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'stroke-opacity': 'strokeOpacity', 'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit', 'fill-opacity': 'fillOpacity', 'fill-rule': 'fillRule',
  'clip-rule': 'clipRule', 'clip-path': 'clipPath', 'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor', 'font-family': 'fontFamily', 'font-size': 'fontSize', 'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing', 'gradientunits': 'gradientUnits', 'patternunits': 'patternUnits',
  'preserveaspectratio': 'preserveAspectRatio', 'vector-effect': 'vectorEffect',
  'crossorigin': 'crossOrigin', 'srcset': 'srcSet', 'novalidate': 'noValidate', 'spellcheck': 'spellCheck',
};

// Atributos que React quiere booleanos, no cadenas.
const BOOLEANOS = new Set(['disabled', 'checked', 'readOnly', 'autoFocus', 'required', 'multiple', 'selected', 'noValidate', 'hidden']);

// ---------- tokenizador ----------
function parsear(html) {
  let i = 0;
  const raiz = { tipo: 'raiz', hijos: [] };
  const pila = [raiz];
  const cima = () => pila[pila.length - 1];

  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt < 0) { agregarTexto(cima(), html.slice(i)); break; }
    if (lt > i) agregarTexto(cima(), html.slice(i, lt));

    if (html.startsWith('<!--', lt)) { i = html.indexOf('-->', lt) + 3; continue; }
    if (html.startsWith('<!', lt)) { i = html.indexOf('>', lt) + 1; continue; }

    if (html[lt + 1] === '/') {                       // cierre
      const gt = html.indexOf('>', lt);
      const nombre = html.slice(lt + 2, gt).trim().toLowerCase();
      for (let k = pila.length - 1; k > 0; k--) {
        if (pila[k].nombre === nombre) { pila.length = k; break; }
      }
      i = gt + 1;
      continue;
    }

    const gt = finDeTag(html, lt);                    // apertura
    const crudo = html.slice(lt + 1, gt).replace(/\/$/, '');
    const mNombre = crudo.match(/^([A-Za-z][-A-Za-z0-9]*)/);
    const nombre = mNombre[1].toLowerCase();
    const nodo = { tipo: 'elemento', nombre, attrs: leerAttrs(crudo.slice(mNombre[1].length)), hijos: [] };
    cima().hijos.push(nodo);
    const autocierra = html[gt - 1] === '/' || VACIOS.has(nombre);
    if (!autocierra) pila.push(nodo);
    i = gt + 1;
  }
  return raiz;
}

function agregarTexto(padre, txt) { if (txt) padre.hijos.push({ tipo: 'texto', valor: txt }); }

// Encuentra el '>' que cierra el tag, respetando comillas.
function finDeTag(html, desde) {
  let j = desde + 1, comilla = null;
  while (j < html.length) {
    const c = html[j];
    if (comilla) { if (c === comilla) comilla = null; }
    else if (c === '"' || c === "'") comilla = c;
    else if (c === '>') return j;
    j++;
  }
  throw new Error('tag sin cerrar en ' + desde);
}

function leerAttrs(s) {
  const out = [];
  const re = /([:@A-Za-z_][-.:A-Za-z0-9_]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(s))) {
    const valor = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4];
    out.push({ nombre: m[1], valor: valor === undefined ? null : valor });
  }
  return out;
}

// ---------- expresiones ----------
const RE_HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;

function expr(codigo, ambito) {
  const t = codigo.trim();
  if (t === '') return 'null';
  if (/^(true|false|null|-?\d+(\.\d+)?)$/.test(t)) return t;              // literales
  if (/^['"]/.test(t)) return t;                                          // cadena literal
  const raiz = t.split('.')[0].split('(')[0].split('[')[0];
  return ambito.has(raiz) ? t : 'v.' + t;                                 // scope de sc-for vs renderVals
}

function esHoleUnico(valor) {
  const m = valor.match(/^\s*\{\{\s*([^}]*?)\s*\}\}\s*$/);
  return m ? m[1] : null;
}

// Cadena con holes -> literal JS ('a' o `a${x}b`)
function cadenaConHoles(valor, ambito) {
  RE_HOLE.lastIndex = 0;
  if (!RE_HOLE.test(valor)) { RE_HOLE.lastIndex = 0; return JSON.stringify(valor); }
  RE_HOLE.lastIndex = 0;
  const cuerpo = valor
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
    .replace(/\{\{\s*([^}]*?)\s*\}\}/g, (_, c) => '${' + expr(c, ambito) + '}');
  return '`' + cuerpo + '`';
}

// ---------- style ----------
function estilo(valor, ambito) {
  const partes = [];
  let buf = '', prof = 0;
  for (let k = 0; k < valor.length; k++) {                 // separar por ';' fuera de {{ }} y de ()
    if (valor.startsWith('{{', k)) { prof++; buf += '{{'; k++; continue; }
    if (valor.startsWith('}}', k)) { prof--; buf += '}}'; k++; continue; }
    const c = valor[k];
    if (c === '(') prof++;
    if (c === ')') prof--;
    if (c === ';' && prof <= 0) { partes.push(buf); buf = ''; continue; }
    buf += c;
  }
  partes.push(buf);

  const props = [];
  for (const p of partes) {
    const crudo = p.trim();
    if (!crudo) continue;
    const dos = crudo.indexOf(':');
    if (dos < 0) continue;
    const prop = crudo.slice(0, dos).trim();
    const val = crudo.slice(dos + 1).trim();
    const clave = prop.startsWith('--') ? JSON.stringify(prop)
      : /^[a-z]+$/.test(prop) ? prop
        : prop.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
    const solo = esHoleUnico(val);
    props.push(clave + ': ' + (solo !== null ? expr(solo, ambito) : cadenaConHoles(val, ambito)));
  }
  return '{ ' + props.join(', ') + ' }';
}

// ---------- emision JSX ----------
function nombreAttr(n) {
  const bajo = n.toLowerCase();
  if (ATTR[bajo]) return ATTR[bajo];
  if (/^(data|aria)-/.test(bajo)) return bajo;
  return n;
}

function emitirElemento(nodo, ambito, ind) {
  const pad = '  '.repeat(ind);

  if (nodo.nombre === 'sc-if') {
    const cond = nodo.attrs.find(a => a.nombre === 'value');
    const c = esHoleUnico(cond ? cond.valor : '');
    const prueba = c !== null ? expr(c, ambito) : 'false';
    const hijos = emitirHijos(nodo, ambito, ind + 1);
    if (!hijos.trim()) return '';
    return pad + '{' + prueba + ' ? (<>\n' + hijos + '\n' + pad + '</>) : null}';
  }

  if (nodo.nombre === 'sc-for') {
    const lista = nodo.attrs.find(a => a.nombre === 'list');
    const as = nodo.attrs.find(a => a.nombre === 'as');
    const c = esHoleUnico(lista ? lista.valor : '');
    const iter = c !== null ? expr(c, ambito) : '[]';
    const nom = as ? as.valor : 'it';
    const sub = new Set([...ambito, nom]);
    const hijos = emitirHijos(nodo, sub, ind + 2);
    return pad + '{(' + iter + ' || []).map((' + nom + ', __i) => (\n'
      + '  '.repeat(ind + 1) + '<React.Fragment key={' + nom + ' && ' + nom + '.id != null ? ' + nom + '.id : __i}>\n'
      + hijos + '\n'
      + '  '.repeat(ind + 1) + '</React.Fragment>\n'
      + pad + '))}';
  }

  const partes = [];
  for (const a of nodo.attrs) {
    const n = a.nombre;
    if (n.startsWith('hint-')) continue;                       // solo para el editor de canvas
    if (a.valor === null) { partes.push(nombreAttr(n)); continue; }
    if (n === 'style') { partes.push('style={' + estilo(a.valor, ambito) + '}'); continue; }
    const jn = nombreAttr(n);
    const solo = esHoleUnico(a.valor);
    if (solo !== null) { partes.push(jn + '={' + expr(solo, ambito) + '}'); continue; }
    if (BOOLEANOS.has(jn)) { partes.push(jn); continue; }
    RE_HOLE.lastIndex = 0;
    if (RE_HOLE.test(a.valor)) { RE_HOLE.lastIndex = 0; partes.push(jn + '={' + cadenaConHoles(a.valor, ambito) + '}'); continue; }
    RE_HOLE.lastIndex = 0;
    // Las imagenes ahora se sirven desde /public, no como ruta relativa.
    if (jn === 'src' && a.valor.startsWith('img/')) { partes.push('src="/' + a.valor + '"'); continue; }
    // React quiere tabIndex numerico.
    if (jn === 'tabIndex') { partes.push('tabIndex={' + Number(a.valor) + '}'); continue; }
    partes.push(jn + '=' + JSON.stringify(a.valor));
  }
  const attrs = partes.length ? ' ' + partes.join(' ') : '';

  if (VACIOS.has(nodo.nombre) || nodo.hijos.length === 0) {
    return pad + '<' + nodo.nombre + attrs + ' />';
  }
  const hijos = emitirHijos(nodo, ambito, ind + 1);
  if (!hijos.trim()) return pad + '<' + nodo.nombre + attrs + ' />';
  return pad + '<' + nodo.nombre + attrs + '>\n' + hijos + '\n' + pad + '</' + nodo.nombre + '>';
}

function emitirTexto(nodo, ambito, ind) {
  const pad = '  '.repeat(ind);
  const v = nodo.valor;
  if (!v.trim()) return '';
  const piezas = [];
  let ult = 0, m;
  RE_HOLE.lastIndex = 0;
  while ((m = RE_HOLE.exec(v))) {
    const antes = v.slice(ult, m.index);
    if (antes.trim()) piezas.push(pad + escaparTexto(antes));
    piezas.push(pad + '{' + expr(m[1], ambito) + '}');
    ult = m.index + m[0].length;
  }
  const cola = v.slice(ult);
  if (cola.trim()) piezas.push(pad + escaparTexto(cola));
  return piezas.join('\n');
}

// El texto JSX no admite { } ni < > sueltos; se pasan como expresion.
function escaparTexto(t) {
  const limpio = t.replace(/\s+/g, ' ');
  return /[{}<>]/.test(limpio) ? '{' + JSON.stringify(limpio) + '}' : limpio;
}

function emitirHijos(nodo, ambito, ind) {
  return nodo.hijos.map(h => {
    if (h.tipo === 'texto') return emitirTexto(h, ambito, ind);
    if (h.tipo === 'slot') return '  '.repeat(ind) + '{v.' + h.nombre + ' || null}';
    return emitirElemento(h, ambito, ind);
  }).filter(s => s !== '').join('\n');
}

// ---------- puntos de extension ----------
// La plantilla es generada, asi que los modulos nuevos (venta, subastas,
// accesorios, tiendas) no se pegan a mano dentro de ella: se enganchan en
// estos dos huecos. Si un ancla deja de existir en el original, el script
// falla en vez de emitir una plantilla sin el hueco.
const RANURAS = [
  {
    nombre: '__modulos',
    porque: 'capa a pantalla completa de los modulos, dentro del marco del telefono',
    busca: (n) => n.attrs.some(a => a.nombre === 'style' && a.valor.includes('{{ radioPantalla }}')),
  },
  {
    nombre: '__inicioExtra',
    porque: 'accesos a los modulos al pie de la pantalla Inicio',
    busca: (n) => n.attrs.some(a => a.nombre === 'data-screen-label' && a.valor === 'Inicio'),
  },
];

function insertarRanuras(raiz) {
  for (const r of RANURAS) {
    let destino = null;
    (function buscar(n) {
      if (destino) return;
      if (n.tipo === 'elemento' && r.busca(n)) { destino = n; return; }
      (n.hijos || []).forEach(buscar);
    })(raiz);
    if (!destino) throw new Error('ancla sin objetivo (' + r.porque + '): ranura ' + r.nombre);
    destino.hijos.push({ tipo: 'slot', nombre: r.nombre });
  }
}

// ---------- main ----------
const html = fs.readFileSync(ORIGEN, 'utf8');
const ini = html.indexOf('</helmet>') + '</helmet>'.length;
const fin = html.indexOf('</x-dc>');
if (ini < 20 || fin < 0) throw new Error('no encuentro el bloque <x-dc> en legacy/index.html');
const plantilla = html.slice(ini, fin);

const arbol = parsear(plantilla);
insertarRanuras(arbol);
const jsx = emitirHijos(arbol, new Set(), 3);

const salida = `// GENERADO por scripts/convertir-plantilla.mjs desde legacy/index.html (v0.0.7).
// No editar a mano: volver a correr \`npm run convertir\`.
import React from 'react';

export default function Plantilla(v) {
  return (
    <>
${jsx}
    </>
  );
}
`;

const destino = path.join(RAIZ, 'components', 'simulador', 'Plantilla.jsx');
fs.mkdirSync(path.dirname(destino), { recursive: true });
fs.writeFileSync(destino, salida);
console.log('OK ->', destino, '(' + salida.split('\n').length + ' lineas)');
