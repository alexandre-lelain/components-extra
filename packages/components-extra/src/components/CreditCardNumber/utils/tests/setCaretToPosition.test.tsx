import React from 'react'
import { render } from '@testing-library/react'

import setCaretToPosition from '../setCaretToPosition'

test('setCaretToPosition(input, 0) set caret position to 0', () => {
  const { getByTestId } = render(<input data-testid="my-input" />)
  const input = getByTestId('my-input') as HTMLInputElement
  setCaretToPosition(input, 0)
  expect(input.selectionStart).toEqual(0)
})

test('setCaretToPosition(input, 5) set caret position to 5', () => {
  const { getByTestId } = render(<input data-testid="my-input" defaultValue="components-extra" />)
  const input = getByTestId('my-input') as HTMLInputElement
  setCaretToPosition(input, 5)
  expect(input.selectionStart).toEqual(5)
})
