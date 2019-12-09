import React from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react'

import resetCSS from '../resetCSS'

describe('resetCSS unit testing', () => {
  const TitleTest = styled.h1`
    ${resetCSS};
  `

  test('TitleTest should have all the resetCSS rules applied', () => {
    const { getByText } = render(<TitleTest>title</TitleTest>)
    const title = getByText('title')
    expect(title).toHaveStyle(`
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      box-shadow: none;
      outline: none;
    `)
  })
})
