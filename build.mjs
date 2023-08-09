import { build } from 'esbuild';

const baseSettings = {
  entryPoints: {
    index: './src/index.ts',
    dom: './src/dom/index.ts',
    domReplacer: './src/dom/utils/domReplacer/index.ts',
    useReactive: './src/dom/uses/useReactive/index.ts',
    Reactivate: './src/dom/components/Reactivate/index.tsx',
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
