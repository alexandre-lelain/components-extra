import React, { forwardRef } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import PropTypes from 'prop-types'

/**
 * We have to disable next line in lint, because we have to stop 'isDisplayed' prop
 * to be passed to the Fab component, or it will be written in the DOM, which we don't
 * want.
 */
// eslint-disable-next-line
const Button = styled(forwardRef(({ isDisplayed, ...rest }, ref) => <Fab {...rest} ref={ref} />))`
  position: fixed;
  bottom: 25px;
  right: 25px;
  ${({ isDisplayed }) => `
    display: ${isDisplayed ? 'flex' : 'none'};
  `}
`

Button.defaultProps = {
  isDisplayed: false,
}

Button.propTypes = {
  /* Should the button be displayed ? */
  isDisplayed: PropTypes.bool,
}

Button.displayName = 'BackToTop-Button'

export default Button
