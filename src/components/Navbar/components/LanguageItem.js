import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'

import { useLanguageOnClose } from '../hooks'

const LanguageItem = ({ className, children, forwardedRef, label = '', onClick, ...rest }) => {
  const onMenuClose = useLanguageOnClose()

  const onItemClick = () => {
    onMenuClose && onMenuClose()
    onClick && onClick()
  }

  return (
    <MenuItem
      aria-label={label}
      className={className}
      onClick={onItemClick}
      title={label}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

LanguageItem.propTypes = {
  /**
   * The language item's label. Used for the meta props of the element.
   */
  label: PropTypes.string,
  /**
   * The language item's onclick function. Called when the language is selected in the menu.
   */
  onClick: PropTypes.func,
  /**
   * The Material-ui's MenuItem other props: https://material-ui.com/api/menu-item/. As well as any other prop you would like to pass to the item.
   */
  '...rest': PropTypes.object,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <LanguageItem forwardedRef={ref} {...props} />),
)``
DefaultComponent.displayName = 'Navbar.LanguageItem'
DefaultComponent.propTypes = LanguageItem.propTypes

export { LanguageItem as BasLanguageItem }
export default DefaultComponent
