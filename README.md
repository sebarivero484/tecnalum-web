# Tecnalum Aberturas — Página institucional

Sitio web institucional de **Tecnalum Aberturas**, fábrica de aberturas de aluminio y PVC a medida en Villa Gesell, Costa Atlántica. Representantes oficiales REHAU.

## Estructura

- `index.html` — la página (HTML estático, optimizado para SEO)
- `img/` — fotos y logo, con nombres descriptivos
- `fonts/` — tipografías (Jost, Rajdhani, Space Grotesk)
- `js/dc-runtime.js` — runtime de la página (menú móvil, animaciones, formulario)
- `robots.txt` y `sitemap.xml` — archivos para buscadores

## Publicar con GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `tecnalum-web`).
2. Subí **todo el contenido de esta carpeta** (incluyendo las subcarpetas `img`, `fonts` y `js`).
3. Andá a **Settings → Pages**.
4. En **Source** elegí la rama `main` y la carpeta `/ (root)`. Guardá.
5. En unos minutos el sitio queda online en:
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`

## Dominio propio

El sitio se publica con GitHub Pages y usa el dominio propio `aberturastecnalum.com`, configurado en **Settings → Pages → Custom domain** apuntá ese dominio y activá HTTPS.

> **Importante:** si finalmente se publica en OTRA dirección, hay que actualizar el dominio en tres lugares: `index.html` (etiquetas `canonical`, `og:` y el bloque JSON-LD), `robots.txt` y `sitemap.xml`.

## Después de publicar (recomendado)

1. Dar de alta el sitio en [Google Search Console](https://search.google.com/search-console) y enviar el `sitemap.xml`.
2. Crear/actualizar la ficha de [Google Business Profile](https://business.google.com) con el link al sitio.

## Notas

- El mapa de Google embebido requiere conexión a internet.
- Optimizado para SEO: título, meta description, Open Graph, schema LocalBusiness (JSON-LD), `robots.txt`, `sitemap.xml`, carga diferida de imágenes y textos `alt` descriptivos en todas las imágenes.
- Hay un respaldo del archivo original (versión autocontenida de 9 MB) en la carpeta de arriba: `SITIO/respaldo-index-bundle-original.html`.
