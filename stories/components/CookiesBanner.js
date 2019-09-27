import React from 'react'
import { storiesOf } from '@storybook/react'

import { CookiesBanner } from 'components/CookiesBanner'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|CookiesBanner', module)

story.add('Default', () => <CookiesBanner />)

createApiStory(story, CookiesBanner)
