import { defineConfig } from 'astro/config';
import astro from '@astrojs/node';

export default defineConfig({
  site: 'https://lordsevatarch.github.io',
  base: '/PortfolioCh', // Nombre exacto de tu repositorio
  integrations: [astro({
    mode: 'standalone'
  })],
  outDir: './dist'
});
