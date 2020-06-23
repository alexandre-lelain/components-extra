import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginLeft: 12,
  },
  label: {
    wordBreak: 'break-word',
  },
})

const ConsentButton: ConsentButtonType = ({ className = '', ...rest }: ButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      className={`${className} ${classes.label} ${classes.root}`}
      color="primary"
      variant="contained"
      {...rest}
    />
  )
}

ConsentButton.displayName = 'CookiesConsent.Button'

export type ConsentButtonType = React.FunctionComponent<ButtonProps>

export { ConsentButton as BaseConsentButton, ButtonProps as ConsentButtonProps }
export default styled(ConsentButton)``
