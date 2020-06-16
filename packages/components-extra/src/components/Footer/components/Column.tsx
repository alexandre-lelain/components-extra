import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Typography } from '@material-ui/core'

const Title = styled(Typography)`
  margin-bottom: 12px;
  font-weight: bold;
  ${({ theme }): string => `
    color: ${theme.palette.primary.contrastText};
    filter: brightness(75%);
  `}
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  ${({ isInline }: StyledProps): string => `
    width: ${isInline ? '100%' : 'auto'};
  `}
`

const List = styled.ul`
  list-style-type: none;
  padding 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${({ isInline }: StyledProps): string => `
    flex-direction: ${isInline ? 'row' : 'column'};
    justify-content: space-evenly;
    width: ${isInline ? '100%' : 'auto'};
  `}
`

const Column: ColumnType = ({ children, isInline = false, title, ...rest }: ColumnProps) => {
  return (
    <Container isInline={isInline} {...rest}>
      {title && <Title>{title}</Title>}
      {children && <List isInline={isInline}>{children}</List>}
    </Container>
  )
}

Column.displayName = 'Footer.Column'

Column.propTypes = {
  children: PropTypes.node,
  isInline: PropTypes.bool,
  title: PropTypes.string,
}

export interface ColumnProps {
  /**
   * The children nodes to render inside the column.
   */
  children?: React.ReactNode
  /**
   * Set to true if you want to align the column's items on one horizontal line.
   */
  isInline?: boolean
  /**
   * The column's title.
   */
  title?: string
}

export interface StyledProps {
  isInline: boolean
}

export type ColumnType = React.FunctionComponent<ColumnProps>

export { Column as BaseColumn }
export default styled(Column)``
