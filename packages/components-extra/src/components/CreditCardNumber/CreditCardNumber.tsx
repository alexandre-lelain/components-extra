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

/**
 *
 * API:
 *
 * - [CreditCardNumber API](https://components-extra.netlify.app/components/credit-card-number)
 * - inherits [OutlinedInput API](https://material-ui.com/api/outlined-input/)
 */
const CreditCardNumber = forwardRef(
  ({ inputProps, onChange, ...rest }: OutlinedInputProps, ref: React.Ref<HTMLInputElement>) => {
    const [value, setValue] = useState('')
    const [caretPosition, setCaretPosition] = useState(0)
    const input = useRef<HTMLInputElement>()

    useImperativeHandle(ref, () => input.current || new HTMLInputElement())

    useEffect(() => {
      if (input.current) {
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
        ref={ref}
        {...rest}
        value={value}
      />
    )
  },
) as CreditCardNumberType

export type CreditCardNumberType = React.ForwardRefExoticComponent<OutlinedInputProps>

export { CreditCardNumber as BaseCreditCardNumber, OutlinedInputProps as CreditCardNumberProps }
export default styled(CreditCardNumber)``
