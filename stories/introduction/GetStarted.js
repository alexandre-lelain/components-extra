import React from 'react'
import ReactMarkdown from 'react-markdown'
import { storiesOf } from '@storybook/react'

import Container from './components/Container'

const content = `
## Getting started in only 2 steps

### Step 1

**components-extra** relies on both [material-ui theme](https://material-ui.com/customization/theming/) configuration
as well as the [styled-components](https://www.styled-components.com/docs/advanced) theming system.

So the first step consists into wrapping your web application in **components-extra**'s default theme provider **StyledProvider**:

\`\`\`js
import { StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <p>Simple, is it not ?</p>
    </StyledProvider>
  )
}
\`\`\`

Doing so will forward the **theme** object to all the children recursively. Not using this Provider above
the other components will result in an JS error.

### Step 2

Import the component you want to use. For example, the **BackToTop** button:

\`\`\`js
import { BackToTop, StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <BackToTop />
    </StyledProvider>
  )
}
\`\`\`

And voilà! you're all set and ready to create your website's interface.
`

const GetStarted = () => {
  return (
    <Container>
      <ReactMarkdown source={content} />
    </Container>
  )
}

storiesOf('Introduction|Get started', module).add(
  'How to use components-extra',
  () => <GetStarted />,
  { info: { disable: true } },
)
