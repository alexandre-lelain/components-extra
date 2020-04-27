import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

import { useBig } from '../hooks/Context'

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.links,
  },
}))

const CardButton = ({ className, ...rest }: ButtonProps): JSX.Element => {
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

export { CardButton as BaseCardButton }
export default styled(CardButton)``
