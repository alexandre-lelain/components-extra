import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import isEmpty from 'utils/isEmpty'
import { Typography } from '@material-ui/core'

const Title = styled(Typography)`
  margin-bottom: 12px;
  font-weight: bold;
  ${({ theme }) => `
    color: ${theme.palette.secondary.dark};
  `}
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  ${({ isInline }) => `
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
  ${({ isInline }) => `
    flex-direction: ${isInline ? 'row' : 'column'};
    justify-content: space-evenly;
    width: ${isInline ? '100%' : 'auto'};
  `}
`

const Column = ({ children, className, isInline = false, title = null, ...rest }) => {
  return (
    <Container className={className} isInline={isInline} {...rest}>
      {title && <Title>{title}</Title>}
      {!isEmpty(children) && <List isInline={isInline}>{children}</List>}
    </Container>
  )
}

Column.propTypes = {
  /**
   * The column's title.
   */
  title: PropTypes.string,
  /**
   * Set to true if you want to align the column's items on one horizontal line.
   */
  isInline: PropTypes.bool,
}

const DefaultComponent = styled(Column)``
DefaultComponent.displayName = 'Footer.Column'
DefaultComponent.propTypes = Column.propTypes

export { Column as BaseColumn }
export default DefaultComponent
