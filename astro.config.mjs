import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://lordsevatarch.github.io/Portfolio.Ch',
  integrations: [github()],
  outDir: './dist'
});
