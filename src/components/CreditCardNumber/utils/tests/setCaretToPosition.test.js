import React, { useRef, useState, useLayoutEffect } from 'react'
import { render } from '@testing-library/react'

import setCaretToPosition from '../setCaretToPosition'

const TestInput = () => {
  const ref = useRef()
  const [value, setValue] = useState('components-extra')

  useLayoutEffect(() => {
    const input = ref.current
    test('setCaretToPosition(input, 0) set caret position to 0', () => {
      setCaretToPosition(input, 0)
      expect(input.selectionStart).toEqual(0)
    })

    test('setCaretToPosition(input, 5) set caret position to 5', () => {
      setCaretToPosition(input, 5)
      expect(input.selectionStart).toEqual(5)
    })
  }, [ref])

  return <input ref={ref} value={value} onChange={e => setValue(e.target.value)} />
}

render(<TestInput />)
