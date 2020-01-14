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

You can append any content to each **<CookiesConsent.Category>**, meaning you can bring
your own table component, or a list, or even a simple paragraph. Here, the **<YourTable>** component
is not included in **<CookiesConsent>**, it is a separate component for the sake of the demo.

\n\nBy default, the Categories are uncontrolled. But you can also chose to control 
them with a *[checked, onChange]* set of props.
`
story.add(
  'Default',
  () => {
    const [cookies, setCookies] = React.useState({
      analytics: false,
      functional: true,
      tracking: false,
    })

    const toggleAll = isOn =>
      setCookies({
        analytics: isOn,
        functional: isOn,
        tracking: isOn,
      })

    return (
      <CookiesConsent title="Manage Cookies Preferences">
        <CookiesConsent.Category
          checked={cookies.analytics}
          description="Theses cookies help us to analyze what you are doing on our site"
          title="Analytics cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, analytics: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.functional}
          description="Theses cookies enable us to offer you a personalized experience on our site"
          title="Functional cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, functional: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.tracking}
          description="Theses cookies helps us to track you. You cannot escape!"
          title="Tracking cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, tracking: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Controls switchLabel="All cookies" onChange={toggleAll}>
          <CookiesConsent.Button>Cancel</CookiesConsent.Button>
          <CookiesConsent.Button>Confirm</CookiesConsent.Button>
        </CookiesConsent.Controls>
      </CookiesConsent>
    )
  },
  { info },
)

story.add(
  'With text as content',
  () => {
    const [cookies, setCookies] = React.useState({
      analytics: false,
      functional: true,
      tracking: false,
    })

    const toggleAll = isOn =>
      setCookies({
        analytics: isOn,
        functional: isOn,
        tracking: isOn,
      })

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
        <CookiesConsent.Controls switchLabel="All cookies" onChange={toggleAll}>
          <CookiesConsent.Button>Cancel</CookiesConsent.Button>
          <CookiesConsent.Button>Confirm</CookiesConsent.Button>
        </CookiesConsent.Controls>
      </CookiesConsent>
    )
  },
  { info },
)

const StyledCookiesConsent = styled(CookiesConsent)`
  width: 60%;
`

story.add(
  'In a small container',
  () => {
    const [cookies, setCookies] = React.useState({
      analytics: false,
      functional: true,
      tracking: false,
    })

    const toggleAll = isOn =>
      setCookies({
        analytics: isOn,
        functional: isOn,
        tracking: isOn,
      })

    return (
      <StyledCookiesConsent title="Manage Cookies Preferences">
        <CookiesConsent.Category
          checked={cookies.analytics}
          description="Theses cookies help us to analyze what you are doing on our site"
          title="Analytics cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, analytics: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.functional}
          description="Theses cookies enable us to offer you a personalized experience on our site"
          title="Functional cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, functional: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Category
          checked={cookies.tracking}
          description="Theses cookies helps us to track you. You cannot escape!"
          title="Tracking cookies"
          onChange={checked => setCookies(cookies => ({ ...cookies, tracking: checked }))}
        >
          <Table />
        </CookiesConsent.Category>
        <CookiesConsent.Controls switchLabel="All cookies" onChange={toggleAll}>
          <CookiesConsent.Button>Cancel</CookiesConsent.Button>
          <CookiesConsent.Button>Confirm</CookiesConsent.Button>
        </CookiesConsent.Controls>
      </StyledCookiesConsent>
    )
  },
  { info },
)

story.add(
  'Without any controls',
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
    </CookiesConsent>
  ),
  { info },
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
  { info },
)

const ExtendedCookiesConsent = styled(CookiesConsent)`
  width: 50%;
  background-color: green;
`
const ExtendedCategory = styled(CookiesConsent.Category)`
  background-color: green;
  p {
    color: white;
  }
`
story.add(
  'Extended',
  () => (
    <ExtendedCookiesConsent title="Manage Cookies Preferences">
      <ExtendedCategory
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
      >
        <Table />
      </ExtendedCategory>
      <ExtendedCategory
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
      >
        <Table />
      </ExtendedCategory>
      <ExtendedCategory
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
      >
        <Table />
      </ExtendedCategory>
    </ExtendedCookiesConsent>
  ),
  { info: 'This `CookiesConsent` component was extended using `styled()` from styled-components.' },
)

const apiInfo = `
See also:
- [CookiesConsent.Category](/?path=/story/components-cookiesconsent-category--api)
- [CookiesConsent.Controls](/?path=/story/components-cookiesconsent-controls--api)
- [CookiesConsent.Button](/?path=/story/components-cookiesconsent-button--api)
`
createApiStory(story, BaseCookiesConsent, apiInfo)
