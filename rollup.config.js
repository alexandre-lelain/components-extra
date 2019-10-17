import path from 'path'
import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
}

const plugins = [
  alias({
    resolve: ['.js', '/index.js'],
    entries: [
      {find: 'theme', replacement: path.resolve(__dirname, './src/theme')},
      {find: 'utils', replacement: path.resolve(__dirname, './src/utils')},
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
  resolve({ 
    extensions: ['.js'],
    preferBuiltins: false 
  }),
  terser(),
]

const old_build = {
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

const modern_build = {
  input: 'src/index.js',
  output: {
    file: 'build/cjs/components-extra.js',
    format: 'cjs',
    name: 'components-extra',
    globals,
  },
  plugins,
}

export default { ...old_build, ...modern_build }