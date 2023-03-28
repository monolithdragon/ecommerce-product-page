/// <reference types='vitest' />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  base: '/ecommerce-product-page',
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/jest-setup.ts'],
  }
}));
