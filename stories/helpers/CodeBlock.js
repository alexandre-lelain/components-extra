import React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/darcula'
import PropTypes from 'prop-types'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const customStyle = {
  lineHeight: '1',
}

const CodeBlock = ({ language = 'jsx', value }) => {
  return (
    <SyntaxHighlighter language={language} style={dark} customStyle={customStyle}>
      {value}
    </SyntaxHighlighter>
  )
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
}

export default CodeBlock
