import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react'
import styled from 'styled-components'
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core'

import StartAdornment from './components/StartAdornment'
import {
  addWhitespaces,
  isAddingNewGroup,
  removeWhitespaces,
  setCaretToPosition,
  DIGITS_GROUPS,
  MAX_LENGTH,
} from './utils'

import { ComponentExtra } from '../../types'

/**
 *
 * API:
 *
 * - [CreditCardNumber API](https://components-extra.netlify.app/components/credit-card-number)
 * - inherits [OutlinedInput API](https://material-ui.com/api/outlined-input/)
 */
const CreditCardNumber: React.FC<CreditCardNumberProps> = ({
  forwardedRef,
  inputProps,
  onChange,
  ...rest
}: CreditCardNumberProps) => {
  const [value, setValue] = useState('')
  const [caretPosition, setCaretPosition] = useState(0)
  const input = useRef<HTMLInputElement>()

  useImperativeHandle(forwardedRef, () => input.current || new HTMLInputElement())

  useEffect(() => {
    if (input.current && caretPosition !== 0) {
      setCaretToPosition(input.current, caretPosition)
    }
  }, [value, caretPosition, input])

  const onChangeValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    let newCaretPosition = event.target.selectionStart || 0
    const newValue = event.target.value
    const digitsOnly = removeWhitespaces(newValue)
    const spacedValue = addWhitespaces(digitsOnly)
    if (isAddingNewGroup(value, newValue)) {
      newCaretPosition += Math.floor(value.length / DIGITS_GROUPS)
    }

    setValue(spacedValue)
    setCaretPosition(newCaretPosition)
    onChange && onChange(event)
  }

  return (
    <OutlinedInput
      autoComplete="cc-number"
      inputRef={input}
      placeholder="XXXX XXXX XXXX XXXX"
      inputProps={{
        'aria-label': 'credit-card number',
        maxLength: MAX_LENGTH,
        ...inputProps,
      }}
      onChange={onChangeValue}
      startAdornment={<StartAdornment />}
      ref={forwardedRef}
      {...rest}
      value={value}
    />
  )
}

export interface CreditCardNumberProps extends OutlinedInputProps {
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLInputElement>
}

export type CreditCardNumberType = ComponentExtra<CreditCardNumberProps>

const CreditCardNumberExtra = styled(
  forwardRef((props: CreditCardNumberProps, ref: React.Ref<HTMLInputElement>) => (
    <CreditCardNumber {...props} forwardedRef={ref} />
  )),
)`` as CreditCardNumberType

export default CreditCardNumberExtra
