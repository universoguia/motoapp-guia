# LEEME PRIMERO — motoapp-guia

**Dueño:** David (universoguia) · **Repo:** `universoguia/motoapp-guia` (público)
**Producción:** https://motoapp-guia.vercel.app · **Local:** `C:\dev\motoapp-guia`
**Última actualización:** 2026-09-07

> Punto de entrada del proyecto. Antes de tocar cualquier cosa, leer esto entero.
> No confundir con **motoappmarket.com**, que es de Rodrigo Araya (repo
> `rodrigoarayah/motos-app`) y tiene su propio Supabase, su dominio y sus
> clientes. Son dos proyectos distintos y **no comparten base de datos**.

---

## Qué es

Motoapp: alquiler de motos entre particulares (anfitrión ↔ usuario), presentado
como un simulador de teléfono de 390×844, más cuatro módulos de marketplace
traídos de motoappmarket.

- **El core** es la v0.0.7 aprobada: buscar por ciudad y fechas, resultados en
  lista y mapa, ficha con galería, checkout, confirmación, mis reservas, chat, y
  el lado anfitrión (panel, agenda, publicar, mensajes, perfil).
- **Los módulos** que se sumaron: comprar moto (particular y tienda), subastas
  Hot Deal con pujas, accesorios con envío, y tiendas cerca.

## Stack

Next.js 15.5.25 · React 19 · Leaflet + MarkerCluster · sin backend todavía.
Los datos son fijos y la sesión vive en `localStorage`.

---

## 🔴 La regla que no se negocia

**`components/simulador/` es código GENERADO. No se edita a mano.**

El repo era originalmente un único `index.html` de 246 KB en formato canvas de
Claude Design (`<x-dc>`, `sc-if`, `sc-for`, `{{ holes }}`) interpretado por
`support.js`, con React y Babel compilando JSX en el navegador.

Ese original vive intacto en **`legacy/`** y es la **fuente de la verdad** del
alquiler. Dos scripts lo convierten:

| Script | Qué hace |
|---|---|
| `scripts/convertir-plantilla.mjs` | El bloque `<x-dc>` → JSX (`sc-if` → `&&`, `sc-for` → `map`, `style=""` → objeto, SVG a camelCase) |
| `scripts/convertir-logica.mjs` | La clase de lógica → `React.Component` |

```bash
npm run convertir
```

`npm run build` lo corre solo. Si querés cambiar el alquiler, se edita
`legacy/index.html` y se regenera. **Si editás `components/simulador/` a mano,
el siguiente build te lo pisa.**

### Por qué la lógica viajó sin tocar

`DCLogic` (la clase base de canvas) tenía la misma semántica que
`React.Component`: `state`, `setState` con merge, `componentDidMount` /
`DidUpdate` / `WillUnmount`, `this.props`. Así que todo el dominio —listings,
reservas, disponibilidad, conversaciones, agenda, publicación, persistencia—
es **verbatim** el de v0.0.7.

Los únicos cambios están **declarados** en `convertir-logica.mjs`, y el script
**falla** si alguno pierde su objetivo (así un cambio en el original nunca pasa
en silencio):

1. `extends DCLogic` → `extends React.Component`
2. `window.innerWidth/Height` con guarda de SSR
3. Las fotos pasan a `/img/...` (ahora se sirven desde `public/`)
4. Leaflet y MarkerCluster dejan el CDN y se cargan como módulos, conservando
   el contrato `window.L` que espera `iniciarMapa()`

---

## Cómo se enganchan los módulos sin tocar lo generado

La plantilla expone **dos ranuras**, también declaradas en el conversor (y con
el mismo fallo ruidoso si el ancla desaparece):

| Ranura | Dónde cae | Qué recibe |
|---|---|---|
| `__inicioExtra` | al pie de la pantalla Inicio | los cuatro accesos |
| `__modulos` | última capa dentro del marco | la pantalla completa del módulo |

El estado de qué módulo está abierto vive en `app/page.jsx` y baja como prop.
Los módulos son `components/modulos/Modulos.jsx`: **código aparte que se suma
al costado**, sin tocar el alquiler.

---

## 🔑 Conectar Supabase: se toca UN archivo

**`lib/datos/index.js`** es la costura. Las pantallas nunca leen el catálogo:
piden por funciones que **ya son async**, así que cambiar el origen no obliga a
reescribir ningún componente.

```
listarTiendas · obtenerTienda · coordenadaDe
listarVentas · obtenerVenta
listarSubastas · obtenerSubasta · pujar
listarProductos · obtenerProducto · crearPedido
```

Correspondencia con el `schema.sql` de motoappmarket, por si se reusa:

| Acá | Allá |
|---|---|
| `TIENDAS` | `providers` |
| `VENTAS` | `moto_listings` |
| `SUBASTAS` | `moto_listings` (`auction_*`) + `moto_bids` |
| `PRODUCTOS` | `products` |
| pedidos | `orders` |

**Ojo con `pujar()`:** hoy valida en el cliente. En motoappmarket eso es
`POST /api/bids` validando en el servidor, porque `moto_bids` no acepta INSERT
directo. Al conectar backend, esa validación tiene que mudarse al servidor.

**El login todavía no es real.** Cualquier contraseña entra: la pantalla de
acceso es de demostración. Eso es lo primero a resolver con Supabase Auth.

---

## Lo que NO se trajo de motoappmarket, y por qué

- **Su Supabase** (`yfsnsfepxgowrcbjlqtm`) — decisión explícita: no se toca la
  base de Rodrigo.
- **Sus ~1.040 negocios reales** de OpenStreetMap — viven en esa base. Las 7
  tiendas de acá son inventadas.
- **Sus dos tiendas premium** (CL Custom Garage, Blafer Motos) y sus cuentas.
- **Stripe** — el checkout de accesorios arma el comprobante y avisa en pantalla
  que no se cobró nada.
- **Resend** — no hay avisos por email.
- **El cron de cierre de subastas** — el estado se deriva del reloj al mirar.
- **Su panel `/admin`** — no se trajo (no hay usuarios ni roles todavía).

---

## Verificado

Recorrido completo en el navegador, no solo compilando:

- login → inicio con fotos → buscar → Madrid 10–12 sep (3 días) → resultados con
  totales correctos (75 € × 3 = 225 €) → ficha → galería 1/3 → 2/3
- venta con filtro particular/tienda (7 → 3 motos)
- subastas: puja de 5.000 € rechazada por mínimo 5.550 €, 5.600 € aceptada y el
  historial se reordena
- accesorios: 2 × 249 € + 6 € de envío = 504 € con comprobante
- 7 tiendas con verificado y remates habilitados

Sin errores de consola.

---

## Pendientes

1. **Supabase**: auth real + mover los datos de `lib/datos/` a la base.
2. **Validar las pujas en el servidor** (hoy es cliente, ver arriba).
3. **Pagos** — hoy todo checkout es simulado.
4. **2 advisories de npm** (postcss, transitivo de Next) que solo se cierran
   migrando a Next 16, que es breaking. Revisar antes de producción real.
5. **El repo es público.** Al conectar Supabase, que ninguna clave de servicio
   entre al código: solo la anon key, y con RLS puesto.
6. Del changelog de v0.0.7, sin resolver: publicar no acepta subir fotos, la
   categoría Touring no tiene listings, y en escritorio sigue viéndose como un
   teléfono centrado (no es todavía una web de dos columnas).

---

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run convertir  # regenera components/simulador/ desde legacy/
npm run build      # convierte y compila
```

Push a `main` = deploy automático en Vercel.

**Ojo con el email de los commits:** la cuenta `universoguia` tiene la
protección de email privado activada, así que GitHub rechaza commits con el
Gmail. Hay que commitear con
`321865786+universoguia@users.noreply.github.com`.
