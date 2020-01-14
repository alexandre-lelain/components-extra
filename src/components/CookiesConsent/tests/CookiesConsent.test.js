import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'test'
import CookiesConsent from '..'

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

describe('CookiesConsent', () => {
  const TestCookiesConsent = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current instanceof HTMLDivElement).toBeTruthy()
      })
    }, [ref])

    return <CookiesConsent ref={ref} />
  }

  renderWithTheme(<TestCookiesConsent />)

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<CookiesConsent />)
    const cookiesConsent = container.firstChild
    expect(cookiesConsent).toBeInTheDocument()
  })
})
