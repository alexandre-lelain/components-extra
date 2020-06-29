import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MenuItem, MenuItemProps } from '@material-ui/core'

import { useLanguageOnClose } from '../hooks'
import { ComponentExtra } from '../../../types'

const LanguageItem: React.FC<NavbarLanguageItemProps> = ({ children, forwardedRef, label = '', onClick, ...rest }: NavbarLanguageItemProps) => {
  const onMenuClose = useLanguageOnClose()

  const onItemClick = (): void => {
    onMenuClose && onMenuClose()
    onClick && onClick()
  }

  return (
    <MenuItem aria-label={label} onClick={onItemClick} title={label} ref={forwardedRef} {...rest} button>
      {children}
    </MenuItem>
  )
}

LanguageItem.displayName = 'Navbar.LanguageItem'

LanguageItem.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export interface NavbarLanguageItemProps extends MenuItemProps {
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLLIElement>
  /**
   * The language item's label. Used for the meta props of the element.
   */
  label?: string
  /**
   * The language item's onclick function. Called when the language is selected in the menu.
   */
  onClick?: () => void
}

export type NavbarLanguageItemType = ComponentExtra<NavbarLanguageItemProps>

const LanguageItemExtra = styled(
  forwardRef((props: NavbarLanguageItemProps, ref: React.Ref<HTMLLIElement>) => <LanguageItem {...props} forwardedRef={ref}/>)
)`` as NavbarLanguageItemType

export default LanguageItemExtra
