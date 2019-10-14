import React, { useRef, useLayoutEffect } from 'react'
import renderer from 'react-test-renderer'

import BackToTop from '..'

describe('BackToTop testing', () => {
  let testRef = { current: undefined }

  const TestBackToTop = () => {
    const ref = useRef()

    useLayoutEffect(() => {
      testRef = ref
    }, [])

    return <BackToTop ref={ref} />
  }

  const component = renderer.create(<TestBackToTop />)
  const tree = component.toJSON()

  test('BackToTop button renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })

  test('BackToTop button forwards the given ref correctly.', () => {
    expect(testRef.current).not.toBeUndefined()
  })
})
