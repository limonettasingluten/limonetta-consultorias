LIMONETTA CONSULTORÍAS — ARCHIVOS PARA GITHUB PAGES

Contenido del paquete
---------------------
- index.html: página principal de consultorías.
- styles.css: diseño completo y adaptable a celular.
- app.js: menú, formularios y animaciones.
- CNAME: conecta el sitio con consultorias.limonettasingluten.com.ar.
- robots.txt y sitemap.xml: ayudan a los buscadores a recorrer el sitio.
- proyecto-limonetta.html: página especial para alianzas e inversión.
- logo-limonetta.png, favicon.png y og-consultorias.png: imágenes del sitio.

Cómo publicarlo
---------------
1. Crear un repositorio público nuevo en GitHub. Nombre sugerido:
   limonetta-consultorias
2. Subir TODO el contenido de esta carpeta, respetando las carpetas internas.
3. Confirmar la carga en la rama main.
4. Ir a Settings > Pages.
5. En Build and deployment elegir:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Guardar y esperar la publicación.
7. En Cloudflare, crear un registro DNS:
   - Tipo: CNAME
   - Nombre: consultorias
   - Destino: limonettasingluten.github.io
8. Volver a GitHub Pages y verificar que Custom domain muestre:
   consultorias.limonettasingluten.com.ar
9. Activar Enforce HTTPS cuando GitHub lo permita.

Importante
----------
- No modificar el CNAME.
- No subir el archivo ZIP dentro del repositorio: subir sus archivos descomprimidos.
- La web principal limonettasingluten.com.ar no se reemplaza ni se modifica.
- Revisar autorización antes de agregar logotipos o fotografías de empresas.
