import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '@material-ui/core'
import { action } from '@storybook/addon-actions'

import { Paragraph } from 'components/Paragraph'
import { CreditCardNumber } from 'components/CreditCardNumber'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|CreditCardNumber', module)

story.add('Default', () => (
  <>
    <CreditCardNumber id="card-number" onChange={action('onChange')} />
  </>
))

story.add('With value validation', () => {
  const [value, setValue] = useState('')
  const [isError, setError] = useState(false)

  useEffect(() => {
    setError(!isValueValid(value))
  }, [setError, value])

  const isValueValid = value => {
    const regex = RegExp(/[\D]+/)
    return value === '' || !regex.test(value)
  }

  return (
    <>
      <Paragraph>
        Here, the value validation is happening in the parent component. The error will be triggered
        if the card number contains a character that is not a digit.
      </Paragraph>
      <br />
      <CreditCardNumber error={isError} id="card-number" onChange={setValue} />
    </>
  )
})

story.add('Disabled', () => (
  <>
    <CreditCardNumber id="card-number" onChange={action('onChange')} disabled />
  </>
))

story.add('Note', () => (
  <Paragraph>
    The <b>CreditCardNumber</b> component is built on top of Material-UI's <b>OutlinedInput</b>, so
    in addition to the
    <b> props</b> visible in the{' '}
    <Link href="/?path=/story/components-creditcardnumber--api">API story</Link> of the component,
    you can also use all the available props of the
    <b> OutlinedInput</b> component. Its API is{' '}
    <Link href="https://material-ui.com/api/outlined-input/" target="_blank">
      available here.
    </Link>
  </Paragraph>
))

createApiStory(story, CreditCardNumber)
