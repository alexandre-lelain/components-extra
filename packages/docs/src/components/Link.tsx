import React from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

import { isInternalLink } from '@utils'
import { StyledCompoProps } from '@theme'

const ExternalLink = styled(MuiLink).attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  ${({ theme: { palette } }): string => `
    color: ${palette.links};
    text-decoration: none;
    &:visited {
      color: ${palette.links};
      text-decoration: none;
    }
  `}
`

const getColor = ({ theme: { palette } }: StyledCompoProps): SimpleInterpolation => css`
  color: ${palette.links};
`

const linkStyle = css`
  ${getColor};
  display: inline-block;
  text-decoration: none;
  &:visited {
    ${getColor};
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(GatsbyLink)`
  ${linkStyle};
`

const Link: React.FC<LinkProps> = ({ href, ...rest }: LinkProps) => {
  const isInternal = isInternalLink(href)

  return isInternal ? <StyledLink to={href} {...rest} /> : <ExternalLink href={href} {...rest} />
}

interface LinkProps {
  href: string
}

export default Link
