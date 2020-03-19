import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'

import Form from './Form'
import PaletteIcon from './PaletteIcon'

const a11yText = 'Customize the theme'

const StyledFab = styled(Fab).attrs(() => ({
  color: 'primary',
}))`
  position: fixed;
  right: 24px;
  bottom: 24px;
  ${({ theme }) => `
    z-index: ${theme.zIndex.backToTop};
  `}
`

const ThemePicker = ({ onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <StyledFab aria-label={a11yText} title={a11yText} onClick={handleClick}>
        <PaletteIcon />
      </StyledFab>
      <Form open={open} anchorEl={anchorEl} onClose={handleClose} onChange={onChange} />
    </>
  )
}

ThemePicker.propTypes = {
  onChange: PropTypes.func,
}

export default ThemePicker
