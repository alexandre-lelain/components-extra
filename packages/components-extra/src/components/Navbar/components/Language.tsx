import React, { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Menu, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useIsSmallScreen } from '../../../hooks'

import { OnCloseLanguageProvider } from '../hooks'

import DownArrowIcon from './DownArrowIcon'
import TranslateIcon from './TranslateIcon'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.primary.contrastText,
  },
}))

const Language: LanguageType = ({
  children,
  smallScreenSupport = true,
  selectedLanguage = '',
  ...rest
}: LanguageProps) => {
  const classes = useStyles()
  const [langAnchor, setLangAnchor] = useState<HTMLButtonElement>()
  const isVerySmallScreen = useIsSmallScreen()
  const currentLanguage =
    smallScreenSupport && isVerySmallScreen ? selectedLanguage.substr(0, 2) : selectedLanguage

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setLangAnchor(event.currentTarget)
  }

  const onCloseMenu = (): void => setLangAnchor(undefined)

  return (
    <OnCloseLanguageProvider onClose={onCloseMenu}>
      <Button
        classes={{ root: classes.root }}
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

Language.displayName = 'Navbar.Language'

Language.propTypes = {
  smallScreenSupport: PropTypes.bool,
  selectedLanguage: PropTypes.string,
}

export interface LanguageProps extends ButtonProps {
  /**
   * If set to true, only the 2 first characters of the selectedLanguage will be displayed
   * for very small screens to provide a better responsive design.
   * Set to false to leave the selectedLanguage as it is.
   */
  smallScreenSupport?: boolean
  /**
   * The language's menu selected language.
   */
  selectedLanguage?: string
}

export type LanguageType = React.FunctionComponent<LanguageProps> & typeof Button

export { Language as BaseLanguage }
export default styled(Language)``
