import styled from 'styled-components'
import { Fab } from '@material-ui/core'

const Button = styled(Fab)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  ${({ theme }): string => `
    z-index: ${theme.zIndex.backToTop};
  `}
`

Button.displayName = 'BackToTop-Button'

export default Button
