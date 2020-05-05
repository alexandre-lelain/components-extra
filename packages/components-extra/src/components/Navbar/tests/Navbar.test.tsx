import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'utils-test'
import Navbar from '..'

const TITLE = 'awesome title'
const SELECTED_LANGUAGE = 'English'
const ITEM = 'awesome item'

describe('<Navbar>', () => {
  test('it forwards the given ref correctly', () => {
    const ref = React.createRef()
    renderWithTheme(<Navbar ref={ref} />)
    expect(ref.current instanceof HTMLElement).toBeTruthy()
  })

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Navbar>Random stuff</Navbar>)
    const navbar = container.firstChild
    expect(navbar).toBeInTheDocument()
  })

  test('it contains the title if provided', () => {
    const { getByText } = renderWithTheme(
      <Navbar>
        <Navbar.Brand title={TITLE} />
      </Navbar>,
    )
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('it has a static-position by default', () => {
    const { container } = renderWithTheme(<Navbar />)
    const navbar = container.firstChild
    expect(navbar).toHaveStyle('position: static')
  })

  test('it has a sticky-position if isSticky is provided', () => {
    const { container } = renderWithTheme(<Navbar isSticky />)
    const navbar = container.firstChild
    expect(navbar).toHaveStyle('position: sticky')
  })

  test('it displays the selectedLanguage if provided to the Navbar.Language component', () => {
    const { getByText } = renderWithTheme(
      <Navbar>
        <Navbar.Brand title={TITLE} />
        <Navbar.Language selectedLanguage={SELECTED_LANGUAGE} />
      </Navbar>,
    )
    const language = getByText(SELECTED_LANGUAGE)
    expect(language).toBeInTheDocument()
  })

  test('it displays a MenuItem if provided', () => {
    const { getByText } = renderWithTheme(
      <Navbar>
        <Navbar.Brand title={TITLE} />
        <Navbar.Menu>
          <Navbar.MenuItem>{ITEM}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>,
    )
    const menuItem = getByText(ITEM)
    expect(menuItem).toBeInTheDocument()
  })

  test('it displays a LanguageItem if provided', () => {
    const { getByText } = renderWithTheme(
      <Navbar>
        <Navbar.Brand title={TITLE} />
        <Navbar.Language>
          <Navbar.LanguageItem>{ITEM}</Navbar.LanguageItem>
        </Navbar.Language>
      </Navbar>,
    )
    const languageItem = getByText(ITEM)
    expect(languageItem).toBeInTheDocument()
  })
})
