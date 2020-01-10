import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import createApiStory from '../../helpers/createApiStory'

import CookiesConsent, { BaseCookiesConsent } from 'components/CookiesConsent'

const story = storiesOf('Components|CookiesConsent', module)

const StyledCookiesConsent = styled(CookiesConsent)`
  width: 100%;
`
StyledCookiesConsent.displayName = 'CookiesConsent'

story.add('Default', () => (
  <StyledCookiesConsent title="Manage Cookies Preferences">
    <CookiesConsent.Category
      description="Theses cookies help us to analyze what you are doing on our site"
      title="Analytics cookies"
    >
      some content
    </CookiesConsent.Category>
    <CookiesConsent.Category
      description="Theses cookies enable us to offer you a personalized experience on our site"
      title="Functional cookies"
    >
      some content
    </CookiesConsent.Category>
    <CookiesConsent.Category
      description="Theses cookies helps us to track you. You cannot escape!"
      title="Tracking cookies"
    >
      some content
    </CookiesConsent.Category>
  </StyledCookiesConsent>
))

createApiStory(story, BaseCookiesConsent)
