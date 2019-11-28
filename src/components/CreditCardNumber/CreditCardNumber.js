import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { OutlinedInput } from '@material-ui/core'

import StartAdornment from './components/StartAdornment'
import {
  addWhitespaces,
  isAddingNewGroup,
  removeWhitespaces,
  setCaretToPosition,
  DIGITS_GROUPS,
  MAX_LENGTH,
} from './utils'

const CreditCardNumber = ({ className, id, forwardedRef = null, onChange, ...rest }) => {
  const [value, setValue] = useState('')
  const [caretPosition, setCaretPosition] = useState(0)
  const input = useRef(null)
  const { inputProps = {}, ...otherRest } = rest

  useImperativeHandle(forwardedRef, () => input)

  useEffect(() => {
    setCaretToPosition(input.current, caretPosition)
  }, [value, caretPosition])

  const onChangeValue = event => {
    let newCaretPosition = event.target.selectionStart
    const newValue = event.target.value
    const digitsOnly = removeWhitespaces(newValue)
    const spacedValue = addWhitespaces(digitsOnly)
    if (isAddingNewGroup(value, newValue)) {
      newCaretPosition += parseInt(value.length / DIGITS_GROUPS)
    }

    setValue(spacedValue)
    setCaretPosition(newCaretPosition)
    onChange(digitsOnly)
  }

  return (
    <OutlinedInput
      autoComplete="cc-number"
      className={className}
      id={id}
      inputRef={input}
      placeholder="XXXX XXXX XXXX XXXX"
      inputProps={{
        'aria-label': 'credit-card number',
        maxLength: MAX_LENGTH,
        ...inputProps,
      }}
      onChange={onChangeValue}
      startAdornment={<StartAdornment />}
      value={value}
      {...otherRest}
    />
  )
}

CreditCardNumber.propTypes = {
  /**
   * The input's id.
   */
  id: PropTypes.string.isRequired,
  /**
   * The input's onChange function. Its sole argument is a string corresponding to the credit's card number
   * with no whitespaces. (cardNumber: string) => void
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The MUI OutlinedInput's props. See https://material-ui.com/api/outlined-input/.
   */
  rest: PropTypes.object,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <CreditCardNumber forwardedRef={ref} {...props} />),
)``
DefaultComponent.displayName = 'CreditCardNumber'
DefaultComponent.propTypes = CreditCardNumber.propTypes

export { CreditCardNumber as BaseCreditCardNumber }
export default DefaultComponent
