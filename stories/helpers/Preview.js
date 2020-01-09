import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import PropTypes from 'prop-types'

import Container from './Container'
import CodeBlock from './CodeBlock'

const Preview = ({ content }) => {
  return (
    <Container>
      <ReactMarkdown escapeHtml={false} source={content} renderers={{ code: CodeBlock }} />
    </Container>
  )
}

Preview.propTypes = {
  content: PropTypes.string,
}

export default Preview
