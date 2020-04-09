import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'test'
import BackToTop, { START_HEIGHT } from '..'

const START_HEIGHT_TEST = START_HEIGHT + 42

describe('BackToTop', () => {
  beforeAll(() => {
    document.documentElement.scrollIntoView = jest.fn(() => {
      document.documentElement.scrollTop = 0
    })
  })

  const TestBackToTop = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current instanceof HTMLButtonElement).toBeTruthy()
      })
    }, [ref])

    return <BackToTop ref={ref} />
  }

  renderWithTheme(<TestBackToTop />)

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
