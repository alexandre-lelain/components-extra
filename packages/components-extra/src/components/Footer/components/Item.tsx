import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  text: {
    textTransform: 'none',
    color: palette.primary.contrastText,
  },
  startIcon: {
    fill: palette.primary.contrastText,
  },
}))

const Container = styled.li`
  display: flex;
  align-items: center;
`

const Item: ItemType = ({ className, children, icon, ...rest }: ItemProps) => {
  const classes = useStyles()

  return (
    <Container className={className}>
      <Button
        classes={{
          startIcon: classes.startIcon,
          text: classes.text,
        }}
        startIcon={icon}
        {...rest}
      >
        {children}
      </Button>
    </Container>
  )
}

Item.displayName = 'Footer.Item'

Item.propTypes = {
  /**
   * The item's icon.
   */
  icon: PropTypes.node,
}

export interface ItemProps extends ButtonProps {
  /**
   * The item's icon.
   */
  icon?: React.ReactNode
}

export type ItemType = React.FunctionComponent<ItemProps>

export { Item as BaseItem }
export default styled(Item)``
