# Cómo publico una entrada nueva

Tres pasos: imagen → archivo de texto → publicar.

## 1. La imagen

Mete el cómic o la infografía en `public/images/`, con un nombre sin espacios ni acentos:

```
public/images/vidrio-liquido.png
```

Si quieres que se pueda descargar en alta resolución, mete también el PDF en `public/files/`.

## 2. El archivo de la entrada

Duplica cualquier `.md` de `src/content/es/` y renómbralo. El nombre del archivo **es** la dirección de la entrada:

`src/content/es/vidrio-liquido.md` → `tudominio.com/es/blog/vidrio-liquido/`

Dentro, la cabecera entre las dos líneas de `---`:

```yaml
---
title: "Por qué el vidrio es un líquido raro"
description: "Ni sólido del todo ni líquido del todo."
date: 2026-09-14
format: comic          # comic | infographic | article
level: curious         # curious | student | technical
ratio: sq              # la forma real de tu pieza
minutes: 3
tags: ["Vidrio"]
cover: /images/vidrio-liquido.png
pdf: /files/vidrio-liquido.pdf
---
```

Debajo de la cabecera escribes el texto normal. `## Título` hace un subtítulo, `**palabra**` la pone en negrita, `> frase` hace una cita destacada.

### Formatos disponibles en `ratio:`

| valor  | forma |
|--------|-------|
| `a4v`  | A4 vertical |
| `a4h`  | A4 horizontal |
| `a3v`  | A3 vertical |
| `a3h`  | A3 horizontal |
| `sq`   | cuadrado |
| `tall` | vertical largo (infografía de scroll) |
| `wide` | panorámico |

Si te falta una forma, añádela en `src/consts.js`.

### Lector viñeta a viñeta (opcional, para móvil)

Si además exportas las viñetas sueltas, añade:

```yaml
panels: ["/images/vidrio-1.png", "/images/vidrio-2.png", "/images/vidrio-3.png"]
```

Aparece solo el conmutador *Página completa / Viñeta a viñeta*.

## 3. Publicar

Abre GitHub Desktop → escribe un resumen → **Commit** → **Push**. En dos minutos está online.

---

## Cosas útiles

- **Guardar un borrador:** añade `draft: true` a la cabecera. No sale publicado.
- **Solo en español:** no crees el archivo en `src/content/en/`. Nada se rompe.
- **Cambiar textos del menú, botones o la sección "Sobre mí":** están todos en `src/i18n.js`, en español y en inglés.
- **Cambiar colores:** en `src/layouts/Base.astro`, arriba del bloque de estilos, en `:root`.
- **Ver cómo queda antes de publicar:** `npm run dev` en la terminal.
