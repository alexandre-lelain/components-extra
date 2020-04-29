import React from 'react'
import { InputAdornment } from '@material-ui/core'

import CardIcon from './CardIcon'

const StartAdornment: React.FunctionComponent = (props) => (
  <InputAdornment position="start" {...props}>
    <CardIcon />
  </InputAdornment>
)

export default StartAdornment
