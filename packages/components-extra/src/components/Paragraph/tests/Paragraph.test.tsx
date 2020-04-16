import React from 'react'
import { renderWithTheme } from 'utils-test'
import Paragraph from '..'

describe('<Paragraph>', () => {
  test('it forwards the given ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>()
    renderWithTheme(<Paragraph ref={ref} />)
    expect(ref.current instanceof HTMLParagraphElement).toBeTruthy()
  })

  test("it renders correctly and fowards Typography's props", () => {
    const { getByText } = renderWithTheme(
      <Paragraph color="textSecondary" variant="body2" align="center">
        components-extra
      </Paragraph>,
    )
    const paragraph = getByText('components-extra')
    expect(paragraph).toBeInTheDocument()
  })

  test('it has a max-width of 650px by default', () => {
    const { container } = renderWithTheme(<Paragraph />)
    const paragraph = container.firstChild
    expect(paragraph).toHaveStyle(`max-width: 650px`)
  })
})
