import { build } from 'esbuild';

const baseSettings = {
  entryPoints: {
    dom: './src/dom/index.ts',
    html: './src/html/index.ts',
  },
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['ES6'],
  outdir: 'dist',
};

build({
  ...baseSettings,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
});

build({
  ...baseSettings,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
});
