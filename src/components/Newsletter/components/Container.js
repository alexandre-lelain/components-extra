import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export default styled(Paper)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main};
  `}
`
