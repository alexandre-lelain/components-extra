import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ComponentExtra } from '../../../types'

const useStyles = makeStyles(({ palette }) => ({
  label: {
    wordBreak: 'break-word',
    color: palette.primary.contrastText,
    borderColor: palette.primary.contrastText,
  },
}))

const CookiesButton: React.FC<ButtonProps> = ({ className, href, ...rest }: ButtonProps) => {
  const classes = useStyles()

  return (
    <Button
      className={className ? `${className} ${classes.label}` : classes.label}
      href={href}
      role={href ? 'link' : 'button'}
      size="small"
      variant="outlined"
      {...rest}
    />
  )
}

CookiesButton.displayName = 'CookiesBanner.Button'

export type CookiesButtonType = ComponentExtra<ButtonProps, Record<string, unknown>, 'button'>

const CookiesButtonExtra = styled(CookiesButton)`` as CookiesButtonType

export { ButtonProps as CookiesButtonProps }
export default CookiesButtonExtra
