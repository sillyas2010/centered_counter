import { defineConfig } from 'vite';

import { configDefaults } from 'vitest/config';

export default defineConfig({
  base: '/centered_counter/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  test: {
    coverage: {
      include: ['src'],
      exclude: ['src/main.ts'],
    },
    exclude: [...configDefaults.exclude, 'src/e2e'],
  },
});
