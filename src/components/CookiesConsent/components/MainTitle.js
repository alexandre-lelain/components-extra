import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export default styled(Typography).attrs({
  variant: 'h6',
  color: 'secondary',
})`
  text-align: center;
  padding: 16px 8px;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    border-radius: ${theme.shape.borderRadius}px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}
`
