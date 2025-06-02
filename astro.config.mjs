import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  site: 'https://bullcast.com',
  integrations: [
    netlify({
      edgeMiddleware: false
    }),
    react(),
    sitemap(),
    prefetch()
  ],
  output: 'static',
  vite: {
    plugins: [
      tailwindcss(),
      viteCompression()
    ]
  },
  typescript: {
    strict: true
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});