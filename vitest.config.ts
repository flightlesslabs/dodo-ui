import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/lib/test/setup.ts'],
    exclude: ['node_modules', 'dist', '.svelte-kit', 'build', '.output'],
  },
  resolve: {
    alias: {
      $app: path.resolve('./src/lib/test/mock-app'), // 👈 fake SvelteKit runtime
    },
  },
});
