import path, { join } from 'path'
import fs from 'fs'
import { readdirSync } from 'fs-extra'

import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"
import { terser } from 'rollup-plugin-terser'

const COMPONENTS_DIRECTORY = 'src/components'
const INDEX_FILE = 'index.js'
const LIB_NAME = 'components-extra'

const removeExt = path => path.replace(/\.[^.]+$/, '')

const componentsEntries = readdirSync(COMPONENTS_DIRECTORY).reduce((components, filename) => {
  const path = join(COMPONENTS_DIRECTORY, filename)
  return fs.existsSync(join(path, INDEX_FILE)) ? {
    [removeExt(filename)]: join(path, INDEX_FILE),
    ...components,
  } : { ...components }
}, {})

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
}

const plugins = [
  alias({
    resolve: ['.js', '/index.js'],
    entries: [
      { find: 'theme', replacement: path.resolve(__dirname, './src/theme') },
      { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
    ],
  }),
  babel({ exclude: /node_modules/ }),
  commonjs({ 
    include: /node_modules/,
    namedExports: {
      'react-is': ['ForwardRef'],
      'prop-types': ['elementType'],
    }
  }),
  peerDepsExternal(),
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  resolve({ 
    extensions: ['.js'],
    preferBuiltins: false 
  }),
]

const old_build = {
  input: 'src/index.js',
  output: {
    file: 'build/umd/components-extra.min.js',
    format: 'umd',
    name: LIB_NAME,
    esModule: false,
    globals,
  },
  plugins: [
    ...plugins,
    sizeSnapshot(),
    terser(),
  ],
}

const modern_build = {
  input: {
    index: 'src/index.js',
    ...componentsEntries,
  },
  output: {
    dir: 'build/esm',
    format: 'esm',
    name: LIB_NAME,
    globals,
  },
  plugins,
}

export default [
  { ...old_build }, 
  { ...modern_build },
]