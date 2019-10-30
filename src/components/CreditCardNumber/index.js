import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { OutlinedInput } from '@material-ui/core'

import StartAdornment from './components/StartAdornment'
import { addWhitespaces, removeWhitespaces, setCaretToPosition, MAX_LENGTH } from './utils'

const endsWithWhitespace = value => value[value.length - 1] === ' '

const CreditCardNumber = ({ className, id, forwardedRef = null, onChange, ...rest }) => {
  const [value, setValue] = useState('')
  const [caretPosition, setCaretPosition] = useState(0)
  const input = useRef(null)

  useImperativeHandle(forwardedRef, () => input)

  useEffect(() => {
    onChange(removeWhitespaces(value))
  }, [value, onChange])

  useEffect(() => {
    setCaretToPosition(input.current, caretPosition)
  }, [value, caretPosition])

  const onChangeValue = event => {
    let newCaretPosition = event.target.selectionStart
    const newValue = event.target.value
    const digitsOnly = removeWhitespaces(newValue)
    const spacedValue = addWhitespaces(digitsOnly)
    setValue(spacedValue)
    console.log({ newValue }, { value })
    if (endsWithWhitespace(value) && newValue.length >= value.length) {
      newCaretPosition = newCaretPosition + parseInt(value.length / 4)
    }
    setCaretPosition(newCaretPosition)
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
      }}
      onChange={onChangeValue}
      startAdornment={<StartAdornment />}
      value={value}
      {...rest}
    />
  )
}

CreditCardNumber.displayName = 'CreditCardNumber'

CreditCardNumber.propTypes = {
  /**
   * The input's id.
   */
  id: PropTypes.string.isRequired,
  /**
   * The input's onChange function. Its sole argument is the credit's card number
   * with no whitespaces.
   */
  onChange: PropTypes.func.isRequired,
}

export { CreditCardNumber }
export default styled(
  forwardRef((props, ref) => <CreditCardNumber forwardedRef={ref} {...props} />),
)``
