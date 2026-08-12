# Que hacer con esta carpeta

## 1. Descomprime y sustituye

Descomprime el zip y **sustituye toda tu carpeta astro-site** por esta.
Si prefieres no perder la vieja, renombrala antes a \`astro-site-antigua\`.

## 2. Arregla los nombres de carpeta

Los corchetes no sobreviven al zip. Click derecho en **renombrar.ps1** y
*Ejecutar con PowerShell*. Si Windows se queja del permiso, abre PowerShell
dentro de la carpeta y pega:

\`\`\`
powershell -ExecutionPolicy Bypass -File .\renombrar.ps1
\`\`\`

## 3. Miralo

\`\`\`
npm install
npm run dev
\`\`\`

Abre localhost:4321. Ctrl+C para parar.

## 4. Subelo

Con GitHub Desktop: escribes una frase y pulsas **Commit** y luego **Push**.
Netlify republica sola en dos minutos.

---

## Que hay de nuevo

- **Diseno oscuro** sobre azul #1b3a6b. Tus comics e infografias van sin marco,
  sobre sombra suave, con su proporcion real: nada se recorta.
- **Ocho entradas**, cada una en espanol y en ingles.
  - Los textos reales de tus cuatro entradas de Wix, con firma, minutos y bibliografia enlazada.
  - Los tres comics de biomateriales y la infografia de resistencia antimicrobiana,
    publicados solo con la imagen.
- **La web lee los PDF sola.** Un comic de cuatro paginas se muestra como cuatro paginas,
  y hay un boton para verlas en columna o pagina a pagina. Tu subes el PDF y ya esta.
- **Sobre mi** reescrito, en las dos lenguas.
- **Boton de contacto** a tu correo, y Twitter y LinkedIn en el pie.
- **Panel de publicacion** en /admin. Lee COMO-PUBLICAR.md.
- **Favicon** provisional (un matraz). Si me pasas tu logo en alta, lo cambio.

## Una cosa que falta

1. **La fecha de la infografia de resistencia antimicrobiana** la he puesto al
   1 de noviembre de 2025 porque no me la diste. Cambiala en el panel.
