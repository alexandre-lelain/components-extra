import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from 'components/Paragraph'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|Paragraph', module)

story.add('Default', () => (
  <Paragraph>
    This is an awesome paragraph. It is based on the awesome material-ui Typography component. Its
    default variant is 'body2', and it has a maximal width of 650px. According to awesome studies,
    it is the range where the eye feels the most comfortable reading. In addition to its variant,
    you can of course use all the material-ui Typography component's props.
  </Paragraph>
))

createApiStory(story, Paragraph)
