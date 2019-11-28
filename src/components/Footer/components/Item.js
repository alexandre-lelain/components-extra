import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  icon: {
    marginRight: 8,
  },
  button: {
    textTransform: 'none',
  },
})

const Container = styled.li`
  display: flex;
  align-items: center;
`

const Item = ({ className, children, icon: Icon, href = null, onClick = null, ...rest }) => {
  const classes = useStyles()

  return (
    <Container className={className}>
      <Button
        className={classes.button}
        color="secondary"
        href={href}
        onClick={onClick}
        startIcon={<Icon />}
        {...rest}
      >
        {children}
      </Button>
    </Container>
  )
}

Item.propTypes = {
  /**
   * The item's icon.
   */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  /**
   * If this prop is set, the item becomes a link.
   */
  href: PropTypes.string,
  /**
   * The item's on click function.
   */
  onClick: PropTypes.func,
  /**
   * Material's UI Button props: https://material-ui.com/api/button/.
   */
  rest: PropTypes.object,
}

const DefaultComponent = styled(Item)``
DefaultComponent.displayName = 'Footer.Item'
DefaultComponent.propTypes = Item.propTypes

export { Item as BaseItem }
export default DefaultComponent
