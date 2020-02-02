import packageInfo from '../package.json'

export default {
  title: 'Components-extra - v'+packageInfo.version,
  description: 'React UI molecule components based on styled-components & material-ui.',
  menu: ['Introduction', 'Components', 'Utils', 'Customization', 'Examples', 'FAQ'],
  ignore: ['README.md', 'CHANGELOG.md', 'LICENSE', 'build/**', 'build', 'node_modules'],
  dest: 'docs-build',
  themeConfig: {
    showPlaygroundEditor: false,
  }
}