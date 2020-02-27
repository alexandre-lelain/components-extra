import React from 'react'

import createTheme from 'theme'

export default () => {
  // TODO switch dark/light theme
  const theme = createTheme()
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
