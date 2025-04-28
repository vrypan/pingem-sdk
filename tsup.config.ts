import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'], // ESM, CommonJS, and browser IIFE bundle
  globalName: 'PingemSDK', // global window.PingemSDK when loaded via <script>
  sourcemap: true,
  clean: true,
  dts: true, // Generate .d.ts types
  target: 'esnext', // modern output
  minify: true,
});

