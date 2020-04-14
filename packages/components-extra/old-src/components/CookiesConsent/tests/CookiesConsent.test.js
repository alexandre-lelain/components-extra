import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'test'
import CookiesConsent from '..'

const TITLE = 'some title'
const CATEGORY = {
  title: 'category title',
  description: 'category description',
}
const LABEL = 'All cookies'

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

  test('it renders the title if provided', () => {
    const { getByText } = renderWithTheme(<CookiesConsent title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test("it renders a category's title & description if provied", () => {
    const { getByText } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} description={CATEGORY.description} />
      </CookiesConsent>,
    )
    const title = getByText(CATEGORY.title)
    const description = getByText(CATEGORY.description)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test("it renders a category's title & description if provied", () => {
    const { getByText } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} description={CATEGORY.description} />
      </CookiesConsent>,
    )
    const title = getByText(CATEGORY.title)
    const description = getByText(CATEGORY.description)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test('it renders a unchecked switch by default', () => {
    const { getByRole } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} />
      </CookiesConsent>,
    )
    const theSwitch = getByRole('checkbox')
    expect(theSwitch.checked).toBe(false)
  })

  test("it changes a category's switch state when user clicks on it", () => {
    const { getByRole } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} />
      </CookiesConsent>,
    )
    const theSwitch = getByRole('checkbox')
    fireEvent.click(theSwitch)
    expect(theSwitch.checked).toBe(true)
  })

  test("it changes a category's switch state when user clicks on it", () => {
    const { getByRole } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} />
      </CookiesConsent>,
    )
    const theSwitch = getByRole('checkbox')
    fireEvent.click(theSwitch)
    expect(theSwitch.checked).toBe(true)
  })

  test("it triggers a category's onChange prop when user clicks on the switch", () => {
    let checked = false
    const onChange = jest.fn((newChecked) => (checked = newChecked))
    const { getByRole } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title} checked={checked} onChange={onChange} />
      </CookiesConsent>,
    )
    const theSwitch = getByRole('checkbox')
    fireEvent.click(theSwitch)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(checked).toBe(true)
  })

  test("it renders a category's custom content if provided", () => {
    const { getByText } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title}>
          <p>{TITLE}</p>
        </CookiesConsent.Category>
      </CookiesConsent>,
    )
    const content = getByText(TITLE)
    expect(content).toBeInTheDocument()
  })

  test("it doesn't unmount a category's content when the category is closed", () => {
    const { getByText } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Category title={CATEGORY.title}>
          <p>{TITLE}</p>
        </CookiesConsent.Category>
      </CookiesConsent>,
    )
    const category = getByText(CATEGORY.title)
    const content = getByText(TITLE)
    fireEvent.click(category) // open the category
    fireEvent.click(category) // close the category
    expect(content).toBeInTheDocument()
  })

  test('it does not display the main controls switch if no onChange prop is provided', () => {
    const { queryByRole } = renderWithTheme(
      <CookiesConsent>
        <CookiesConsent.Controls />
      </CookiesConsent>,
    )
    expect(queryByRole('checkbox')).toBeNull()
  })
})
