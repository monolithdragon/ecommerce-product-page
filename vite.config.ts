/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types='vitest' />
/// <reference types='@svgx/vite-plugin-react' />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
const { EsLinter, linterPlugin } = EsLint;
import svgx from "@svgx/vite-plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async (configEnv) => ({
  base: '/ecommerce-product-page',
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    svgx({
      defaultImport: 'component'
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/jest-setup.ts'],
  }
}));
