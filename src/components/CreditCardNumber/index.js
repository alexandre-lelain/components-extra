import React, { forwardRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { OutlinedInput } from '@material-ui/core'

import isEmpty from 'utils/isEmpty'

import StartAdornment from './components/StartAdornment'

const MAX_LENGTH = 16 + 3

// TODO: test
const addWhitespaces = value => {
  const trimmedValue = removeWhitespaces(value)
  const matched = trimmedValue.match(/([a-z,0-9]{4})/gi)
  if (matched && !isEmpty(matched)) {
    const parts = matched.join(' ')
    const valueLeft = trimmedValue.slice(matched.length * 4)
    if (valueLeft && valueLeft !== '') {
      return parts + ' ' + valueLeft
    }
    return parts
  }
  return value
}

// TODO: test
const removeWhitespaces = value => value.replace(/\s/g, '')

const CreditCardNumber = ({ className, id, forwardedRef = null, onChange, ...rest }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange(removeWhitespaces(value))
  }, [value])

  const onChangeValue = event => {
    const newValue = event.target.value
    const formatedNewValue = addWhitespaces(newValue)
    setValue(formatedNewValue)
  }

  return (
    <OutlinedInput
      autoComplete="cc-number"
      className={className}
      id={id}
      inputRef={forwardedRef}
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
