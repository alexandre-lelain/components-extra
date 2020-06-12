import React from 'react'

import { useTheme } from '@material-ui/core'

export default () => {
  const theme = useTheme()

  if (typeof window !== 'undefined') {
    const ReactJson = require('react-json-view').default
    return (
      <ReactJson
        style={{ fontSize: 16 }}
        name={null}
        theme="ocean"
        src={theme}
        collapsed={1}
        sortKeys
        displayDataTypes={false}
      />
    )
  }
  return null
}
