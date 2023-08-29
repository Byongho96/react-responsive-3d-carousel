import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

import dts from 'rollup-plugin-dts'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
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
      commonjs(),
      nodeResolve(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
      postcss({
        plugins: [autoprefixer()],
      }),
    ],
  },
  {
    input: 'lib/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|s[ac]ss)$/],
  },
]
