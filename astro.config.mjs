import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://bullcast.netlify.app',
  integrations: [
    netlify({
      edgeMiddleware: false
    }),
    react(),
    sitemap(),
    prefetch()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    }
  }
});