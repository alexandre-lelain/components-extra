import React from 'react'
import styled from 'styled-components'
import { Navbar } from 'components-extra'

import { Github, Light, Dark } from '@icons'
import { useMode } from '@theme'
import { useStaticQuery, graphql } from 'gatsby'

const StyledLabel = styled.span`
  margin-left: 8px;
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
  const [dark, setDark] = useMode()

  return (
    <Navbar position="fixed">
      <Navbar.Brand title="Components-extra" />
      <Navbar.Menu>
        <Navbar.MenuItem href={github} target="_blank" rel="noreferrer noopener">
          <Github />
          <StyledLabel>Github</StyledLabel>
        </Navbar.MenuItem>
        <Navbar.MenuItem onClick={(): void => setDark((dark) => !dark)}>
          {dark ? <Dark /> : <Light />}
          <StyledLabel>Mode</StyledLabel>
        </Navbar.MenuItem>
      </Navbar.Menu>
    </Navbar>
  )
}
export default Header
