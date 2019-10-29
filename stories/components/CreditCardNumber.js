import React from 'react'
import { storiesOf } from '@storybook/react'

import { CreditCardNumber } from 'components/CreditCardNumber'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|CreditCardNumber', module)

story.add('Default', () => (
  <>
    <CreditCardNumber
      id="card-number"
      onChange={value => console.log("Credit's card number:" + value)}
    />
  </>
))

story.add('With error', () => (
  <>
    <CreditCardNumber
      id="card-number"
      onChange={value => console.log("Credit's card number:" + value)}
    />
  </>
))

createApiStory(story, CreditCardNumber)
