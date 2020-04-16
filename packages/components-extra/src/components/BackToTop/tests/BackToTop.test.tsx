import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils-test'
import BackToTop from '..'

const START_HEIGHT_TEST = 42

describe('<BackToTop>', () => {
  beforeAll(() => {
    document.documentElement.scrollIntoView = jest.fn(() => {
      document.documentElement.scrollTop = 0
    })
  })

  test('it forwards the given ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    renderWithTheme(<BackToTop ref={ref} />)
    expect(ref.current instanceof HTMLButtonElement).toBeTruthy()
  })

  test('it renders correctly', () => {
    const { getByTestId } = renderWithTheme(<BackToTop />)
    const backToTop = getByTestId('back-to-top-button')
    expect(backToTop).toBeInTheDocument()
  })

  test('it scrolls document to top when clicked', () => {
    const { getByTestId } = renderWithTheme(<BackToTop />)
    const backToTop = getByTestId('back-to-top-button')
    document.documentElement.scrollTop = START_HEIGHT_TEST
    fireEvent.click(backToTop)
    expect(document.documentElement.scrollTop).toEqual(0)
  })
})
