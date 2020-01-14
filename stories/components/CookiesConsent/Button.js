import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import CookiesConsent from 'components/CookiesConsent'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|CookiesConsent/Button', module)

const info = `
Has to be used inside a \`<CookiesConsent.Controls>\` component. 
You can use all the props available in the Material-ui's \`Button\`: https://material-ui.com/api/button/.
`

const ExtendedButton = styled(CookiesConsent.Button)`
  background-color: green;
  color: white;
  border-radius: 32px;
`

story.add(
  'Default',
  () => (
    <CookiesConsent.Button onClick={() => console.log('onClick')}>Confirm</CookiesConsent.Button>
  ),
  { info },
)

story.add(
  'As a link',
  () => <CookiesConsent.Button href="#">More Information</CookiesConsent.Button>,
  { info },
)

story.add(
  'With various props',
  () => (
    <CookiesConsent.Button
      color="primary"
      onClick={() => console.log('onClick')}
      size="large"
      endIcon={<p>:)</p>}
    >
      This might be too big
    </CookiesConsent.Button>
  ),
  { info },
)

story.add(
  'Extended',
  () => <ExtendedButton onClick={() => console.log('onClick')}>Extended Button</ExtendedButton>,
  { info: info + '\n This `Button` was extended using styled() from styled-components.' },
)

createApiStory(story, CookiesConsent.Button.target, info)
