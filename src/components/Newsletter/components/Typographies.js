import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Title = styled(Typography).attrs({
  variant: 'h4',
  color: 'primary',
})`
  margin-bottom: 16px;
`

const Description = styled(Typography).attrs({
  variant: 'subtitle1',
  color: 'primary',
})`
  margin-bottom: 24px;
`

const Caption = styled(Typography).attrs({
  variant: 'caption',
  color: 'primary',
})`
  margin-top: 24px;
`

export { Title, Description, Caption }
