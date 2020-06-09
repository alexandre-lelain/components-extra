import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const ExpandLess: React.FC = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
  </SvgIcon>
)

export default ExpandLess
