import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent, render } from '@testing-library/react'

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
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <BackToTop ref={ref} />
  }

  render(<TestBackToTop />)

  test('it renders correctly', () => {
    const { getByRole } = render(<BackToTop />)
    const backToTop = getByRole('button')
    expect(backToTop).not.toBeFalsy()
  })

  test('it scrolls document to top when clicked', () => {
    const { getByRole } = render(<BackToTop />)
    const backToTop = getByRole('button')
    document.documentElement.scrollTop = START_HEIGHT_TEST
    fireEvent.click(backToTop)
    expect(document.documentElement.scrollTop).toEqual(0)
  })

  test('it is displayed only on window scroll', () => {
    const { getByRole } = render(<BackToTop />)
    const backToTop = getByRole('button')
    document.documentElement.scrollTop = 0
    fireEvent.scroll(document, { target: { scrollY: START_HEIGHT_TEST } })
    expect(backToTop).toHaveStyle(`display: inline-flex;`)
  })
})
