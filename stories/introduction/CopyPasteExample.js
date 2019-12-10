import React from 'react'
import { storiesOf } from '@storybook/react'

import Preview from '../helpers/Preview'

const content = `
# Ready-to-go example of the \`CookiesBanner\` component

## If you have the \`StyledProvider\` at the root of your App
// Example.js

\`\`\`jsx
import React from 'react'
import { CookiesBanner } from 'components-extra'

export default () => (
  <CookiesBanner text="Your description">
    <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
    <CookiesBanner.Button onClick={alert('do something')}>
      Awesome, I got it!
    </CookiesBanner.Button>
  </CookiesBanner>
)
\`\`\`

## If you don't have the \`StyledProvider\` at the root of your App
// Example.js

\`\`\`jsx
import React from 'react'
import { CookiesBanner, StyledProvider } from 'components-extra'

export default () => (
  <StyledProvider>
    <CookiesBanner text="Your description">
      <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
      <CookiesBanner.Button onClick={alert('do something')}>
        Awesome, I got it!
      </CookiesBanner.Button>
    </CookiesBanner>
  </StyledProvider>
)

\`\`\`
`

storiesOf('Introduction|Copy & Paste examples', module).add(
  'CookiesNavbar example',
  () => <Preview content={content} />,
  { info: { disable: true } },
)
