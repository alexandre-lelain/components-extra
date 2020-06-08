import React from 'react'
import { MDXProvider as GatsbyMDXProvider } from '@mdx-js/react'
import { Typography } from '@material-ui/core'

import InlineCode from './InlineCode'
import Blockquote from './Blockquote'

const components = {
  h2: props => <Typography variant="h4" component="h2" {...props}/>,
  inlineCode: InlineCode,
  blockquote: Blockquote,
}

const MDXProvider = props => <GatsbyMDXProvider components={components} {...props}/>

export default MDXProvider