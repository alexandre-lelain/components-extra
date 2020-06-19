import React from 'react'
import styled, { css, ThemedCssFunction } from 'styled-components'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

import { isAnchor } from '@utils'
import { useMode } from '@theme'

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

const getColor: ThemedCssFunction = ({ isDark, secondary, theme: { palette } }) => {
  if (secondary) {
    return css`
      color: ${isDark ? palette.secondary.light : palette.secondary.main};
    `
  }
  return css`
    color: ${palette.links};
  `
}

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = styled(({ isDark, secondary, to, ...rest }) => <GatsbyLink to={to} {...rest} />)`
  ${linkStyle};
`

const InternalLink: JSX.Element = ({ secondary = false, ...rest }: InternalLinkProps) => {
  const [ mode ] = useMode()
  const props = { isDark: mode === 'dark', secondary, ...rest }
  return <StyledLink {...props} />
}

const Link: JSX.Element = ({ href, ...rest }: LinkProps) => {
  const isAnchorLink = isAnchor(href)

  return isAnchorLink ? (
    <InternalLink to={href} {...rest} />
  ) : (
    <ExternalLink href={href} {...rest} />
  )
}

interface LinkProps {
  href: string
  rest?: object
}

interface InternalLinkProps {
  secondary?: boolean
}

export default Link