import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const Menu: React.FC = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </SvgIcon>
)

export default Menu
