import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton, Menu as MuiMenu, IconButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useIsDesktop } from '../../../hooks'

import { OnCloseMenuProvider } from '../hooks'
import MenuIcon from './MenuIcon'

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const DesktopContainer = styled.ol`
  display: flex;
  list-style: none;
  margin: 0;
`

const Menu: MenuType = ({ children, iconProps = {}, label = '', ...rest }: MenuProps) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement>()
  const classes = useStyles()
  const isDesktop = useIsDesktop()

  const onMenuOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
    setMenuAnchor(event.currentTarget)

  const onMenuClose = (): void => setMenuAnchor(undefined)

  React.useEffect(() => {
    if (isDesktop) {
      onMenuClose()
    }
  }, [isDesktop])

  return isDesktop ? (
    <DesktopContainer {...rest}>{children}</DesktopContainer>
  ) : (
    <>
      <IconButton aria-label={label} onClick={onMenuOpen} title={label} {...iconProps}>
        <MenuIcon />
      </IconButton>
      <OnCloseMenuProvider onClose={onMenuClose}>
        <MuiMenu
          anchorEl={menuAnchor}
          classes={{ paper: classes.menu }}
          keepMounted
          open={Boolean(menuAnchor)}
          onClose={onMenuClose}
        >
          {children}
        </MuiMenu>
      </OnCloseMenuProvider>
    </>
  )
}

Menu.displayName = 'Navbar.Menu'

Menu.propTypes = {
  /**
   * The props to pass to the MUI's IconButton when not in desktop mode.
   */
  iconProps: PropTypes.object,
  /**
   * The label of the menu's hamburger icon when viewport is mobile. Used for its meta props.
   */
  label: PropTypes.string,
}

export interface MenuProps {
  /**
   * The options of the menu.
   */
  children?: React.ReactNode
  /**
   * The props to pass to the MUI's IconButton when not in desktop mode.
   */
  iconProps?: IconButtonProps
  /**
   * The label of the menu's hamburger icon when viewport is mobile. Used for its meta props.
   */
  label?: string
}

export type MenuType = React.FunctionComponent<MenuProps>

export { Menu as BaseMenu }
export default styled(Menu)``
