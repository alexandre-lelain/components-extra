import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps, ExtendButtonBase, ButtonTypeMap } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ComponentExtra } from '../../../types'

const useStyles = makeStyles({
  root: {
    marginLeft: 12,
  },
  label: {
    wordBreak: 'break-word',
  },
})

const ConsentButton: React.FC<ButtonProps> = ({ className = '', ...rest }: ButtonProps) => {
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

export type CookiesConsentButtonType = ComponentExtra<ButtonProps> & ExtendButtonBase<ButtonTypeMap>

const ConsentButtonExtra = styled(ConsentButton)`` as CookiesConsentButtonType

export { ButtonProps as CookiesConsentButtonProps }
export default ConsentButtonExtra
