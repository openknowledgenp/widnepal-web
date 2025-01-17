import { defineConfig } from 'vite';
import { ssg } from 'vite-plugin-ssr';

export default defineConfig({
  plugins: [ssg()],
  build: {
    outDir: 'dist',
  },
});
