import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'utils-test'

import CrediCardNumber from '..'
import { MAX_DIGITS } from '../utils'

describe('<CrediCardNumber>', () => {
  test('it forwards the given ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>()
    renderWithTheme(<CrediCardNumber id="credit-card" ref={ref} />)
    expect(ref.current instanceof HTMLInputElement).toBeTruthy()
  })

  test('it renders correctly', () => {
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" />)
    const creditCardNumber = getByRole('textbox')
    expect(creditCardNumber).toBeInTheDocument()
  })

  test("its value updates with the user's input", () => {
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" />)
    const creditCardNumber = getByRole('textbox') as HTMLInputElement
    fireEvent.change(creditCardNumber, { target: { value: '1' } })
    expect(creditCardNumber.value).toEqual('1')
  })

  test('it automatically adds a whitespace after the user input 4 characters', () => {
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" />)
    const creditCardNumber = getByRole('textbox') as HTMLInputElement
    fireEvent.change(creditCardNumber, { target: { value: '1234' } })
    expect(creditCardNumber.value).toEqual('1234 ')
  })

  test('it does not prevent the user from inputing non-digits characters', () => {
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" />)
    const creditCardNumber = getByRole('textbox') as HTMLInputElement
    fireEvent.change(creditCardNumber, { target: { value: 'components-extra' } })
    expect(creditCardNumber.value).toEqual('comp onen ts-e xtra')
  })

  test(`it does not allow more than ${MAX_DIGITS} characters`, () => {
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" />)
    const creditCardNumber = getByRole('textbox') as HTMLInputElement
    fireEvent.change(creditCardNumber, { target: { value: 'iammorethansixteenchars' } })
    expect(creditCardNumber.value).toEqual('iamm oret hans ixte')
  })

  test(`it calls the onChange function with the correct value`, () => {
    let value = ''
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      value = e.target.value
    }
    const { getByRole } = renderWithTheme(<CrediCardNumber id="credit-card" onChange={onChange} />)
    const creditCardNumber = getByRole('textbox') as HTMLInputElement
    fireEvent.change(creditCardNumber, { target: { value: '42424242' } })
    expect(value).toEqual('42424242')
  })
})
