import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://your-site.com',
  // outDir: '../dist/docs',
  publicDir: '../dist',
  build: {
    assets: '_assets'
  },
  integrations: [lit()]
});