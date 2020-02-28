import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash-es'
import { Typography } from '@material-ui/core'

const BoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32px;
`

const Box = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  margin: 4px 0px;
  background-color: ${({ color }) => color};
`

const isColor = str => /#[a-z,0-9]{6}/gi.test(str)

const ColorBox = ({ color, name }) => {
  return (
    <BoxContainer>
      {name}
      <Box color={color} />
      <Typography variant="body2">{color}</Typography>
    </BoxContainer>
  )
}

const ColorBoxes = ({ palette = {} }) => {
  return (
    <BoxesContainer>
      {map(palette, (value, name) => {
        const { main } = value
        const color = main || value

        return isColor(color) ? <ColorBox color={color} name={name} key={name} /> : null
      })}
    </BoxesContainer>
  )
}

export default ColorBoxes
