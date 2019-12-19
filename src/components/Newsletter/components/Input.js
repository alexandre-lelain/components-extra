import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const Input = ({ className, ...rest }) => {
  return <TextField className={className} size="small" type="email" variant="outlined" {...rest} />
}

Input.propTypes = {}

Input.displayName = 'Newsletter.Input'

const DefaultComponent = styled(Input)``
DefaultComponent.displayName = Input.displayName
DefaultComponent.propTypes = Input.propTypes

export default DefaultComponent
export { Input as BaseInput }
