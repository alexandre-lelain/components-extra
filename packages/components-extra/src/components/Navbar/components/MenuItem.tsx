import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '@material-ui/core'

import { useIsDesktop } from '../../../hooks'
import { ComponentExtra } from '../../../types'

import { useMenuOnClose } from '../hooks'

const StyledButton = styled(Button).attrs(() => ({
  underline: 'none',
}))`
  text-transform: none;
  ${({ theme }): string => `
    color: ${theme.palette.primary.contrastText};
  `}
`

const StyledLi = styled('li')`
  list-style: none;
  ${({ isDesktop }: StyledLi): string => `
    ${StyledButton} {
      ${
        isDesktop
          ? ''
          : `
        padding: 8px 16px;
        width: 100%;
        justify-content: flex-start;
      `
      };
    }
  `}
`

const MenuItem: React.FC<NavbarMenuItemProps> = ({ children, forwardedRef, onClick, ...rest }: NavbarMenuItemProps) => {
  const closeMenu = useMenuOnClose()
  const isDesktop = useIsDesktop()

  const onMobileItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onClick && onClick(e)
    closeMenu && closeMenu()
  }

  return (
    <StyledLi isDesktop={isDesktop}>
      <StyledButton onClick={isDesktop ? onClick : onMobileItemClick} ref={forwardedRef} {...rest}>
        {children}
      </StyledButton>
    </StyledLi>
  )
}

MenuItem.displayName = 'Navbar.MenuItem'

export interface NavbarMenuItemProps extends ButtonProps {
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>
}

export interface StyledLi {
  isDesktop?: boolean
}

export type NavbarMenuItemType = ComponentExtra<NavbarMenuItemProps, {}, 'a'>

const MenuItemExtra = styled(
  forwardRef((props: NavbarMenuItemProps, ref: React.Ref<HTMLButtonElement>) => <MenuItem {...props} forwardedRef={ref} />)
)`` as NavbarMenuItemType


export default MenuItemExtra
