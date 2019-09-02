import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import PropsTable from './components/PropsTable'

import { withThemeProvider } from './decorators'
import parameters from './parameters'

function loadStories() {
  const req = require.context('../stories', true, /\.*\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters(parameters)
configure(loadStories, module)
addDecorator(
  withInfo({
    header: true,
    TableComponent: PropsTable,
    propTables: null,
  }),
)
addDecorator(withThemeProvider)
