import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambia esto por tu dominio real cuando lo tengas
  site: 'https://domingoenellaboratorio.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true }
  }
});
