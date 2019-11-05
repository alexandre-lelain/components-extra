import React from 'react'
import ReactMarkdown from 'react-markdown'
import { storiesOf } from '@storybook/react'

import Container from './components/Container'

const content = `
# Customization

## Bring your own theme!
You can totally override the default **theme**. By default, the components use the
following [custom theme](https://components-extra.netlify.com/?path=/story/theme--default).
This default theme is applied on top of the [material-ui](https://material-ui.com/customization/theming/) one.

You can override this theme with the prop \`theme\` of the \`StyledProvider\` component
mentionned above.

Say, for example, you want to override the 2 main palette colors to have this:

\`\`\`js
// YourTheme.js
export default {
  palette: {
    primary: {
      main: '#0000cc',
    },
    secondary: {
      main: '#ff471a',
    },
  },
}
\`\`\`

You can apply it this way:

\`\`\`js
// index.js
import { BackToTop, StyledProvider } from 'components-extra'
import yourTheme from './YourTheme'

const App = () => {

  return (
    <StyledProvider theme={yourTheme}>
      <BackToTop />
    </StyledProvider>
  )
}
\`\`\`

## Extend the components

All the **components-extra** are exported as [styled-components](styled-components.com), so you can extend them, and
use them as styled selectors.


For example, to extend the **BackToTop** component:

\`\`\`js
import { BackToTop, StyledProvider } from 'components-extra'
import styled from 'styled-components'

const CustomBackToTop = styled(BackToTop)\`
  opacity: 0.5;
\`

const App = () => {

  return (
    <StyledProvider>
      <CustomBackToTop />
    </StyledProvider>
  )
}
\`\`\`

Or to use it as a styled selector:

\`\`\`js
import { BackToTop, StyledProvider } from 'components-extra'
import styled from 'styled-components'

const Container = styled.div\`
  \${BackToTop} {
    opacity: 0.5;
  }
\`

const App = () => {

  return (
    <StyledProvider>
      <Container>
        <BackToTop />
      </Container>
    </StyledProvider>
  )
}
\`\`\`
`

const Customization = () => {
  return (
    <Container>
      <ReactMarkdown source={content} />
    </Container>
  )
}

storiesOf('Introduction|Customization', module).add(
  'How to style the components',
  () => <Customization />,
  { info: { disable: true } },
)
