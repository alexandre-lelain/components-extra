import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Table from './Table'
import createApiStory from '../../helpers/createApiStory'

import CookiesConsent from 'components/CookiesConsent'
import { Typography } from '@material-ui/core'

const story = storiesOf('Components|CookiesConsent/Category', module)

const info = `Has to be used inside a \`<CookiesConsent>\` component.\n`

story.add(
  'Default',
  () => {
    const [isOn, setIsOn] = React.useState(true)

    return (
      <CookiesConsent>
        <CookiesConsent.Category
          checked={isOn}
          description="Theses cookies help us to analyze what you are doing on our site"
          onChange={setIsOn}
          title="Analytics cookies"
        >
          <Table />
        </CookiesConsent.Category>
      </CookiesConsent>
    )
  },
  { info },
)

story.add(
  'With a paragraph as content',
  () => (
    <CookiesConsent>
      <CookiesConsent.Category
        title="Analytics cookies"
        description="Theses cookies help us to analyze what you are doing on our site"
      >
        <Typography>
          This is a paragprah about the category. This is a paragprah about the category. This is a
          paragprah about the category.
        </Typography>
        <Typography>
          This is a paragprah about the category. This is a paragprah about the category. This is a
          paragprah about the category.
        </Typography>
      </CookiesConsent.Category>
    </CookiesConsent>
  ),
  { info },
)

story.add(
  'Without description',
  () => (
    <CookiesConsent>
      <CookiesConsent.Category title="Analytics cookies">
        <Table />
      </CookiesConsent.Category>
    </CookiesConsent>
  ),
  { info },
)

const ExtendedCategory = styled(CookiesConsent.Category)`
  background-color: green;
  padding: 24px;
  p {
    color: white;
  }
`
story.add(
  'Extended',
  () => (
    <CookiesConsent>
      <ExtendedCategory
        title="Analytics cookies"
        description="Theses cookies help us to analyze what you are doing on our site"
      >
        <Table />
      </ExtendedCategory>
    </CookiesConsent>
  ),
  {
    info:
      info +
      'This `CookiesConsent.Category` component was extended using `styled()` from styled-components.',
  },
)

const apiInfo =
  info +
  `
You can use all the props available in the Material-ui’s ExpansionPanel: https://material-ui.com/api/expansion-panel/.
`
createApiStory(story, CookiesConsent.Category.target, apiInfo)
