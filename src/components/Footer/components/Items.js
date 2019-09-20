import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  icon: {
    marginRight: 8,
  },
})

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
`

const List = styled.ul`
  list-style-type: none;
  padding 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme: { breakpoints } }) => `
    flex-direction: row;
    li {
      padding: 6px 0px;
      &:not(:last-of-type) {
        margin-right: 48px;
      }
    }
    
    ${breakpoints.down('sm')} {
      flex-direction: column;
      li:not(:last-of-type) {
        margin-right: 0px;
      }
    }
  `}
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

const linkStyle = {
  color: 'secondary',
  variant: 'body2',
}

const ButtonLink = styled(Link).attrs({
  component: 'button',
  ...linkStyle,
})``

const StyledLink = styled(Link).attrs(linkStyle)``

const Items = ({ items = [] }) => {
  const classes = useStyles()

  return (
    <Container>
      <List>
        {items.map((item = {}) => {
          const { icon: Icon, label, href, onClick } = item
          return (
            <Item key={`footer-${label}`}>
              {Icon && <Icon className={classes.icon} color="secondary" />}
              {href ? (
                <StyledLink href={href}>{label}</StyledLink>
              ) : (
                <ButtonLink onClick={onClick}>{label}</ButtonLink>
              )}
            </Item>
          )
        })}
      </List>
    </Container>
  )
}

Items.propTypes = {
  /**
   * The footer's item list.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object]),
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
}

export default Items
