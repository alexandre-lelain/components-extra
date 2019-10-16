import React, { useRef, useLayoutEffect } from 'react'
import { render } from '@testing-library/react'
import Paragraph, { MAX_WIDTH } from '..'

describe('Paragraph', () => {
  const TestParagraph = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      test('it forwards the given ref correctly', () => {
        expect(ref.current).not.toBeFalsy()
      })
    }, [ref])

    return <Paragraph ref={ref} />
  }

  render(<TestParagraph />)

  test('it renders correctly', () => {
    const { container } = render(<Paragraph />)
    const paragraph = container.firstChild
    expect(paragraph).toBeInTheDocument()
  })

  test('it has a max-width of ' + MAX_WIDTH, () => {
    const { container } = render(<Paragraph />)
    const paragraph = container.firstChild
    expect(paragraph).toHaveStyle(`max-width: ${MAX_WIDTH}`)
  })
})
