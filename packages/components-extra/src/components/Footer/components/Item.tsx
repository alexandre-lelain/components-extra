import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

import { ComponentExtra } from '../../../types'

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

const Item: React.FC<FooterItemProps> = ({ className, children, icon, ...rest }: FooterItemProps) => {
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
  icon: PropTypes.node,
}

export interface FooterItemProps extends ButtonProps {
  /**
   * The item's icon.
   */
  icon?: React.ReactNode
}

export type FooterItemType = ComponentExtra<FooterItemProps>

const ItemExtra = styled(Item)`` as FooterItemType

export default ItemExtra
