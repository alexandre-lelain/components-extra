import React from 'react'
import { storiesOf } from '@storybook/react'

import Preview from './../helpers/Preview'

const story = storiesOf('Introduction|Troubleshooting', module)

const mui = `
# Can I use material-ui's library along with components-extra ?

Yeah, totally. [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) is a dependency of **components-extra**. So if you
want to use some components from their library, **you don't even need to install it** aside in your *dependencies*' list.

When doing imports like:

\`\`\`jsx
import { Typography } from '@material-ui/core';
\`\`\`

Your bundler will automatically look for *@material-ui/core* package in **components-extra** node module.

## What if I want to use a specific version of @material-ui/core ?

Well, in that case, you can totally install the version of **@material-ui/core** you need in your dependencies' list. The styles of the version
you have installed will overwrite the ones from **components-extra**.
`

story.add('FAQ', () => <Preview content={mui} />)
