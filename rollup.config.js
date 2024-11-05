import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    // minifyHTML(),
    terser()
  ],
  external: ['lit']
};