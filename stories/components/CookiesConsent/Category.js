import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'

import CookiesConsent from 'components/CookiesConsent'

const story = storiesOf('Components|CookiesConsent/Category', module)

story.add('Category in control mode', () => {
  const [isOn, setIsOn] = React.useState(true)

  return (
    <CookiesConsent title="Manage Cookies Preferences">
      <CookiesConsent.Category
        checked={isOn}
        description="Theses cookies help us to analyze what you are doing on our site"
        onChange={setIsOn}
        title="Analytics cookies"
      >
        some content
      </CookiesConsent.Category>
    </CookiesConsent>
  )
})

createApiStory(story, CookiesConsent.Category.target)
