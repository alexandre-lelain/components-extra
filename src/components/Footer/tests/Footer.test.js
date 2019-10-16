import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'test'
import Footer from '..'

let I_WAS_FIRED = false
const TITLE = 'awesome title'
const BANNER_CONTENT = "I'm the banner content"
const LINK = 'https://components-extra.netlify.com'
const ITEMS = [
  {
    label: 'label 1',
    onClick: () => {
      I_WAS_FIRED = true
    },
  },
  {
    label: 'label 2',
    href: LINK,
  },
]

const bannerContent = () => <div>{BANNER_CONTENT}</div>

describe('Footer', () => {
  const TestFooter = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <Footer ref={ref} />
  }

  renderWithTheme(<TestFooter />)

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Footer />)
    const footer = container.firstChild
    expect(footer).toBeInTheDocument()
  })

  test('it contains the title if provided', () => {
    const { getByText } = renderWithTheme(<Footer title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('the banner is rendered if provided', () => {
    const { getByText } = renderWithTheme(<Footer bannerContent={bannerContent} />)
    const bannerElement = getByText(BANNER_CONTENT)
    expect(bannerElement).toBeInTheDocument()
  })

  test("it fires an item`s onClick function on it's click event", () => {
    const { getByText } = renderWithTheme(<Footer items={ITEMS} />)
    const firstItem = ITEMS[0]
    const itemElement = getByText(firstItem.label)
    fireEvent.click(itemElement)
    expect(I_WAS_FIRED).toBeTruthy()
  })

  test("it renders an item as a link if an item's href is provided", () => {
    const { getByText } = renderWithTheme(<Footer items={ITEMS} />)
    const secondItem = ITEMS[1]
    const itemElement = getByText(secondItem.label)
    expect(itemElement).toHaveAttribute('href', LINK)
  })
})
