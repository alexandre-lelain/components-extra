import React, { useState, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Menu, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useIsDesktop } from '../../../hooks'
import { ComponentExtra } from '../../../types'

import { OnCloseLanguageProvider } from '../hooks'

import DownArrowIcon from './DownArrowIcon'
import TranslateIcon from './TranslateIcon'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.primary.contrastText,
  },
}))

const Language: React.FC<NavbarLanguageProps> = ({
  children,
  smallScreenSupport = true,
  selectedLanguage = '',
  ...rest
}: NavbarLanguageProps) => {
  const classes = useStyles()
  const [langAnchor, setLangAnchor] = useState<HTMLButtonElement>()
  const isLargeScreen = useIsDesktop()

  const currentLanguage = useMemo(() => {
    if (smallScreenSupport && !isLargeScreen) {
      return selectedLanguage.substr(0, 2)
    }
    return selectedLanguage
  }, [selectedLanguage, smallScreenSupport, isLargeScreen])

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

export interface NavbarLanguageProps extends ButtonProps {
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

export type NavbarLanguageType = ComponentExtra<NavbarLanguageProps>

const LanguageExtra = styled(Language)`` as NavbarLanguageType

export default LanguageExtra
