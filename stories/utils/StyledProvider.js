import { storiesOf } from '@storybook/react'

import StyledProvider from 'components/StyledProvider'
import createApiStory from '../helpers/createApiStory'

const story = storiesOf('Utils|StyledProvider', module)

createApiStory(story, StyledProvider)
