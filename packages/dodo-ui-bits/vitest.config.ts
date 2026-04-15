import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/lib/test/setup.ts'],
    exclude: ['node_modules', 'dist', '.svelte-kit', 'build', '.output'],
  },
});
