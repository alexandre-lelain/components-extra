import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Typography } from '@material-ui/core'

import createApiStory from '../../helpers/createApiStory'
import Table from './Table'

import CookiesConsent, { BaseCookiesConsent } from 'components/CookiesConsent'

const story = storiesOf('Components|CookiesConsent', module)

const info = `
On desktop screens, the description of the category will be displayed beside the title.
On small screens, it will be displayed inside the content of the accordion.\n\n
`
const tableInfo = `
You can append any content to each **<CookiesConsent.Category>**, meaning you can bring
your own table component, or a list, or even a simple paragraph. Here, the **<YourTable>** component
is not included in **<CookiesConsent>**, it is a separate component for the sake of the demo.
`
const uncontrolledInfo = `
\n\nBy default, the Categories are uncontrolled. But you can also chose to control them with a *[checked, onChange]* set of props.
`
story.add(
  'Default',
  () => (
    <CookiesConsent title="Manage Cookies Preferences">
      <CookiesConsent.Category
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Controls switchLabel="All cookies">
        <CookiesConsent.Button>Cancel</CookiesConsent.Button>
        <CookiesConsent.Button>Confirm</CookiesConsent.Button>
      </CookiesConsent.Controls>
    </CookiesConsent>
  ),
  { info: info + tableInfo + uncontrolledInfo },
)

story.add(
  'With text as content',
  () => (
    <CookiesConsent title="Manage Cookies Preferences">
      <CookiesConsent.Category
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
      >
        <Typography>
          This is a parapgraph explaining how great are those cookies. This is a parapgraph
          explaining how great are those cookies. This is a parapgraph explaining how great are
          those cookies. This is a parapgraph explaining how great are those cookies.
        </Typography>
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
      >
        <Typography>
          This is a parapgraph explaining how great are those cookies. This is a parapgraph
          explaining how great are those cookies. This is a parapgraph explaining how great are
          those cookies. This is a parapgraph explaining how great are those cookies.
        </Typography>
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
      >
        <Typography>
          This is a parapgraph explaining how great are those cookies. This is a parapgraph
          explaining how great are those cookies. This is a parapgraph explaining how great are
          those cookies. This is a parapgraph explaining how great are those cookies.
        </Typography>
      </CookiesConsent.Category>
    </CookiesConsent>
  ),
  { info: info + uncontrolledInfo },
)

story.add(
  'In controlled mode',
  () => {
    const [cookies, setCookies] = React.useState({
      analytics: false,
      functional: true,
      tracking: false,
    })
    console.log({ cookies })
    return (
      <CookiesConsent title="Manage Cookies Preferences">
        <CookiesConsent.Category
          checked={cookies.analytics}
          description="Theses cookies help us to analyze what you are doing on our site"
          title="Analytics cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, analytics: checked }))}
        >
          <Typography>
            This is a parapgraph explaining how great are those cookies. This is a parapgraph
            explaining how great are those cookies. This is a parapgraph explaining how great are
            those cookies. This is a parapgraph explaining how great are those cookies.
          </Typography>
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.functional}
          description="Theses cookies enable us to offer you a personalized experience on our site"
          title="Functional cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, functional: checked }))}
        >
          <Typography>
            This is a parapgraph explaining how great are those cookies. This is a parapgraph
            explaining how great are those cookies. This is a parapgraph explaining how great are
            those cookies. This is a parapgraph explaining how great are those cookies.
          </Typography>
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.tracking}
          description="Theses cookies helps us to track you. You cannot escape!"
          title="Tracking cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, tracking: checked }))}
        >
          <Typography>
            This is a parapgraph explaining how great are those cookies. This is a parapgraph
            explaining how great are those cookies. This is a parapgraph explaining how great are
            those cookies. This is a parapgraph explaining how great are those cookies.
          </Typography>
        </CookiesConsent.Category>
      </CookiesConsent>
    )
  },
  { info: info + uncontrolledInfo },
)

const StyledCookiesConsent = styled(CookiesConsent)`
  width: 60%;
`

story.add(
  'In a small container',
  () => (
    <StyledCookiesConsent title="Manage Cookies Preferences">
      <CookiesConsent.Category
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
      >
        <Table />
      </CookiesConsent.Category>
    </StyledCookiesConsent>
  ),
  { info: info + tableInfo + uncontrolledInfo },
)

story.add(
  'Without any title',
  () => (
    <CookiesConsent>
      <CookiesConsent.Category
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
      >
        <Table />
      </CookiesConsent.Category>
    </CookiesConsent>
  ),
  { info: info + tableInfo + uncontrolledInfo },
)

const apiInfo = `
See also:
- [CookiesConsent.Category](/?path=/story/components-cookiesconsent-category--api)
`
createApiStory(story, BaseCookiesConsent, apiInfo)
