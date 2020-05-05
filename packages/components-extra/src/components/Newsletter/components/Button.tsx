import React from 'react'
import styled from 'styled-components'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'

const StyledButton = styled(MuiButton)`
  margin-left: 12px;
`

const Button: ButtonType = (props: ButtonProps) => {
  return <StyledButton color="primary" variant="contained" {...props} />
}

Button.displayName = 'Newsletter.Button'

export type ButtonType = React.FunctionComponent<ButtonProps>

export { Button as BaseButton }
export default styled(Button)``
