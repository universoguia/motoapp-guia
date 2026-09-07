# Motoapp Mobile v0.0.7 — Consolidación visual y contenido fotográfico

**Base:** Motoapp Mobile v0.0.6 (recorrido de usuario aprobado y congelado).
**Fecha:** 4 de septiembre de 2026.
**Entrega:** `Motoapp Mobile v0.0.7/` (index.html, support.js, img/, capturas/, PHOTO_MANIFEST.md).

---

## 1. Changelog

### Contenido fotográfico
- Integrado `PHOTO_PACK_v0.0.7_APPROVED_DEMO`: 27 assets aprobados, 9 listings × hero/lateral/detalle. Ninguna imagen generada, sustituida ni reinterpretada.
- Una sola colección por listing, resuelta por `listingId`: `img/motos/<listingId>/{hero,lateral,detalle}.webp`. Ninguna pantalla declara rutas propias.
- Generada una variante de card por listing, `card.webp` 860×573 WebP q0,80, derivada **del hero del mismo listing** y de ninguna otra vista. Cards, thumbnails, card del mapa, Mis reservas, detalle, Panel y Agenda la consumen; la ficha pide el hero completo.
- La card del pin del mapa, que hasta v0.0.6 era solo título, precio y botón, ahora abre con la fotografía del listing a sangre sobre un popup de 214 px, con la placa de categoría debajo como fallback y `aria-label` en la imagen y en el botón. Es la última superficie que quedaba sin consumir `photos[]`.
- Con la foto a sangre, el `×` de Leaflet quedaba encima de la imagen y era ilegible sobre las motos claras, así que el popup pasa a `closeButton: false`: se cierra tocando el mapa u otro pin. El CTA «Ver ficha» subió de 26 a 44 px de alto, el mismo estándar táctil que flechas, favorito, chips y marcadores de galería.
- Eliminados del runtime los dos JPEG originales de v0.0.5 (`moto-01-hero.jpg` 1,7 MB y `moto-02-hero.jpg` 2,9 MB) que se cargaban sin optimizar en cada card.
- Añadidos `color` y `colorHex` al Listing, derivados del pack aprobado. Son los dos únicos atributos nuevos. Ningún listing cambió de marca, modelo, año, categoría, propietario, ciudad, precio, ID ni relación de reserva.

### Ficha y galería
- Galería real de tres imágenes del listing abierto: flechas de 44 px, indicador `1 / 3`, marcadores tocables, swipe táctil y ciclo continuo. El índice se reinicia al abrir otro listing, así que nunca se mezclan imágenes entre listings.
- Si un listing tiene una sola foto no se simula galería: no aparecen flechas, indicador ni marcadores.
- La fotografía queda limpia: el degradado dominante se sustituyó por un scrim superior, y marca, modelo y categoría bajaron al panel de contenido. El scrim mantiene densidad suficiente en la banda de la barra de estado (0,62 → transparente al 30%) para que hora, señal y batería sigan legibles sobre fotos claras como la PCX blanca o el cielo de la GS.
- La hero usa `aspect-ratio: 3 / 2`, la proporción del pack: no hay deformación ni salto de layout.
- Color visible en la ficha, con muestra cromática, y también en la ficha técnica.

### Home
- Nueva jerarquía: cabecera → CTA «Buscar moto / Elegí ciudad y fechas» → **Motos destacadas** → **Explorar por categoría** → **Dónde están** (mapa compacto) → nota de confianza.
- El mapa dejó de dominar el primer viewport: pasó de 340 px a un bloque compacto de ~200 px y quedó después del contenido fotográfico.
- Tres destacadas con `aspect-ratio: 3 / 2`, ordenadas por variedad visual (GS, MT-07, PCX). El orden es una preferencia de IDs sobre el catálogo: no hay datos hardcodeados fuera del Listing.
- Las destacadas y las categorías siguen sin inventar ciudad ni fechas.

### Filtros horizontales
- La fila de categorías de resultados y la de Inicio llevan padding final de 30 px, degradado lateral y un chevron discreto. En 390×844 la fila mide 762 px de ancho sobre 350 visibles: el desplazamiento ya es evidente.
- Los filtros siguen siendo exactamente ciudad, fechas, categoría y precio/día.

### Chat mobile
- Enter envía; el compositor conserva el campo de una línea con `enterKeyHint="send"`.
- Campo y botón a 48 px, con padding inferior `calc(12px + env(safe-area-inset-bottom))`.
- Tras enviar: campo limpio, mensaje visible, foco de vuelta en el campo, aviso «Mensaje enviado» en una región `aria-live` y scroll al último mensaje.
- El hilo abierto hace scroll al final sin usar `scrollIntoView`, controlando `scrollTop` del contenedor.
- El botón de enviar se deshabilita con el campo vacío.

### Ubicación y privacidad visual
- Antes de confirmar, ficha y checkout muestran ciudad y zona, con la nota «La dirección exacta se comparte al confirmar la reserva».
- Después de confirmar, el detalle de la reserva sigue mostrando el punto de entrega de la demo.
- No se tocaron coordenadas ni geografía del catálogo.

### Fallback y estados
- Regla explícita: foto disponible → fotografía; asset ausente o con error → placa de categoría. La placa vive como fondo del contenedor y la foto se pinta encima en su propio elemento, así que un fallo de carga descubre la placa sin superponer nada.
- Los nueve listings fixture usan fotografía. La única placa visible es la de una publicación creada a mano en la demo, que no tiene foto.
- Estados vacíos de resultados, favoritos, reservas y conversación conservados de v0.0.6, con sus CTA funcionales.

### Accesibilidad de lo modificado
- `aria-label` y `aria-pressed` en flechas y marcadores de galería, favorito de la ficha, chips y compositor. Foco visible en todos los controles nuevos. Área táctil de 44 px o más, incluidos los marcadores de foto, cuyo objetivo pasó de 26 a 44 px y quedó separado del panel de contenido.
- `alt` descriptivo por imagen: «BMW R 1250 GS, blanco, azul y rojo, en Madrid» en cards; «BMW R 1250 GS · perfil lateral» en la galería.

### Corrección menor
- El perfil de anfitrión decía «Anfitriona en Motoapp desde…» para cualquier cuenta. Ahora dice «En Motoapp desde…».

---

## 2. Lo que NO se tocó

Dominio intacto: Listing, Reservation, Conversation, Message, `buyerId`, `ownerId`, `listingId`, `conversationId`, disponibilidad, `searchContext`, reloj único, derivación de `desde/hasta`, persistencia, reset, catálogo compartido, navegación de usuario y de anfitrión, Panel, Agenda, Publicar, Mensajes, Perfil, filtros, checkout, confirmación y Mis reservas.

Runtime intacto: React, ReactDOM, Babel, Leaflet, MarkerCluster, teselas, Google Fonts y `support.js` siguen exactamente como estaban. No se inició ninguna migración ni empaquetado.

---

## 3. Resultados A–J

Ejecutadas sobre el build entregado. Reloj de la demo: 4 sep 2026.

### A — Regresión usuario · PASS
RESET → login → Inicio con «Buscar moto» y sin ciudad ni fechas → Buscar → Madrid → 10–12 sep → «Ver motos» → «Madrid · 10–12 septiembre · 2 motos disponibles · 3 días» → Lista `l-gs`, `l-iron` → Mapa 2 pines (120 €, 95 €) → ficha `l-gs` con galería → Reservar → resumen 120 € × 3 = 360 € → Pagar → **RD-2143** → Escribir al anfitrión → mensaje enviado con Enter.

### B — Regresión anfitrión · PASS
Cambio a Teo Lacasa. Panel: «2 motos publicadas · 1 reserva confirmada», próxima entrega con foto. Agenda: chips por publicación y días marcados. Mensajes: hilo con Iker y último mensaje correcto. Perfil: vuelta a la cuenta base. Publicar: asistente de 4 pasos, publicación `Suzuki V-Strom 650` creada y visible en panel y catálogo.

### C — 27/27 imágenes · PASS
9/9 hero, 9/9 lateral, 9/9 detalle, más 9 variantes de card: 36 archivos. Verificado por descarga real de cada archivo desde el build: ninguno falla. Modelo, año, color, dimensiones y peso por listing en `PHOTO_MANIFEST.md`. Ningún listing fixture queda en placeholder.

### D — Consistencia cross-screen · PASS
Para `l-gs`: Inicio, resultado de lista, checkout, Mis reservas, detalle de usuario y detalle de anfitrión resuelven `img/motos/l-gs/card.webp`; la card del pin de `l-iron` resuelve `img/motos/l-iron/card.webp` con `aria-label` «Harley-Davidson Iron 883, negro mate, en Madrid»; la ficha abre con `img/motos/l-gs/hero.webp`. Mismo `listingId`, mismo modelo, mismo color «Blanco, azul y rojo», mismo precio 120 €/día y mismo propietario Teo Lacasa en todas.

### E — Home · PASS
En 390×844 el primer viewport muestra: cabecera, CTA «Buscar moto / Elegí ciudad y fechas», el título «Motos destacadas» y la fotografía completa de la BMW con su precio. Categorías y mapa quedan por debajo. Sin ciudad ni fechas preseleccionadas. Orden verificado en el DOM: Motos destacadas → Explorar por categoría → Dónde están.

### F — Optimización · PASS
Pesos medidos sobre el build: hero/lateral/detalle 77–256 KB, card 58–99 KB, total 5.523 KB en 36 archivos. Ningún asset roto. Ningún archivo de varios MB en runtime; los dos JPEG de 1,7 y 2,9 MB de v0.0.5 quedaron eliminados. Inicio carga 235 KB de imagen en el primer viewport. `aspect-ratio` fijo en cards y hero, `background-size: cover` en todas: sin deformación ni salto de layout.

### G — Galería · PASS
En `l-gs`: 1/3 `hero.webp` «vista general» → 2/3 `lateral.webp` «perfil lateral» → 3/3 `detalle.webp` «detalle» → vuelta a 1/3. Marcador «perfil lateral» salta a 2/3. Misma moto en las tres, indicador correcto, swipe operativo, CTA de reserva siempre visible en la barra inferior, y volver conserva el estado de búsqueda.

### H — Filtros · PASS
En resultados la fila de categorías mide 762 px sobre 350 visibles, con 30 px de padding final, degradado y chevron: el corte deja de ser ambiguo. El chip activo se pinta en carbón con `aria-pressed`. Los filtros siguen siendo ciudad, fechas, categoría y precio/día.

### I — Chat · PASS
Con el hilo de RD-2143 abierto: compositor dentro de la pantalla, campo y botón de 48 px, 12 px de margen inferior más safe area, distancia al final del scroll 0. Enter envía; el mensaje entra con `senderId: u-iker`; el campo queda vacío; el foco vuelve al campo; aparece «Mensaje enviado». La respuesta del anfitrión llega con `senderId: u-teo` sobre la misma `conversationId`.

### J — Persistencia y reset · PASS
Con búsqueda Madrid 10–12 sep, vista de lista, reserva RD-2143, dos conversaciones y una publicación demo: tras refresh se conservan contexto, filtros, vista, reservas, conversaciones y `listingsDemo`. Tras RESET la búsqueda vuelve al estado neutral sin ciudad ni fechas y sin registros huérfanos, verificado en las pruebas A y E.

---

## 4. Capturas

`capturas/`, correspondientes exactamente a este build: 01 Login · 02 Home · 03 Buscar neutral · 04 Resultados lista · 05 Resultados mapa · 06 Ficha con galería · 07 Checkout · 08 Confirmación · 09 Mis reservas · 10 Conversación usuario · 11 Panel anfitrión · 12 Agenda · 13 Publicar · 14 Mensajes anfitrión.

Las trece primeras se tomaron sobre el marco de presentación reducido para que el teléfono entre completo; la 10 se capturó directamente sobre la pantalla de 390×844 para dejar el compositor a la vista, que era el P2-01 de la auditoría anterior.

---

## 5. Bugs conocidos

1. El asistente de publicación no acepta subir fotos, así que una moto creada en la demo se queda en placa de categoría. Es el fallback previsto por §7, no un fallo, pero conviene resolverlo cuando se decida cómo se cargan imágenes de usuario.
2. La categoría «Touring» existe en el código y no tiene ningún listing, por lo que nunca aparece entre los chips. Sin foto asociada y sin efecto visible.
3. Las teselas satelitales del mapa siguen siendo pesadas y compiten visualmente con las motos. Cambiar el estilo de mapa entra en la ronda técnica, no en esta.
4. El calendario avanza mes a mes, sin salto de año directo.
5. En escritorio la aplicación sigue presentándose como simulador móvil. No es todavía una experiencia web de dos columnas.

---

## 6. Diferido a la próxima versión técnica

1. React, ReactDOM y Babel por CDN; compilación previa del JSX.
2. Leaflet, MarkerCluster y teselas del mapa; fallback de mapa local.
3. Google Fonts (Archivo y Racing Sans One) por CDN.
4. `support.js` y `new Function`; build reproducible.
5. Apertura sin conexión de los recursos críticos. Las fotografías, el logo y los iconos propios ya son locales y están optimizados en esta versión.
6. Rediseño del login, registro, recuperación de contraseña y autenticación real: quedan para Sell Ready.
7. Estados de reserva más allá de `confirmed`, bloqueo manual de fechas por el anfitrión y estados de publicación: siguen siendo decisiones de dominio abiertas.
