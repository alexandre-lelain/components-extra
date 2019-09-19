import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Column from './Column'

const Container = styled.div`
  display: flex;
  ${Column}:not(:last-of-type) {
    margin-right: 32px;
  }
`

const Columns = ({ columns = [], items = [] }) => {
  return (
    <Container>
      {columns.map((column, index) => {
        const columnItems = items[index]
        return <Column key={`column-${column}`} title={column} items={columnItems} />
      })}
    </Container>
  )
}

Columns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
      }),
    ),
  ),
}

export default Columns
