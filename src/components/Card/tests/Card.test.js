import React, { useRef, useLayoutEffect } from 'react'
import { fireEvent, render } from '@testing-library/react'

import { renderWithTheme } from 'test'
import Card from '..'

let I_WAS_FIRED = false

const TITLE = 'awesome title'
const DESCRIPTION = 'awesome description'
const ACTIONS = [
  {
    label: 'awesome label 1',
    onClick: () => {
      I_WAS_FIRED = true
    },
  },
]

describe('Card', () => {
  const TestCard = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <Card ref={ref} title={TITLE} />
  }

  render(<TestCard />)

  test('it renders correctly', () => {
    const { container } = render(<Card title={TITLE} />)
    const card = container.firstChild
    expect(card).toBeInTheDocument()
  })

  test('it contains the required title', () => {
    const { getByText } = render(<Card title={TITLE} />)
    const title = getByText(TITLE)
    expect(title).toBeInTheDocument()
  })

  test('it contains a description if provided', () => {
    const { getByText } = render(<Card title={TITLE} description={DESCRIPTION} />)
    const description = getByText(DESCRIPTION)
    expect(description).toBeInTheDocument()
  })

  test("it fires a provided action's onClick on this action's click event", () => {
    const { getByText } = renderWithTheme(<Card actions={ACTIONS} title={TITLE} />)
    const firstAction = ACTIONS[0]
    const actionElement = getByText(firstAction.label)
    fireEvent.click(actionElement)
    expect(I_WAS_FIRED).toBeTruthy()
  })
})
