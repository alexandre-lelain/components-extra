import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'test'
import Navbar from '..'

let I_WAS_FIRED = false
let LANGUAGE_WAS_CHANGED = 0
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
const LANGUAGES = [
  {
    label: 'french',
    locale: 'FR',
  },
  {
    label: 'English',
    locale: 'EN',
  },
]
const LANGUAGES_WITH_DEFAULT = [
  {
    label: 'french',
    locale: 'FR',
  },
  {
    label: 'English',
    locale: 'EN',
    isDefault: true,
  },
]
const onSelectLanguage = () => LANGUAGE_WAS_CHANGED++

describe('Navbar', () => {
  const TestNavbar = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <Navbar ref={ref} title={TITLE} />
  }

  renderWithTheme(<TestNavbar />)

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Navbar title={TITLE} />)
    const navbar = container.firstChild
    expect(navbar).toBeInTheDocument()
  })

  test('it contains the title if provided', () => {
    const { getByText } = renderWithTheme(<Navbar title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('it has a static-position by default', () => {
    const { container } = renderWithTheme(<Navbar title={TITLE} />)
    const navbar = container.firstChild
    expect(navbar).toHaveStyle('position: static')
  })

  test('it has a sticky-position if isSticky is provided', () => {
    const { container } = renderWithTheme(<Navbar title={TITLE} isSticky />)
    const navbar = container.firstChild
    expect(navbar).toHaveStyle('position: sticky')
  })

  test('it fires the onSelectLanguage prop on language change if provided, on both mobile & desktop', () => {
    const { getAllByTitle } = renderWithTheme(
      <Navbar title={TITLE} languages={LANGUAGES} onSelectLanguage={onSelectLanguage} />,
    )
    const fr = LANGUAGES[0]
    const langElements = getAllByTitle(fr.label)
    const [langDesktop, langMobile] = langElements
    fireEvent.click(langDesktop)
    fireEvent.click(langMobile)
    expect(LANGUAGE_WAS_CHANGED).toEqual(2)
  })

  test('it displays the first item of languages array if no default locale is provided', () => {
    const { getAllByTitle } = renderWithTheme(<Navbar title={TITLE} languages={LANGUAGES} />)
    const [fr] = LANGUAGES
    const [currentLocaleDesktopElement] = getAllByTitle('current-locale')
    expect(currentLocaleDesktopElement).toHaveTextContent(fr.locale)
  })

  test('it displays the default language item if a default locale is provided', () => {
    const { getAllByTitle } = renderWithTheme(
      <Navbar title={TITLE} languages={LANGUAGES_WITH_DEFAULT} />,
    )
    const [, en] = LANGUAGES
    const [currentLocaleDesktopElement] = getAllByTitle('current-locale')
    expect(currentLocaleDesktopElement).toHaveTextContent(en.locale)
  })

  test('it changes the displayed selected locale on language change', () => {
    const { getAllByTitle } = renderWithTheme(
      <Navbar title={TITLE} languages={LANGUAGES_WITH_DEFAULT} />,
    )
    const [fr] = LANGUAGES
    const [langDesktop] = getAllByTitle(fr.label)
    const [currentLocaleDesktopElement] = getAllByTitle('current-locale')
    fireEvent.click(langDesktop)
    expect(currentLocaleDesktopElement).toHaveTextContent(fr.locale)
  })
})
