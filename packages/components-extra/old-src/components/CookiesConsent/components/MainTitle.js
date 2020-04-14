import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export default styled(Typography).attrs(() => ({
  variant: 'h6',
}))`
  text-align: center;
  padding: 12px;
  ${({ theme }) => `
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    border-radius: ${theme.shape.borderRadius}px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}
`
