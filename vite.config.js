import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  base: '/widnepal-web',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});