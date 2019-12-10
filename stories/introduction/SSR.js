import React from 'react'
import { storiesOf } from '@storybook/react'

import Preview from '../helpers/Preview'

const gatsby = `
## How to use components-extra with Gatsby.js

All components of **components-extra** are Server-Side-Rendering friendly, so you can totaly integrate them
in your SSR app.

If you are using the awesome framework [Gatsby.js](https://www.gatsbyjs.org/) (if you are not, you should definitely try it!), you will need to add
two plugins in your \`gatsby-config.js\` file to make **components-extra** work smoothly:

- [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)
- [gatsby-plugin-material-ui](https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/)

Those are not required to make your app compile correctly, however you might experience some display issues if you don't
use them.
`

const story = storiesOf('Introduction|Server Side Rendering', module)

story.add('Gatsby.js', () => <Preview content={gatsby} />, {
  info: { disable: true },
})
