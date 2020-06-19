import styled from 'styled-components'
import React from 'react'
import { Link, Typography } from '@material-ui/core'

import { Footer } from 'components-extra'

const StyledLink = styled(Link)`
  color: #a6a6a6;
`

const Icon = styled.svg.attrs(() => ({
  'aria-hidden': 'true',
  focusable: false,
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}))`
  height: 24px;
  width: 24px;
`

export const AccountCircle: React.FC = props => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
  </Icon>
)

export const Code: React.FC = props => (
  <Icon {...props}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
  </Icon>
)

export const Email: React.FC = props => (
  <Icon {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
  </Icon>
)

export const YourOwnBanner: React.FC = () => (
  <Typography>
    © Copyrights <StyledLink href="/">Awesome website</StyledLink>
  </Typography>
)

export const ExtendedFooter = styled(Footer)`
  background-color: #3377ff;
  border-radius: 32px;
`
export const ExtendedColumn = styled(Footer.Column)`
  box-shadow: 2px 2px 2px 2px white;
  border-radius: 3px;
  padding: 32px;
  background-color: #3377ff;
`
export const ExtendedItem = styled(Footer.Item)`
  * {
    color: #ccccff;
    font-size: 24px;
  }
`

export const ExtendedFooterItem = styled(Footer.Item)`
  * {
    color: white;
  }
  background-color: #3377ff;
  border-radius: 3px;
  width: max-content;
`
