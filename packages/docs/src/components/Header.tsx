import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Navbar } from 'components-extra'

import { Github, Light, Dark } from '@icons'
import { useMode } from '@theme'
import { useStaticQuery, graphql } from 'gatsby'

const StyledLabel = styled.span`
  margin-left: 8px;
`

const StyledNavbar = styled(Navbar)`
  ${({ theme: { zIndex } }): string => `
    z-index: calc(${zIndex.appBar} + 1);
  `}
`

const Header: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          github
        }
      }
    }
  `)

  const { github } = siteMetadata
  const [ mode, setMode ] = useMode()

  const dark = mode === 'dark'

  const toggleMode = useCallback(() => {
    const nextMode = mode === 'dark' ? 'light' : 'dark'
    setMode(nextMode)
  }, [setMode, mode])

  return (
    <StyledNavbar>
      <Navbar.Brand title="Components-extra" />
      <Navbar.Menu>
        <Navbar.MenuItem href={github} target="_blank" rel="noreferrer noopener">
          <Github />
          <StyledLabel>Github</StyledLabel>
        </Navbar.MenuItem>
        <Navbar.MenuItem onClick={toggleMode}>
          {dark ? <Dark /> : <Light />}
          <StyledLabel>Mode</StyledLabel>
        </Navbar.MenuItem>
      </Navbar.Menu>
    </StyledNavbar>
  )
}
export default Header
