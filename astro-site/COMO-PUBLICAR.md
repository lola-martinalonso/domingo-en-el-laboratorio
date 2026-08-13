# Como publico una entrada nueva

Desde ahora tienes dos formas. La primera es la buena.

## Opcion A: el panel (sin ordenador, sin comandos)

Entra en **tudominio.com/admin** (o la direccion de Netlify + /admin), inicia sesion con tu
cuenta de GitHub y ya estas dentro. Funciona igual desde el movil.

1. Pulsa **New Entrada**.
2. Rellena titulo, descripcion, fecha, tipo de pieza, nivel y proporcion.
3. Arrastra la imagen (PNG/JPG) **o** sube el PDF. Si subes PDF, la web lo muestra
   pagina a pagina ella sola: no hay que partirlo.
4. Si quieres texto debajo de la pieza, escribelo en el ultimo campo.
5. **Publish**.

Netlify reconstruye la web sola en un par de minutos.

Para la version en ingles, repite en la coleccion **Posts in English** con el mismo
nombre de archivo. Si una entrada solo existe en un idioma, no pasa nada: se vera
solo en ese idioma.

### Antes de que el panel funcione (una sola vez)

En Netlify: **Site configuration - Access control - OAuth - Install provider - GitHub**.
Necesitas crear una GitHub OAuth App en
github.com/settings/developers con estos valores:

- Homepage URL: la direccion de tu web
- Authorization callback URL: \`https://api.netlify.com/auth/done\`

Copia el Client ID y el Client Secret en Netlify y listo. Es un tramite de cinco minutos
y no se repite nunca mas.

## Opcion B: a mano (si el panel se cae)

1. **Imagen o PDF** en \`public/images/\` o \`public/files/\`. Nombre sin espacios ni acentos.
2. **Texto**: copia cualquier \`.md\` de \`src/entradas/es/\`, renombralo (el nombre es la URL)
   y cambia la cabecera.
3. **Publicar**: en GitHub Desktop escribes una frase y pulsas Commit y Push.

## La cabecera, campo por campo

| Campo | Que es |
|---|---|
| \`title\` | El titulo. Los emoji valen. |
| \`description\` | Dos lineas. Sale en la portada y en Google. |
| \`date\` | Fecha en formato 2025-11-03. Ordena la portada. |
| \`updated\` | Opcional, si revisas una entrada vieja. |
| \`format\` | \`comic\`, \`infographic\` o \`article\`. Es el filtro de la portada. |
| \`level\` | \`curious\`, \`student\` o \`technical\`. |
| \`ratio\` | La forma real: \`a4v\`, \`a4h\`, \`a3v\`, \`a3h\`, \`sq\`, \`tall13\`, \`tall15\`, \`tall\`, \`wide\`. |
| \`minutes\` | Minutos de lectura. |
| \`tags\` | Etiquetas, entre corchetes. |
| \`cover\` | Ruta de la imagen: \`/images/algo.png\`. |
| \`pdf\` | Ruta del PDF: \`/files/algo.pdf\`. |
| \`draft\` | \`true\` la deja oculta. |

## Ver la web antes de publicar

\`\`\`
npm run dev
\`\`\`

y abre localhost:4321. Ctrl+C para pararlo.
