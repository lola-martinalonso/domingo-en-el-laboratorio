# Cómo poner el sitio en marcha

Sitio: **Astro** (genera HTML estático) + **Netlify** (lo publica gratis).
Bilingüe ES/EN, mosaico que respeta A4 / A3 / cuadrado / vertical / panorámico.

---

## PASO 0 — Renombrar dos archivos (importante, 1 minuto)

Al descargar el proyecto verás estas dos rutas con guiones:

```
src/pages/-lang-/index.astro
src/pages/-lang-/blog/-slug-.astro
```

Renómbralas a corchetes (Astro los necesita así):

```
src/pages/[lang]/index.astro
src/pages/[lang]/blog/[slug].astro
```

Es decir: la carpeta `-lang-` pasa a llamarse `[lang]`, y el archivo `-slug-.astro` pasa a `[slug].astro`. Se renombra como cualquier carpeta del ordenador.

---

## PASO 1 — Instalar Node.js

1. Entra en **nodejs.org** y descarga la versión **LTS**.
2. Instálala dándole a siguiente. No hay que configurar nada.

No hace falta "crearse una cuenta en Astro": Astro no es un servicio, es un programa que se instala dentro de la carpeta del proyecto. Cuentas solo necesitas dos: GitHub y Netlify.

---

## PASO 2 — Verlo en tu ordenador

Abre la Terminal (Mac: Terminal · Windows: PowerShell) y escribe, una línea cada vez:

```bash
cd ruta/donde/tengas/astro-site
npm install
npm run dev
```

Te dará una dirección tipo `http://localhost:4321`. Ábrela en el navegador: ahí está tu sitio. Mientras `npm run dev` esté funcionando, cada cambio que guardes se ve al instante.

Para pararlo: `Ctrl + C` en la terminal.

---

## PASO 3 — Cuenta de GitHub y subir el proyecto

GitHub es donde vive el proyecto. Netlify lo lee de ahí y publica solo.

1. Créate una cuenta en **github.com** (gratis).
2. Descarga **GitHub Desktop** (desktop.github.com) — así no tocas comandos raros.
3. En GitHub Desktop: *File → Add Local Repository* → elige la carpeta `astro-site`.
4. Te dirá que no es un repositorio: pulsa **create a repository**.
5. Abajo a la izquierda escribe un resumen ("primera versión") y pulsa **Commit**.
6. Arriba, pulsa **Publish repository**. Puedes dejarlo privado.

---

## PASO 4 — Cuenta de Netlify y publicar

1. Entra en **netlify.com** → *Sign up* → elige **GitHub** para registrarte (así ya quedan conectados).
2. Dentro: *Add new site → Import an existing project → GitHub*.
3. Autoriza y elige tu repositorio `astro-site`.
4. Netlify detecta Astro solo. Deberías ver:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Pulsa **Deploy**. En un par de minutos tienes una dirección tipo `algo-random.netlify.app`.

A partir de aquí: **cada vez que hagas Commit + Push en GitHub Desktop, la web se actualiza sola.** No hay que subir nada a mano nunca más.

---

## PASO 5 — Tu dominio

1. Compra el dominio (Namecheap, Porkbun o Netlify mismo). ~12 €/año.
2. En Netlify: *Domain management → Add a domain* y sigue las instrucciones.
3. El HTTPS (candadito) lo pone Netlify solo, gratis.
4. En `astro-site/astro.config.mjs`, cambia la línea `site:` por tu dominio real.

---

## PASO 6 — No perder lo que ya tienes en Wix

El archivo `public/_redirects` manda las URLs viejas de Wix a las nuevas. Ya te he dejado tres puestas de ejemplo. Añade una línea por cada entrada que tengas publicada:

```
/blog/post/nombre-viejo   /es/blog/nombre-nuevo/   301
```

Esto solo funciona una vez tu dominio apunte a Netlify. Antes de apagar Wix, guárdate: los textos de todas las entradas, todas las imágenes en su tamaño original, y la lista de suscriptores del correo.
