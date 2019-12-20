import React, { useState } from 'react'
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

story.add('Default', () => {
  const [email, setEmail] = useState('')
  return (
    <StyledNewsletter title={TITLE} description={DESCRIPTION} caption={CAPTION}>
      <Newsletter.Input id="email" placeholder="Email..." value={email} onChange={setEmail} />
      <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
        Subscribe
      </Newsletter.Button>
    </StyledNewsletter>
  )
})

story.add('Without caption', () => {
  const [email, setEmail] = useState('')
  return (
    <StyledNewsletter title={TITLE} description={DESCRIPTION}>
      <Newsletter.Input id="email" placeholder="Email..." value={email} onChange={setEmail} />
      <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
        Subscribe
      </Newsletter.Button>
    </StyledNewsletter>
  )
})

story.add('Without description', () => {
  const [email, setEmail] = useState('')
  return (
    <StyledNewsletter title={TITLE} caption={CAPTION}>
      <Newsletter.Input id="email" placeholder="Email..." value={email} onChange={setEmail} />
      <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
        Subscribe
      </Newsletter.Button>
    </StyledNewsletter>
  )
})

story.add('With just a title', () => {
  const [email, setEmail] = useState('')
  return (
    <StyledNewsletter title={TITLE}>
      <Newsletter.Input id="email" placeholder="Email..." value={email} onChange={setEmail} />
      <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
        Subscribe
      </Newsletter.Button>
    </StyledNewsletter>
  )
})

story.add('With your own controls components', () => {
  const [email, setEmail] = useState('')
  return (
    <StyledNewsletter title={TITLE}>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={() => console.log('Thanks for subscribing!')}>Subscribe</button>
    </StyledNewsletter>
  )
})

const ExtendedNewsletter = styled(Newsletter)`
  padding: 48px;
  background-color: green;
  box-shadow: 2px 2px 2px 2px grey;
  * {
    color: white;
  }
  input {
    color: black;
  }
`

const ExtendedInput = styled(Newsletter.Input)`
  margin-right: 24px;
`

const ExtendedButton = styled(Newsletter.Button)`
  color: blue;
  background-color: blue;
`

story.add(
  'Extended',
  () => {
    const [email, setEmail] = useState('')
    return (
      <ExtendedNewsletter title={TITLE} description={DESCRIPTION} caption={CAPTION}>
        <ExtendedInput id="email" placeholder="Email..." value={email} onChange={setEmail} />
        <ExtendedButton onClick={() => console.log('Thanks for subscribing!')}>
          Subscribe
        </ExtendedButton>
      </ExtendedNewsletter>
    )
  },
  { info: 'This `Newsletter` component was extended using `styled()` from styled-components.' },
)

const info = `
See also:
- [Newsletter.Input](/?path=/story/components-newsletter-input--api)
- [Newsletter.Button](/?path=/story/components-newsletter-button--api)
`
createApiStory(story, BaseNewsletter, info)
