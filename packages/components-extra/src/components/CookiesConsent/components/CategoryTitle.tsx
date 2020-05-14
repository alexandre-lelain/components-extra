import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export default styled(Typography)`
  padding: 0px 4px;
  flex-shrink: 0;
  ${({ theme }): string => `
    ${theme.breakpoints.up('sm')} {
      flex-basis: 20%;
      padding: 0px 12px;
    }
  `}
`
