import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  globalName: 'PingemSDK',
  sourcemap: true,
  clean: true,
  dts: true,
  target: 'esnext',
  minify: true,
  outExtension({ format }) {
    if (format === 'esm') return { js: '.mjs' };
    if (format === 'cjs') return { js: '.cjs' };
    return { js: '.js' };
  },
});

