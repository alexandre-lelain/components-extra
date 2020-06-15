import styled from 'styled-components'
import { CookiesBanner } from 'components-extra'

export const StyledCookiesBanner = styled(CookiesBanner)`
  position: sticky;
  bottom: 0px;
`

export const ExtendedCookiesBanner = styled(CookiesBanner)`
  background-color: #3377ff;
  padding: 38px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px grey;
`

export const ExtendedButton = styled(CookiesBanner.Button)`
  background-color: #3377ff;
  color: white;
  border-radius: 32px;
`