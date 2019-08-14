import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

import { useLanguages } from '../hooks'

const Locale = styled(Typography).attrs(() => ({
  variant: 'caption',
}))`
  margin-right: 4px;
`

const LanguagesMenu = ({ langAnchor = null, onClose, setCurrentLang }) => {
  const languages = useLanguages()

  const onClickItem = (onClick, language) => {
    onClose()
    setCurrentLang(language)
    onClick()
  }

  return (
    <Menu anchorEl={langAnchor} keepMounted open={Boolean(langAnchor)} onClose={onClose}>
      {languages.map(language => {
        const { label, locale, onClick } = language
        return (
          <MenuItem
            aria-label={label}
            key={label}
            onClick={() => onClickItem(onClick, language)}
            title={label}
          >
            <Locale>{locale}</Locale>
            {label}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

LanguagesMenu.propTypes = {
  // Achor element for the Menu.
  langAnchor: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  // Function called on menu close.
  onClose: PropTypes.func,
  // Setter function for langAnchor.
  setCurrentLang: PropTypes.func,
}

export default LanguagesMenu
