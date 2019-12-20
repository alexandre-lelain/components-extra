import path from 'path'

import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import externals from 'rollup-plugin-node-externals'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from '@rollup/plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"
import { terser } from 'rollup-plugin-terser'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  'react-is': 'reactIs,'
}

const plugins = [
  alias({
    resolve: ['.js', '/index.js'],
    entries: [
      { find: 'theme', replacement: path.resolve(__dirname, './src/theme') },
      { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
    ],
  }),
  babel({ exclude: /node_modules/, runtimeHelpers: true }),
  commonjs({ 
    include: /node_modules/,
    namedExports: {
      'prop-types': ['elementType'],
    }
  }),
  externals({
    include: 'react-is',
  }),
  peerDepsExternal(),
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  resolve({ 
    extensions: ['.js'],
    preferBuiltins: false 
  }),
  sizeSnapshot(),
  terser(),
]

export default {
  input: 'src/index.js',
  output: {
    file: 'build/umd/components-extra.min.js',
    format: 'umd',
    name: 'components-extra',
    esModule: false,
    globals,
  },
  plugins,
}