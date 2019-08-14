import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { withThemeProvider } from './decorators'

function loadStories() {
  const req = require.context('../stories', true, /\.*\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withInfo)
addDecorator(withThemeProvider)
