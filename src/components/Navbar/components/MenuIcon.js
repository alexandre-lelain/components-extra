import React, { memo } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export default memo(props => (
  <SvgIcon {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SvgIcon>
))
