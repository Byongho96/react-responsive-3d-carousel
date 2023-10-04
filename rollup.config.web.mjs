import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

import url from '@rollup/plugin-url'
import copy from 'rollup-plugin-copy'
import replace from 'rollup-plugin-replace'

export default [
  {
    input: 'web/src/index.jsx',
    output: {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },

    plugins: [
      commonjs(),
      nodeResolve(),
      typescript(),
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),

      postcss({
        extract: true,
        plugins: [autoprefixer()],
      }),

      url(),
      copy({
        targets: [{ src: 'web/public/**', dest: 'dist/' }],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  },
]
