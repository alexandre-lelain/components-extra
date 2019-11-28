import styled from 'styled-components'
import { CardMedia } from '@material-ui/core'

const TopContainer = styled(CardMedia)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `};
  padding: 36px;
`

export default TopContainer
