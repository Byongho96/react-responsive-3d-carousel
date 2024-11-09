import del from 'rollup-plugin-delete'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import url from '@rollup/plugin-url'
import terser from '@rollup/plugin-terser'
import gzipPlugin from 'rollup-plugin-gzip'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
// import dts from 'rollup-plugin-dts'

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
      del({ targets: 'dist/*' , runOnce: true }),
      nodeResolve(),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      url({
        include: ['**/*.png', '**/*.jpg', '**/*.webp', '**/*.mp4', '**/*.webm'],
        limit: 0,
        name: 'assets/[name]-[hash][extname]',
      }),
      postcss({
        extensions: ['.css', '.scss', '.sass'],
        plugins: [autoprefixer()],
        extract: 'styles.css',
        use: ['sass']
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.min.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.min.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      url({
        include: ['**/*.png', '**/*.jpg', '**/*.webp', '**/*.mp4', '**/*.webm'],
        limit: 0,
        name: 'assets/[name]-[hash][extname]',
      }),
      terser(),
      postcss({
        extensions: ['.css', '.scss', '.sass'],
        plugins: [autoprefixer()],
        minimize: true,
        use: ['sass']
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.min.js.gz',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.min.js.gz',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      url({
        include: ['**/*.png', '**/*.jpg', '**/*.webp', '**/*.mp4', '**/*.webm'],
        limit: 0,
        name: 'assets/[name]-[hash][extname]',
      }),
      terser(),
      gzipPlugin(),
      postcss({
        extensions: ['.css', '.scss', '.sass'],
        plugins: [autoprefixer()],
        minimize: true,
        use: ['sass']
      }),
    ],
  },
]
