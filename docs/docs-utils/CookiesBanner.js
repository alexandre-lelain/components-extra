import styled from 'styled-components'
import CookiesBanner from 'components/CookiesBanner'

export const StyledCookiesBanner = styled(CookiesBanner)`
  position: sticky;
  bottom: 0px;
`

export const ExtendedCookiesBanner = styled(CookiesBanner)`
  background-color: green;
  padding: 38px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px grey;
`

export const ExtendedButton = styled(CookiesBanner.Button)`
  background-color: green;
  color: white;
  border-radius: 32px;
`