import React from 'react'
import { MDXProvider as GatsbyMDXProvider } from '@mdx-js/react'
import { Typography } from '@material-ui/core'

import InlineCode from './InlineCode'
import Blockquote from './Blockquote'
import { Title1, Title2, Title3 } from './Titles'

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  inlineCode: InlineCode,
  blockquote: Blockquote,
}

const MDXProvider = props => <GatsbyMDXProvider components={components} {...props}/>

export default MDXProvider