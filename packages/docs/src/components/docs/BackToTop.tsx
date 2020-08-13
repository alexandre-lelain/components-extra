import styled, { css } from 'styled-components'

import { BackToTop as RealBackToTop } from 'components-extra'

const sharedStyle = css`
  ${({ theme: { zIndex } }) => `
    z-index: calc(${zIndex.appBar} - 1);
  `}
`

export const BackToTop = styled(RealBackToTop)`
  visibility: visible !important;
  transform: scale(1) !important;
  position: relative;
  margin: auto;
  display: flex;
  margin-top: 48px;
  ${sharedStyle};
`

export const ExtendedBackToTop = styled(BackToTop)`
  background-color: #3377ff;
  padding: 38px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px grey;
  ${sharedStyle};
`
