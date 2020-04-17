import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from 'utils-test'
import Card from '..'

let I_WAS_FIRED = false

const TITLE = 'awesome title'
const DESCRIPTION = 'awesome description'
const BUTTON = {
  label: 'awesome label 1',
  onClick: (): void => {
    I_WAS_FIRED = true
  },
}

describe('<Card>', () => {
  test('it forwards the given ref correctly', () => {
    const ref = React.createRef()
    renderWithTheme(<Card ref={ref} title={TITLE} />)
    expect(ref.current instanceof HTMLDivElement).toBeTruthy()
  })

  test('it renders correctly', () => {
    const { container } = renderWithTheme(<Card title={TITLE} />)
    const card = container.firstChild
    expect(card).toBeInTheDocument()
  })

  test('it contains the required title', () => {
    const { getByText } = renderWithTheme(<Card title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('it contains a description if provided', () => {
    const { getByText } = renderWithTheme(<Card title={TITLE} description={DESCRIPTION} />)
    const description = getByText(DESCRIPTION)
    expect(description).toBeInTheDocument()
  })

  test('it renders a Card.Button if provided', () => {
    const { label, onClick } = BUTTON
    const { getByText } = renderWithTheme(
      <Card title={TITLE}>
        <Card.Button onClick={onClick}>{label}</Card.Button>
      </Card>,
    )
    const element = getByText(label)
    expect(element).toBeInTheDocument()
  })

  test("it fires a Card.Button's onclick function if provided", () => {
    const { label, onClick } = BUTTON
    const { getByText } = renderWithTheme(
      <Card title={TITLE}>
        <Card.Button onClick={onClick}>{label}</Card.Button>
      </Card>,
    )
    const element = getByText(label)
    fireEvent.click(element)
    expect(I_WAS_FIRED).toBeTruthy()
  })

  test('it renders the title in bigger size if Card is in big mode', () => {
    const { getAllByText } = renderWithTheme(
      <React.Fragment>
        <Card title={TITLE} />
        <Card title={TITLE} big />
      </React.Fragment>,
    )
    const [normalTitle, bigTitle] = getAllByText(TITLE)
    expect(normalTitle).not.toEqual(bigTitle)
  })

  test('it renders the description in bigger size if Card is in big mode', () => {
    const { getAllByText } = renderWithTheme(
      <React.Fragment>
        <Card title={TITLE} description={DESCRIPTION} />
        <Card title={TITLE} description={DESCRIPTION} big />
      </React.Fragment>,
    )
    const [normalDesc, bigDesc] = getAllByText(DESCRIPTION)
    expect(normalDesc).not.toEqual(bigDesc)
  })
})
