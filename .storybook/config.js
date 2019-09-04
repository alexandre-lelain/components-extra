import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { withThemeProvider } from './decorators'
import parameters, { infoConfig } from './parameters'

function loadStories() {
  const req = require.context('../stories', true, /\.*\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters(parameters)
configure(loadStories, module)
addDecorator(withInfo(infoConfig))
addDecorator(withThemeProvider)
