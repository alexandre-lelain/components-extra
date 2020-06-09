import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

const ExpandMore: React.FC = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </SvgIcon>
)

export default ExpandMore
