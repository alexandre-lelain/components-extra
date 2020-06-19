import React from 'react'

import { useTheme } from '@material-ui/core'

import { isCSR } from '@utils'

const ThemeView: React.FC = () => {
  const theme = useTheme()

  if (isCSR()) {
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
  return <></>
}

export default ThemeView