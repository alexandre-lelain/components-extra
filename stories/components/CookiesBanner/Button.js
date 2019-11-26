import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CookiesBanner from 'components/CookiesBanner'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|CookiesBanner/Button', module)

const info = `
Has to be used inside a **<CookiesBanner>** component. 
You can use all the props available in the Material-ui's Button: https://material-ui.com/api/button/.
`

const ExtendedButton = styled(CookiesBanner.Button)`
  background-color: green;
  color: white;
  border-radius: 32px;
`

story.add(
  'Default',
  () => <CookiesBanner.Button onClick={action('onClick')}>I agree</CookiesBanner.Button>,
  { info },
)

story.add(
  'As a link',
  () => <CookiesBanner.Button href="#">More Information</CookiesBanner.Button>,
  { info },
)

story.add(
  'With various props',
  () => (
    <CookiesBanner.Button
      color="primary"
      onClick={action('onClick')}
      size="large"
      endIcon={<p>:)</p>}
    >
      This might be too big
    </CookiesBanner.Button>
  ),
  { info },
)

story.add(
  'Extended',
  () => <ExtendedButton onClick={action('onClick')}>Extended Button</ExtendedButton>,
  { info: info + '\n This Button was extended using styled() from styled-components.' },
)

createApiStory(story, CookiesBanner.Button.target)
