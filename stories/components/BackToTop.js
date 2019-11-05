import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import { BackToTop } from 'components/BackToTop'
import createApiStory from '../helpers/createApiStory'

const story = storiesOf('Components|BackToTop', module)

story.add('Default', () => (
  <>
    <Typography>Scroll down... ;) </Typography>
    <div style={{ height: '1800px' }}></div>
    <BackToTop />
  </>
))

createApiStory(story, BackToTop)
