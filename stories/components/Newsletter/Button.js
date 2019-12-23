import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'
import Newsletter from 'components/Newsletter'

const story = storiesOf('Components|Newsletter/Button', module)

const info = `
Has to be used in a \`<Newsletter>\` component.
You can use all the props available in the Material-ui's \`Button\`: https://material-ui.com/api/button/.
`

const StyledNewsletter = styled(Newsletter)``
StyledNewsletter.displayName = 'Newsletter'

story.add(
  'Default',
  () => (
    <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
      Subscribe
    </Newsletter.Button>
  ),
  { info },
)

story.add(
  'With various props',
  () => (
    <Newsletter.Button
      color="secondary"
      endIcon={<span>:)</span>}
      size="big"
      onClick={() => console.log('Thanks for subscribing!')}
    >
      Subscribe now
    </Newsletter.Button>
  ),
  { info },
)

const ExtendedButton = styled(Newsletter.Button)`
  padding: 24px;
  background-color: green;
  &:hover {
    background-color: blue;
  }
`

story.add(
  'Extended',
  () => (
    <ExtendedButton onClick={() => console.log('Thanks for subscribing!')}>
      Subscribe now
    </ExtendedButton>
  ),
  {
    info:
      info +
      '\nThis `Newsletter.Button` component was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, Newsletter.Button.target, info)
