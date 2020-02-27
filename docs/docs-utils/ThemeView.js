import React from 'react'

import createTheme from 'theme'
import { useTheme } from '@material-ui/core'

export default ({ full = false }) => {
  const theme = createTheme()
  const fullTheme = useTheme()
  const themeToDisplay = full ? fullTheme : theme
  const collapsed = full ? 1 : false

  if (typeof window !== 'undefined') {
    const ReactJson = require('react-json-view').default
    return (
      <ReactJson
        style={{ fontSize: 16 }}
        name={null}
        theme="ocean"
        src={themeToDisplay}
        collapsed={collapsed}
        sortKeys
        displayDataTypes={false}
      />
    )
  }
  return null
}
