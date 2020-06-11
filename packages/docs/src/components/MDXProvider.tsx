import React, { useEffect } from 'react'
import { MDXProvider as GatsbyMDXProvider } from '@mdx-js/react'
import Prism from 'prismjs'

import { SpacedParagraph } from './Paragraph'
import { Title1, Title2, Title3 } from './Titles'
import Blockquote from './Blockquote'
import InlineCode from './InlineCode'
import Link from './Link'
import List from './List'
import ListItem from './ListItem'
import Playground from './Playground'

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  p: SpacedParagraph,
  ul: List,
  li: ListItem,
  a: Link,
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