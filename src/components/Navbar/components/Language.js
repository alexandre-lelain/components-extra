import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Menu } from '@material-ui/core'

import { useIsSmallScreen } from 'hooks'

import { OnCloseLanguageProvider } from '../hooks'

import DownArrowIcon from './DownArrowIcon'
import TranslateIcon from './TranslateIcon'

const Language = ({
  className,
  children,
  smallScreenSupport = true,
  selectedLanguage = '',
  ...rest
}) => {
  const [langAnchor, setLangAnchor] = useState(null)
  const isVerySmallScreen = useIsSmallScreen()
  const currentLanguage =
    smallScreenSupport && isVerySmallScreen ? selectedLanguage.substr(0, 2) : selectedLanguage

  const onOpenMenu = event => {
    setLangAnchor(event.currentTarget)
  }

  const onCloseMenu = () => setLangAnchor(null)

  return (
    <OnCloseLanguageProvider onClose={onCloseMenu}>
      <Button
        className={className}
        color="secondary"
        endIcon={<DownArrowIcon />}
        startIcon={<TranslateIcon />}
        onClick={onOpenMenu}
        {...rest}
      >
        {currentLanguage}
      </Button>
      <Menu anchorEl={langAnchor} keepMounted open={Boolean(langAnchor)} onClose={onCloseMenu}>
        {children}
      </Menu>
    </OnCloseLanguageProvider>
  )
}

Language.propTypes = {
  /**
   * If set to true, only the 2 first characters of the selectedLanguage will be displayed
   * for very small screens to provide a better responsive design.
   * Set to false to leave the selectedLanguage as it is.
   */
  smallScreenSupport: PropTypes.bool,
  /**
   * The language's menu selected language.
   */
  selectedLanguage: PropTypes.string,
  /**
   * Material's UI Button props: https://material-ui.com/api/button/. As well as any other prop you would like to pass to the button.
   */
  '...rest': PropTypes.object,
}

const DefaultComponent = styled(Language)``
DefaultComponent.displayName = 'Navbar.Language'
DefaultComponent.propTypes = Language.propTypes

export { Language as BaseLanguage }
export default DefaultComponent
