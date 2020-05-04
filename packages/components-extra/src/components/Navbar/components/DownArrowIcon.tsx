import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const DownArrowIcon: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" height="24" width="24" {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </SvgIcon>
)

export default DownArrowIcon
