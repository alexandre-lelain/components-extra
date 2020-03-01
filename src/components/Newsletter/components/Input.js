import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  input: {
    padding: '10px 14px',
  },
}))

const Input = ({ className, id, onChange, value, ...rest }) => {
  const classes = useStyles()
  const onChangeEmail = event => onChange && onChange(event.target.value)
  return (
    <OutlinedInput
      classes={classes}
      className={className}
      id={id}
      onChange={onChangeEmail}
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
   * The MUI OutlinedInput's props. See https://material-ui.com/api/outlined-input/. You can as well pass other props.
   */
  '...rest': PropTypes.object,
}

Input.displayName = 'Newsletter.Input'

const DefaultComponent = styled(Input)``
DefaultComponent.displayName = Input.displayName
DefaultComponent.propTypes = Input.propTypes

export default DefaultComponent
export { Input as BaseInput }
