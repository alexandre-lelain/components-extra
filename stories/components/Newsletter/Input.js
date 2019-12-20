import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'
import Newsletter from 'components/Newsletter'

const story = storiesOf('Components|Newsletter/Input', module)

const info = `
Has to be used in a \`<Newsletter>\` component.
You can use all the props available in the Material-ui's \`TextField\`: https://material-ui.com/api/text-field/.
`

story.add(
  'Default',
  () => {
    const [email, setEmail] = useState('')
    return <Newsletter.Input id="email" placeholder="Email..." value={email} onChange={setEmail} />
  },
  { info },
)

story.add(
  'With various props',
  () => {
    const [email, setEmail] = useState('')
    return (
      <Newsletter.Input
        id="email"
        placeholder="components-extra@gmail.com"
        value={email}
        onChange={setEmail}
        variant="filled"
        label="Email"
      />
    )
  },
  { info },
)

story.add(
  'In error state',
  () => {
    const [email, setEmail] = useState('')
    return (
      <Newsletter.Input
        error
        id="email"
        placeholder="components-extra@gmail.com"
        value={email}
        onChange={setEmail}
      />
    )
  },
  { info },
)

const ExtendedInput = styled(Newsletter.Input)`
  * {
    color: green;
  }
`

story.add(
  'Extended',
  () => {
    const [email, setEmail] = useState('')
    return (
      <ExtendedInput
        id="email"
        placeholder="components-extra@gmail.com"
        value={email}
        onChange={setEmail}
      />
    )
  },
  {
    info:
      info +
      '\nThis `Newsletter.Input` component was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, Newsletter.Input.target, info)
