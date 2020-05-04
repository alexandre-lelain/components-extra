import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MenuItem, MenuItemProps } from '@material-ui/core'

import { useLanguageOnClose } from '../hooks'

const LanguageItem = forwardRef(
  (
    { children, label = '', onClick, ...rest }: LanguageItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {
    const onMenuClose = useLanguageOnClose()

    const onItemClick = (): void => {
      onMenuClose && onMenuClose()
      onClick && onClick()
    }

    return (
      <MenuItem aria-label={label} onClick={onItemClick} title={label} ref={ref} {...rest}>
        {children}
      </MenuItem>
    )
  },
) as LanguageItemType

LanguageItem.displayName = 'Navbar.LanguageItem'

LanguageItem.propTypes = {
  /**
   * The language item's label. Used for the meta props of the element.
   */
  label: PropTypes.string,
  /**
   * The language item's onclick function. Called when the language is selected in the menu.
   */
  onClick: PropTypes.func,
}

export interface LanguageItemProps extends MenuItemProps {
  /**
   * The language item's label. Used for the meta props of the element.
   */
  label?: string
  /**
   * The language item's onclick function. Called when the language is selected in the menu.
   */
  onClick?: () => void
}

export type LanguageItemType = React.ForwardRefExoticComponent<LanguageItemProps>

export { LanguageItem as BaseLanguageItem }
export default styled(LanguageItem)``
