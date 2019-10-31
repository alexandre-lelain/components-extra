import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent, render } from '@testing-library/react'

import CrediCardNumber from '..'
import { MAX_DIGITS } from '../utils'

describe('CrediCardNumber', () => {
  const TestCreditCardNumber = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <CrediCardNumber id="credit-card" onChange={() => {}} ref={ref} />
  }

  const CreditCard = props => <CrediCardNumber id="credit-card" onChange={() => {}} {...props} />

  render(<TestCreditCardNumber />)

  test('it renders correctly', () => {
    const { getByRole } = render(<CreditCard />)
    const creditCardNumber = getByRole('textbox')
    expect(creditCardNumber).toBeInTheDocument()
  })

  test("its value updates with the user's input", () => {
    const { getByRole } = render(<CreditCard />)
    const creditCardNumber = getByRole('textbox')
    fireEvent.change(creditCardNumber, { target: { value: '1' } })
    expect(creditCardNumber.value).toEqual('1')
  })

  test('it automatically adds a whitespace after the user input 4 characters', () => {
    const { getByRole } = render(<CreditCard />)
    const creditCardNumber = getByRole('textbox')
    fireEvent.change(creditCardNumber, { target: { value: '1234' } })
    expect(creditCardNumber.value).toEqual('1234 ')
  })

  test('it does not prevent the user from inputing non-digits characters', () => {
    const { getByRole } = render(<CreditCard />)
    const creditCardNumber = getByRole('textbox')
    fireEvent.change(creditCardNumber, { target: { value: 'components-extra' } })
    expect(creditCardNumber.value).toEqual('comp onen ts-e xtra')
  })

  test(`it does not allow more than ${MAX_DIGITS} characters`, () => {
    const { getByRole } = render(<CreditCard />)
    const creditCardNumber = getByRole('textbox')
    fireEvent.change(creditCardNumber, { target: { value: 'iammorethansixteenchars' } })
    expect(creditCardNumber.value).toEqual('iamm oret hans ixte')
  })
})
