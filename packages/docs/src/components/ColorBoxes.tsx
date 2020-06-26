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
  ${({ color }): string => `
    ${color ? `background-color: ${color}` : ''}
  `};
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

const isColor = (str: string): boolean => /#[a-z,0-9]{3,6}|rgb/gi.test(str)

const isLeaf = (node: any): boolean => typeof node === "string"

const isNode = (node: any): boolean => typeof node === "object"

const PaletteNode: React.FC<PaletteNodeProps> = ({ node = {}, name}: PaletteNodeProps) => {
  return (
    <ColorsNode>
      <ColotsSuiteTitle>{name}</ColotsSuiteTitle>
      <ColorsSuite>
        {map(node, (color, name = '') => {
          if (isLeaf(color) && isColor(color)) {
            return <ColorBox color={color} name={name} key={name} />
          }
        })}
      </ColorsSuite>
    </ColorsNode>
  )
}

const getLeaves = (palette: PaletteOptions): object => reduce(palette, (leaves: NodesType, value, name) => {
  if (isLeaf(value) && isColor(value as string)) {
    leaves[name] = value
  }
  return leaves
}, {})

const getNodes = (palette: PaletteOptions): object => reduce(palette, (nodes: NodesType, value, name) => {
  if (isNode(value)) {
    nodes[name] = value
  }
  return nodes
}, {})

const ColorBoxesList: React.FC = () => {
  const { palette } = useTheme()
  const leaves = getLeaves(palette)
  const nodes = getNodes(palette)
  const sortedPalette = { ...nodes, ...leaves }

  return (
    <>
      {map(sortedPalette, (node, name) => {
        if (isNode(node)) {
          return <PaletteNode node={node} name={name} key={name}/>
        }
        if (isLeaf(node) && isColor(node)) {
          return <ColorBox color={node} name={name} key={name} />
        }
      })}
    </>
  )
} 

const ColorBox: React.FC<ColorBoxProps> = ({ color, name }: ColorBoxProps) => {
  return (
    <BoxContainer>
      <Typography variant="body1" color="textPrimary">{name}</Typography>
      <Box color={color} />
      <Typography variant="body2" color="textPrimary">{color}</Typography>
    </BoxContainer>
  )
}

const ColorBoxes: React.FC = () => {
  return (
    <BoxesContainer>
      <ColorBoxesList />
    </BoxesContainer>
  )
}

type NodesType = {
  [key: string]: any
}

interface ColorBoxProps {
  color: string
  name: string
}

interface PaletteNodeProps {
  name: string
  node: object
}

export default ColorBoxes
