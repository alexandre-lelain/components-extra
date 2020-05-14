import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const ArrowIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </SvgIcon>
)

export default ArrowIcon
