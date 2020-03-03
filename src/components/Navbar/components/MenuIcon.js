import React, { memo } from 'react'
import { SvgIcon } from '@material-ui/core'

export default memo(props => (
  <SvgIcon viewBox="0 0 24 24" height="24" width="24" {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SvgIcon>
))
