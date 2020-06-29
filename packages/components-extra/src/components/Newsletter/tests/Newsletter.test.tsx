import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'utils-test'
import Newsletter from '..'

const TITLE = 'awesome title'
const DESCRIPTION = 'awesome description'
const CAPTION = 'awesome caption'

describe('<Newsletter>', () => {
  test('it forwards the given ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>()
    renderWithTheme(<Newsletter ref={ref} />)
    expect(ref.current instanceof HTMLDivElement).toBeTruthy()
  })

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Newsletter title={TITLE}>Random stuff</Newsletter>)
    const newsletter = container.firstChild
    expect(newsletter).toBeInTheDocument()
  })

  test('it contains the title if provided', () => {
    const { getByText } = renderWithTheme(<Newsletter title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('it contains the description if provided', () => {
    const { getByText } = renderWithTheme(<Newsletter description={DESCRIPTION} />)
    const description = getByText(DESCRIPTION)
    expect(description).toBeInTheDocument()
  })

  test('it contains the caption if provided', () => {
    const { getByText } = renderWithTheme(<Newsletter caption={CAPTION} />)
    const caption = getByText(CAPTION)
    expect(caption).toBeInTheDocument()
  })

  test('it contains the input if provided', () => {
    const onChange = jest.fn()
    const { getByRole } = renderWithTheme(
      <Newsletter>
        <Newsletter.Input id="email" onChange={onChange} value="42" />
      </Newsletter>,
    )
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('it contains the button if provided', () => {
    const { getByRole } = renderWithTheme(
      <Newsletter>
        <Newsletter.Button>click me</Newsletter.Button>
      </Newsletter>,
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('it fires the button onClick function if provided', () => {
    const onClick = jest.fn()
    const { getByRole } = renderWithTheme(
      <Newsletter>
        <Newsletter.Button onClick={onClick}>click me</Newsletter.Button>
      </Newsletter>,
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('it fires the input onChange function with the correct value if user writes in it', () => {
    let value = ''
    const onChange = (newValue: React.ChangeEvent<HTMLInputElement>): void => {
      value = newValue.target.value
    }
    const { getByRole } = renderWithTheme(
      <Newsletter>
        <Newsletter.Input id="email" onChange={onChange} value={value} />
      </Newsletter>,
    )
    const input = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'example@gmail.com' } })
    expect(value).toEqual('example@gmail.com')
  })
})
