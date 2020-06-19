import React from 'react'
import styled from 'styled-components'
import { map, reduce } from 'lodash-es'
import { Paper, Typography, useTheme } from '@material-ui/core'

import { Title3 } from './Titles'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 32px 12px 0px;
`

const Box = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  margin: 8px 0px;
  background-color: ${({ color }): string => color};
`

const ColorsNode = styled(Paper)`
  margin: 24px 0px;
  width: 100%;
  padding: 24px;
`

const ColorsSuite = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`

const ColotsSuiteTitle = styled(Title3)`
  margin-top: 0;
`

const isColor: boolean = (str: string) => /#[a-z,0-9]{3,6}|rgb/gi.test(str)

const isLeaf: boolean = (node: any) => typeof node === "string"

const isNode: boolean = (node: any) => typeof node === "object"

const renderPaletteNode: JSX.Element = (node: {}, name: string) => (
  <ColorsNode key={name}>
    <ColotsSuiteTitle>{name}</ColotsSuiteTitle>
    <ColorsSuite>
      {map(node, (color, name) => {
        if (isLeaf(color) && isColor(color)) {
          return <ColorBox color={color} name={name} key={name} />
        }
      })}
    </ColorsSuite>
  </ColorsNode>
)

const getLeaves: object = (palette: PaletteOptions) => reduce(palette, (leaves, value, name) => {
  if (isLeaf(value) && isColor(value)) {
    leaves[name] = value
  }
  return leaves
}, {})

const getNodes: object = (palette: PaletteOptions) => reduce(palette, (nodes, value, name) => {
  if (isNode(value)) {
    nodes[name] = value
  }
  return nodes
}, {})

const renderColorBoxes: JSX.Element = (palette: PaletteOptions) => {
  const leaves = getLeaves(palette)
  const nodes = getNodes(palette)
  const sortedPalette = { ...nodes, ...leaves }

  return map(sortedPalette, (node, name) => {
    if (isNode(node)) {
      return renderPaletteNode(node, name)
    }
    if (isLeaf(node) && isColor(node)) {
      return <ColorBox color={node} name={name} key={name} />
    }
  })
} 

const ColorBox: JSX.Element = ({ color, name }: ColorBoxProps) => {
  return (
    <BoxContainer>
      <Typography variant="body1" color="textPrimary">{name}</Typography>
      <Box color={color} />
      <Typography variant="body2" color="textPrimary">{color}</Typography>
    </BoxContainer>
  )
}

const ColorBoxes: JSX.Element = () => {
  const { palette } = useTheme()
  return <BoxesContainer>{renderColorBoxes(palette)}</BoxesContainer>
}

interface ColorBoxProps {
  color: string
  name: string
}

export default ColorBoxes
