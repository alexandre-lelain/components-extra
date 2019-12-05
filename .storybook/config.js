import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { withThemeProvider } from './decorators'
import parameters, { infoConfig } from './parameters'

const loadIntroductionStories = () => {
  const req = require.context('../stories/introduction', true, /GetStarted*\.js$/)
  req.keys().forEach(filename => req(filename))
}

const loadOtherStories = () => {
  const req = require.context('../stories', true, /\.*\.js$/)
  req.keys().forEach(filename => req(filename))
}

const loadStories = () => {
  loadIntroductionStories()
  loadOtherStories()
}

addParameters(parameters)
configure(loadStories, module)
addDecorator(withInfo(infoConfig))
addDecorator(withThemeProvider)
