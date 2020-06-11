import React, { useEffect } from 'react'
import { MDXProvider as GatsbyMDXProvider } from '@mdx-js/react'
import Prism from 'prismjs'

import InlineCode from './InlineCode'
import Blockquote from './Blockquote'
import { Title1, Title2, Title3 } from './Titles'
import Playground from './Playground'

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  pre: Playground,
}

const MDXProvider = props => {
  useEffect(() => {
    Prism.highlightAll()
  }, [props])

  return (
    <GatsbyMDXProvider components={components} {...props}/>
  )
}

export default MDXProvider