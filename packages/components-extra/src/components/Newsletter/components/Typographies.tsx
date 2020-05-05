import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Title = styled(Typography).attrs(() => ({
  variant: 'h4',
}))`
  margin-bottom: 16px;
`

const Description = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
}))`
  margin-bottom: 24px;
`

const Caption = styled(Typography).attrs(() => ({
  variant: 'caption',
}))`
  margin-top: 24px;
`

export { Title, Description, Caption }
