import React from 'react'
import styled from 'styled-components'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'

import { ComponentExtra } from '../../../types'

const StyledButton = styled(MuiButton)`
  margin-left: 12px;
`

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton color="primary" variant="contained" {...props} />
}

Button.displayName = 'Newsletter.Button'

export type NewsletterButtonType = ComponentExtra<ButtonProps, {}, 'button'>

const ButtonExtra = styled(Button)`` as NewsletterButtonType

export { ButtonProps as NewsletterButtonProps }
export default ButtonExtra