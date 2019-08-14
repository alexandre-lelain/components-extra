import React from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import PropTypes from 'prop-types'

//eslint-disable-next-line  no-unused-vars
const Button = styled(({ isDisplayed, ...rest }) => <Fab {...rest} />)`
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

export default Button
