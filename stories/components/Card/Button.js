import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import Card from 'components/Card'

import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Card/Button', module)

const info = `
Has to be used in a <Card> component.
You can use all the props available in the Material-ui's Button: https://material-ui.com/api/button/.
`

const StyledButton = styled(Card.Button)`
  color: black;
  background-color: yellow;
  border-radius: 32px;
`

story.add(
  'Default',
  () => <Card.Button onClick={action('clicked')}>I'm a card button</Card.Button>,
  { info },
)

story.add('As a link', () => <Card.Button href="#">I'm a card link-button</Card.Button>, { info })

story.add(
  'Extended',
  () => <StyledButton onClick={action('clicked')}>I'm a card button extended</StyledButton>,
  { info: info + '\n This Button was extended using styled() from styled-components.' },
)

createApiStory(story, Card.Button.target)
