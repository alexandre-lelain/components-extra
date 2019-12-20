import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StyledInput = styled(TextField)`
  background-color: white;
  ${({ theme }) => `
    border-top-left-radius: ${theme.shape.borderRadius}px;
    border-bottom-left-radius: ${theme.shape.borderRadius}px;
  `};

  * {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`

const Input = ({ className, id, onChange, value, ...rest }) => {
  const onChangeEmail = event => onChange && onChange(event.target.value)
  return (
    <StyledInput
      className={className}
      id={id}
      onChange={onChangeEmail}
      size="small"
      type="email"
      value={value}
      variant="outlined"
      {...rest}
    />
  )
}

Input.propTypes = {
  /**
   * The input's id.
   */
  id: PropTypes.string.isRequired,
  /**
   * Function called when the value is changed. Its sole argument is a string corresponding to the email.
   * Signature: (email: string) => void
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The email value.
   */
  value: PropTypes.string.isRequired,
  /**
   * The MUI TextField's props. See https://material-ui.com/api/text-field/. You can as well pass other props.
   */
  '...rest': PropTypes.object,
}

Input.displayName = 'Newsletter.Input'

const DefaultComponent = styled(Input)``
DefaultComponent.displayName = Input.displayName
DefaultComponent.propTypes = Input.propTypes

export default DefaultComponent
export { Input as BaseInput }
