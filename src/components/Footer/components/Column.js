import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, Typography } from '@material-ui/core'

import isEmpty from 'utils/isEmpty'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
`

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const Title = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.palette.secondary.light};
  `}
`

const Column = ({ className, items = [], title = null }) => {
  return (
    <Container className={className}>
      {!!title && (
        <Title variant="h5" color="secondary">
          {title}
        </Title>
      )}
      {!isEmpty(items) && (
        <List>
          {items.map((item = {}) => {
            const { label, href } = item
            return (
              <li key={`footer-${label}`}>
                {href ? (
                  <Link color="secondary" href={href}>
                    {label}
                  </Link>
                ) : (
                  <Typography color="secondary" variant="body2">
                    {label}
                  </Typography>
                )}
              </li>
            )
          })}
        </List>
      )}
    </Container>
  )
}

Column.propTypes = {
  /**
   * The colum's items/
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  /**
   * The column's title.
   */
  title: PropTypes.string,
}

export default styled(Column)``
