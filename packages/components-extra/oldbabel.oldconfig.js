// Configuration for dev mode (tests & stories).
if (process.env.BABEL_ENV === 'dev') {
  module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      ['@babel/plugin-transform-runtime', { useESModules: true }],
    ],
  }
}
// Configuration for build mode.
else {
  let defaultPresets = []
  if (['esm', 'es'].includes(process.env.BABEL_ENV)) {
    defaultPresets = []
  } else {
    defaultPresets = [
      [
        '@babel/preset-env',
        {
          modules: process.env.BABEL_ENV === 'production-umd' ? false : 'commonjs',
        },
      ],
    ]
  }

  const productionPlugins = [
    'babel-plugin-transform-react-constant-elements',
    ['babel-plugin-transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/esm/${member}',
          preventFullImport: true,
        },
      },
    ],
  ]

  const productionModernPlugins = [
    ...productionPlugins,
    ['@babel/plugin-transform-runtime', { useESModules: true }],
  ]

  module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-object-assign', // for IE 11 support
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            theme: './src/theme',
            utils: './src/utils',
            hooks: './src/hooks',
          },
        },
      ],
    ],
    ignore: [
      /@babel[\\|/]runtime/, // Fix a Windows issue.
      'src/utils-test/**',
      'src/**/*.test.js',
    ],
    env: {
      cjs: { plugins: productionPlugins },
      esm: { plugins: productionModernPlugins },
      es: { plugins: productionModernPlugins },
      'production-umd': { plugins: productionModernPlugins },
    },
  }
}