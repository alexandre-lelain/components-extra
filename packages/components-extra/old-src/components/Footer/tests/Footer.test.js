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
        expect(ref.current instanceof HTMLElement).toBeTruthy()
      })
    }, [ref])

    return <Footer ref={ref}>content</Footer>
  }

  renderWithTheme(<TestFooter />)

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Footer>content</Footer>)
    const footer = container.firstChild
    expect(footer).toBeInTheDocument()
  })

  test('it contains the title if provided', () => {
    const { getByText } = renderWithTheme(<Footer title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('the banner is rendered if provided', () => {
    const { getByText } = renderWithTheme(<Footer bottomBanner={bannerContent} />)
    const bannerElement = getByText(BANNER_CONTENT)
    expect(bannerElement).toBeInTheDocument()
  })

  test("it fires an item's onClick function on its click event", () => {
    const { label, onClick } = ITEMS[0]
    const { getByText } = renderWithTheme(
      <Footer>
        <Footer.Column>
          <Footer.Item onClick={onClick}>{label}</Footer.Item>
        </Footer.Column>
      </Footer>,
    )
    const itemElement = getByText(label)
    fireEvent.click(itemElement)
    expect(I_WAS_FIRED).toBeTruthy()
  })

  test("it renders an item as a link if an item's href is provided", () => {
    const { label, href } = ITEMS[1]
    const { getByRole } = renderWithTheme(
      <Footer>
        <Footer.Column>
          <Footer.Item href={href}>{label}</Footer.Item>
        </Footer.Column>
      </Footer>,
    )
    const itemElement = getByRole('link')
    expect(itemElement).toHaveAttribute('href', LINK)
  })
})
