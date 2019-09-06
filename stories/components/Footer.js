import React from 'react'
import { storiesOf } from '@storybook/react'

import { Footer } from 'components/Footer'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|Footer', module)

story.add('Default', () => (
  <Footer image="//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg" title="Awesome footer" />
))

createApiStory(story, Footer)
