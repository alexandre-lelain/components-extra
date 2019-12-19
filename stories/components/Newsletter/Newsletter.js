import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'
import Newsletter, { BaseNewsletter } from 'components/Newsletter'

const story = storiesOf('Components|Newsletter', module)

const TITLE = 'Subscribe to our newsletter'
const DESCRIPTION = 'Get exclusive offers every week!'
const CAPTION =
  "By subscribing, you agree to receive emails from us. Don't worry, we are not spamers :)"

const StyledNewsletter = styled(Newsletter)``
StyledNewsletter.displayName = 'Newsletter'

story.add('Default', () => (
  <StyledNewsletter title={TITLE} description={DESCRIPTION} caption={CAPTION}>
    <Newsletter.Input />
    <Newsletter.Button>Subscribe</Newsletter.Button>
  </StyledNewsletter>
))

createApiStory(story, BaseNewsletter)
