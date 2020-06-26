import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

import { useBig } from '../hooks/Context'
import { ComponentExtra } from '../../../types'

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.links,
  },
}))

const CardButton: React.FC<ButtonProps> = ({ className, ...rest }: ButtonProps) => {
  const classes = useStyles()
  const big = useBig()

  return (
    <Button
      className={`${className} ${classes.button}`}
      size={big ? 'medium' : 'small'}
      {...rest}
    />
  )
}

CardButton.displayName = 'Card.Button'

export type CardButtonType = ComponentExtra<ButtonProps, {}, 'a'>

const CardButtonExtra = styled(CardButton)`` as CardButtonType

export { ButtonProps as CardButtonProps }
export default CardButtonExtra
