import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import path from 'path';
import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./lib'],
    }),
    copy({
      targets: [{ src: 'src/assets', dest: 'lib' }],
    }),
    url({
      sourceDir: path.join(__dirname, 'src'),
      desrDir: path.join(__dirname, 'lib'),
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
