// vite.config.js
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

const repoName = 'widnepal-web';
const folderName = 'conference';

export default defineConfig({
  plugins: [preact()],
  base: `/${repoName}/${folderName}/`,
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
