import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Button, MenuItem as MuiMenuItem, ButtonProps, MenuItemProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useIsDesktop } from '../../../hooks'

import { useMenuOnClose } from '../hooks'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    '&:hover': {
      backgroundColor: palette.primary.light,
    },
    color: palette.primary.contrastText,
  },
}))

const StyledButton = styled(MuiMenuItem).attrs(() => ({
  underline: 'none',
  button: true,
}))`
  text-transform: none;
  ${({ theme }): string => `
    color: ${theme.palette.primary.contrastText};
  `}
`

const MenuItem = forwardRef(
  ({ children, onClick, ...rest }: MenuItemProps, ref: React.Ref<HTMLLIElement>) => {
    const classes = useStyles()
    const closeMenu = useMenuOnClose()
    const isDesktop = useIsDesktop()

    const onMobileItemClick = (e: React.MouseEvent<HTMLLIElement>): void => {
      onClick && onClick(e)
      closeMenu && closeMenu()
    }

    return isDesktop ? (
      <StyledButton onClick={onClick} ref={ref} {...rest}>
        {children}
      </StyledButton>
    ) : (
      <MuiMenuItem classes={{ root: classes.root }} onClick={onMobileItemClick} ref={ref} {...rest}>
        {children}
      </MuiMenuItem>
    )
  },
) as MenuItemType

MenuItem.displayName = 'Navbar.MenuItem'

export type MenuItemType = React.ForwardRefExoticComponent<MenuItemProps>

export { MenuItem as BaseMenuItem }
export default styled(MenuItem)``
