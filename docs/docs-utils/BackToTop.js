import styled from 'styled-components'

import RealBackToTop from 'components/BackToTop'

export const BackToTop = styled(RealBackToTop)`
  position: relative;
  margin: auto;
  display: flex;
  margin-top: 48px;
`

export const ExtendedBackToTop = styled(BackToTop)`
  background-color: green;
  padding: 38px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px grey;
`