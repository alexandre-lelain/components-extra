let config = {}
/*
 * Need to wrap in a try/catch as Docz is trying to require the package before 
 * being in .docz repo.
 */
try {
  const packageInfo = require('../package.json')

  config = {
    title: 'Components-extra - v'+packageInfo.version,
    description: 'React UI molecule components based on styled-components & material-ui.',
    menu: ['Introduction', 'Components', 'Utils', 'Customization', 'Examples', 'FAQ'],
    ignore: ['README.md', 'CHANGELOG.md', 'LICENSE', 'build/**', 'build', 'node_modules'],
    dest: 'docs-build',
    themeConfig: {
      showPlaygroundEditor: false,
    }
  }
} catch {}

export default config