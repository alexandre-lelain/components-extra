import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  height: 48px;
  width: 48px;
  background-color: ${({ color }) => color};
`

const ColorBox = ({ color, name }) => {
  return (
    <>
      {name}
      <Box color={color} />
      {color}
    </>
  )
}

export default ColorBox
