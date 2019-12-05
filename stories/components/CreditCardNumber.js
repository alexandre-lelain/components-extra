import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import CreditCardNumber, { BaseCreditCardNumber } from 'components/CreditCardNumber'
import createApiStory from '../helpers/createApiStory'

const story = storiesOf('Components|CreditCardNumber', module)

story.add('Default', () => (
  <CreditCardNumber id="card-number" onChange={() => console.log('onChange')} />
))

story.add(
  'With value validation',
  () => {
    const [value, setValue] = useState('')
    const [isError, setError] = useState(false)

    useEffect(() => {
      setError(!isValueValid(value))
    }, [setError, value])

    const isValueValid = value => {
      const regex = RegExp(/[\D]+/)
      return value === '' || !regex.test(value)
    }

    return <CreditCardNumber error={isError} id="card-number" onChange={setValue} />
  },
  {
    info: `Here, the value validation is happening in the parent component. The error will be triggered
if the card number contains a character that is not a digit.`,
  },
)

story.add('Disabled', () => (
  <CreditCardNumber id="card-number" onChange={() => console.log('onChange')} disabled />
))

const StyledInput = styled(CreditCardNumber)`
  background-color: #3377ff;
  color: #e6e6e6;
`

story.add(
  'Extended',
  () => <StyledInput id="card-number" onChange={() => console.log('onChange')} />,
  {
    info:
      'This `CreditCardNumber` component was extended using styled(CreditCardNumber) from styled-components.',
  },
)

const info = `
The \`CreditCardNumber\` component is built on top of Material-UI's \`OutlinedInput\`, so
in addition to the **props** visible in the API story of the component,
you can also use all the available props of the \`OutlinedInput\` component. Its API is
available here: https://material-ui.com/api/outlined-input/.
`
createApiStory(story, BaseCreditCardNumber, info)
