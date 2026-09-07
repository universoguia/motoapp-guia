# PHOTO_MANIFEST — Motoapp Mobile v0.0.7

**Origen:** `PHOTO_PACK_v0.0.7_APPROVED_DEMO` (copia de integración WebP), APPROVED FOR DEMO por el Chat Maestro.
**Estado de todos los assets:** APPROVED DEMO ASSET.

Estas imágenes son **DEMO ASSETS**. No son inventario productivo, no representan motos, propietarios ni operaciones reales, y no pertenecen al Motoapp web original. Los assets del pack fueron generados con la herramienta integrada de OpenAI y su uso queda sujeto a los términos del pack de origen.

## Asociación

Una sola colección por listing, resuelta exclusivamente por `listingId`:

```
img/motos/<listingId>/hero.webp      → primera imagen de la galería
img/motos/<listingId>/lateral.webp   → segunda imagen de la galería
img/motos/<listingId>/detalle.webp   → tercera imagen de la galería
img/motos/<listingId>/card.webp      → variante ligera derivada de hero.webp
```

Ninguna pantalla declara rutas propias. Home, resultados, card del mapa, ficha, checkout, confirmación, Mis reservas, detalle de reserva, Panel, Agenda y publicaciones consumen `fotosDe(listingId)`, `fotoCss(listingId)` y `heroCss(listingId, i)`. La imagen principal de un listing es siempre la misma en todas las superficies, porque `card.webp` se deriva de `hero.webp` y de ninguna otra vista.

## Variantes en runtime

| listingId | Modelo | Año | Color | Hero | Lateral | Detalle | Card | Total | Estado |
|---|---|---:|---|---|---|---|---|---:|---|
| `l-mt07` | Yamaha MT-07 | 2022 | Gris cyan | `hero.webp` 1400×933 · 190 KB | `lateral.webp` 1400×933 · 186 KB | `detalle.webp` 1400×933 · 144 KB | `card.webp` 860×573 · 76 KB | 596 KB | APPROVED DEMO ASSET |
| `l-ninja` | Kawasaki Ninja 650 | 2021 | Verde y negro | `hero.webp` 1400×933 · 219 KB | `lateral.webp` 1400×933 · 222 KB | `detalle.webp` 1400×933 · 131 KB | `card.webp` 860×573 · 87 KB | 659 KB | APPROVED DEMO ASSET |
| `l-gs` | BMW R 1250 GS | 2023 | Blanco, azul y rojo | `hero.webp` 1400×933 · 250 KB | `lateral.webp` 1400×933 · 218 KB | `detalle.webp` 1400×933 · 119 KB | `card.webp` 860×573 · 99 KB | 686 KB | APPROVED DEMO ASSET |
| `l-africa` | Honda Africa Twin | 2022 | Tricolor, llantas doradas | `hero.webp` 1400×933 · 210 KB | `lateral.webp` 1400×933 · 212 KB | `detalle.webp` 1400×933 · 90 KB | `card.webp` 860×573 · 81 KB | 593 KB | APPROVED DEMO ASSET |
| `l-bonne` | Triumph Bonneville T120 | 2020 | Burdeos y negro | `hero.webp` 1400×933 · 255 KB | `lateral.webp` 1400×933 · 256 KB | `detalle.webp` 1400×933 · 186 KB | `card.webp` 860×573 · 98 KB | 795 KB | APPROVED DEMO ASSET |
| `l-pcx` | Honda PCX 125 | 2023 | Blanco perla | `hero.webp` 1400×933 · 150 KB | `lateral.webp` 1400×933 · 147 KB | `detalle.webp` 1400×933 · 77 KB | `card.webp` 860×573 · 60 KB | 434 KB | APPROVED DEMO ASSET |
| `l-forza` | Honda Forza 350 | 2023 | Grafito mate | `hero.webp` 1400×933 · 152 KB | `lateral.webp` 1400×933 · 143 KB | `detalle.webp` 1400×933 · 83 KB | `card.webp` 860×573 · 58 KB | 436 KB | APPROVED DEMO ASSET |
| `l-iron` | Harley-Davidson Iron 883 | 2019 | Negro mate | `hero.webp` 1400×933 · 219 KB | `lateral.webp` 1400×933 · 227 KB | `detalle.webp` 1400×933 · 164 KB | `card.webp` 860×573 · 87 KB | 697 KB | APPROVED DEMO ASSET |
| `l-z900` | Kawasaki Z900 | 2022 | Azul Twilight | `hero.webp` 1400×933 · 190 KB | `lateral.webp` 1400×933 · 205 KB | `detalle.webp` 1400×933 · 161 KB | `card.webp` 860×573 · 71 KB | 627 KB | APPROVED DEMO ASSET |

**Totales:** 36 archivos, 5523 KB (5,39 MB). Hero, lateral y detalle: 77–256 KB. Card: 58–99 KB. Ningún asset supera 256 KB. Pesos medidos sobre el build entregado, no estimados.

### Cómo se generó la variante de card

Reducción determinista desde el `hero.webp` aprobado de cada listing: ancho 860 px, proporción preservada (860×573), suavizado de alta calidad, WebP calidad 0,80. No se recortó, no se rotó y no se mezcló con otra vista. Los PNG del pack MASTER externo no entran en el runtime; el pack de integración WebP es la fuente.

### Coste real por superficie

- **Inicio, primer viewport:** 3 variantes de card — 235 KB (`l-gs` 99 + `l-mt07` 76 + `l-pcx` 60).
- **Resultados, lista de 2:** 2 variantes de card — 186 KB (`l-gs` 99 + `l-iron` 87).
- **Ficha, primera pintura:** 1 hero — 150–255 KB según listing. Lateral y detalle se piden al avanzar la galería.
- **Card del mapa, Mis reservas, detalle, Panel, Agenda:** variante de card, ya en caché desde Inicio o resultados.

Las superficies de card no cargan ningún hero, y la ficha no carga ninguna imagen que no sea del listing abierto.

## Coherencia foto ↔ listing

| listingId | Marca/modelo del listing | Año del listing | Color escrito en la ficha | Cambio de dominio |
|---|---|---:|---|---|
| `l-mt07` | Yamaha MT-07 | 2022 | Gris cyan | ninguno |
| `l-ninja` | Kawasaki Ninja 650 | 2021 | Verde y negro | ninguno |
| `l-gs` | BMW R 1250 GS | 2023 | Blanco, azul y rojo | ninguno |
| `l-africa` | Honda Africa Twin | 2022 | Tricolor, llantas doradas | ninguno |
| `l-bonne` | Triumph Bonneville T120 | 2020 | Burdeos y negro | ninguno |
| `l-pcx` | Honda PCX 125 | 2023 | Blanco perla | ninguno |
| `l-forza` | Honda Forza 350 | 2023 | Grafito mate | ninguno |
| `l-iron` | Harley-Davidson Iron 883 | 2019 | Negro mate | ninguno |
| `l-z900` | Kawasaki Z900 | 2022 | Azul Twilight | ninguno |

**Sobre la MT-07:** el pack aprobado entrega una MT-07 2022 gris cyan, que coincide con el año que ya tenía el listing. La discrepancia detectada en v0.0.5 desaparece sin tocar el año: solo se añadió el campo `color`, que no existía. Ningún listing cambió de marca, modelo, categoría, propietario, ciudad, precio ni ID.

`color` y `colorHex` son los dos únicos atributos nuevos del Listing. `colorHex` es solo la muestra circular que acompaña al nombre del color en la ficha.

## Fallback

```
foto del pack disponible  → fotografía
asset ausente o con error → placa de categoría
```

El contenedor de cada imagen lleva la placa de categoría como fondo y la fotografía se pinta encima en un elemento propio. Si el archivo falla, ese elemento queda transparente y la placa aparece sin superponerse a nada. Los nueve listings fixture usan fotografía; la única superficie con placa es la publicación creada a mano durante la demo, que no tiene foto porque el asistente de publicación todavía no acepta subir imágenes.
