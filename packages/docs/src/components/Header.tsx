import React from 'react'
import styled from 'styled-components'
import { Navbar } from 'components-extra'

import { Github, ThemeMode } from '@icons'

const StyledLabel = styled.span`
  margin-left: 8px;
`

const Header: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Brand title="Components-extra" />
      <Navbar.Menu>
        <Navbar.MenuItem
          href="https://github.com/alexandre-lelain/components-extra"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
          <StyledLabel>Github</StyledLabel>
        </Navbar.MenuItem>
        <Navbar.MenuItem onClick={() => alert('qsd')}>
          <ThemeMode />
          <StyledLabel>Mode</StyledLabel>
        </Navbar.MenuItem>
      </Navbar.Menu>
    </Navbar>
  )
}
export default Header
