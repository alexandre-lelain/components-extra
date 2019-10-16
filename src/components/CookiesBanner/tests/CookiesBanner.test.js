import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'test'
import CookiesBanner from '..'

let I_WAS_FIRED = false
const TEXT = 'awesome text'
const LINK = 'https://components-extra.netlify.com/'
const RIGHT_BTN = {
  label: 'right-btn',
  onClick: () => (I_WAS_FIRED = true),
}
const LEFT_BTN = {
  label: 'left-btn',
  href: LINK,
}

describe('CookiesBanner', () => {
  const TestCookiesBanner = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <CookiesBanner ref={ref} />
  }

  renderWithTheme(<TestCookiesBanner />)

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<CookiesBanner />)
    const cookiesBanner = container.firstChild
    expect(cookiesBanner).toBeInTheDocument()
  })

  test('it contains the text provided', () => {
    const { getByText } = renderWithTheme(<CookiesBanner text={TEXT} />)
    const textElement = getByText(TEXT)
    expect(textElement).toBeInTheDocument()
  })

  test("it fires a provided button's onClick on this button's click event", () => {
    const { getByText } = renderWithTheme(<CookiesBanner rightBtn={RIGHT_BTN} />)
    const rightBtnElement = getByText(RIGHT_BTN.label)
    fireEvent.click(rightBtnElement)
    expect(I_WAS_FIRED).toBeTruthy()
  })

  test('it renders a link if an href is provided to one of the controls', () => {
    const { getByRole } = renderWithTheme(<CookiesBanner leftBtn={LEFT_BTN} />)
    const leftBtnElement = getByRole('link')
    expect(leftBtnElement).toHaveAttribute('href', LEFT_BTN.href)
  })
})
