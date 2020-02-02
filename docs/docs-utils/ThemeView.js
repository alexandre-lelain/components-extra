import React from 'react'

import theme from 'theme'

export default () => {
  if (typeof window !== 'undefined') {
    const ReactJson = require('react-json-view').default
    return (
      <ReactJson
        style={{ fontSize: 16 }}
        name={null}
        theme="ocean"
        src={theme}
        sortKeys
        displayDataTypes={false}
      />
    )
  }
  return null
}
