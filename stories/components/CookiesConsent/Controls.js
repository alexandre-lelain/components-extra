import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'

import CookiesConsent from 'components/CookiesConsent'
import { Typography } from '@material-ui/core'

const story = storiesOf('Components|CookiesConsent/Controls', module)

const info = `Has to be used inside a \`<CookiesConsent>\` component.\n`

story.add(
  'Default',
  () => {
    const [isOn, setIsOn] = useState(false)

    return (
      <CookiesConsent>
        <CookiesConsent.Controls checked={isOn} onChange={setIsOn} switchLabel="All cookies">
          <CookiesConsent.Button>Cancel</CookiesConsent.Button>
          <CookiesConsent.Button>Confirm</CookiesConsent.Button>
        </CookiesConsent.Controls>
      </CookiesConsent>
    )
  },
  { info },
)

story.add(
  'No Switch',
  () => (
    <CookiesConsent>
      <CookiesConsent.Controls switchLabel="All cookies">
        <CookiesConsent.Button>Cancel</CookiesConsent.Button>
        <CookiesConsent.Button>Confirm</CookiesConsent.Button>
      </CookiesConsent.Controls>
    </CookiesConsent>
  ),
  { info },
)

story.add(
  'With your own controls',
  () => {
    const [isOn, setIsOn] = useState(false)

    return (
      <CookiesConsent>
        <CookiesConsent.Controls checked={isOn} onChange={setIsOn} switchLabel="All cookies">
          <Typography variant="body2">Some Text</Typography>
          <button style={{ marginLeft: '18px' }}>Confirm</button>
        </CookiesConsent.Controls>
      </CookiesConsent>
    )
  },
  { info },
)

const ExtendedControls = styled(CookiesConsent.Controls)`
  padding: 0px;
  margin-top: 24px;
  background-color: green;
  p {
    color: white;
  }
`

story.add(
  'Extended',
  () => {
    const [isOn, setIsOn] = useState(false)

    return (
      <CookiesConsent>
        <ExtendedControls checked={isOn} onChange={setIsOn} switchLabel="All cookies">
          <CookiesConsent.Button size="small">Cancel</CookiesConsent.Button>
          <CookiesConsent.Button size="small">Confirm</CookiesConsent.Button>
        </ExtendedControls>
      </CookiesConsent>
    )
  },
  {
    info:
      info +
      'This `CookiesConsent.Controls` component was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, CookiesConsent.Controls.target, info)
