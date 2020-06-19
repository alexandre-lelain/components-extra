import React from 'react'
import styled from 'styled-components'

import { Newsletter } from 'components-extra'

const StyledNewsletter = styled(Newsletter)`
  padding: 48px;
  background-color: #3377ff;
  box-shadow: 2px 2px 2px 2px grey;
  * {
    color: white;
  }
  input {
    color: black;
  }
`

const StyledInput = styled(Newsletter.Input)`
  margin-right: 24px;
`

const StyledButton = styled(Newsletter.Button)`
  color: blue;
  background-color: grey;
`

export const ExtendedNewsletter: JSX.Element = () => {
  const [email, setEmail] = React.useState('')
  return (
    <StyledNewsletter
      title="Subscribe to our newsletter"
      description="Get exclusive offers every week!"
      caption="By subscribing, you agree to receive emails from us. Don't worry, we are not spamers :)"
    >
      <StyledInput id="email" placeholder="Email..." value={email} onChange={setEmail} />
      <StyledButton onClick={(): void => console.log('Thanks for subscribing!')}>Subscribe</StyledButton>
    </StyledNewsletter>
  )
}

export const ExtendedButton = styled(Newsletter.Button)`
  padding: 24px;
  background-color: #3377ff;
  &:hover {
    background-color: darkgrey;
  }
`

export const ExtendedInput = styled(Newsletter.Input)`
  * {
    color: #3377ff;
  }
`

export const ExtendedInputStory: JSX.Element = () => {
  const [email, setEmail] = React.useState('')

  return (
    <ExtendedInput
      id="email"
      value={email}
      onChange={setEmail}
      placeholder="components-extra@gmail.com"
    />
  )
}
