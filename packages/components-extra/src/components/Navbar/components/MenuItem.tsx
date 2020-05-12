import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '@material-ui/core'
import { useIsDesktop } from '../../../hooks'

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

const MenuItem = forwardRef(
  ({ children, onClick, ...rest }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const closeMenu = useMenuOnClose()
    const isDesktop = useIsDesktop()

    const onMobileItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      onClick && onClick(e)
      closeMenu && closeMenu()
    }

    return (
      <StyledLi isDesktop={isDesktop}>
        <StyledButton onClick={isDesktop ? onClick : onMobileItemClick} ref={ref} {...rest}>
          {children}
        </StyledButton>
      </StyledLi>
    )
  },
) as MenuItemType

MenuItem.displayName = 'Navbar.MenuItem'

export interface StyledLi {
  isDesktop?: boolean
}
export type MenuItemType = React.ForwardRefExoticComponent<ButtonProps> & typeof Button

export { MenuItem as BaseMenuItem }
export default styled(MenuItem)``
