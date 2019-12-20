import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'

const StyledButton = styled(MuiButton)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

const Button = ({ className, onClick, ...rest }) => {
  return (
    <StyledButton
      className={className}
      color="primary"
      onClick={onClick}
      variant="contained"
      {...rest}
    />
  )
}

Button.propTypes = {
  /**
   * Function called on button's click.
   */
  onClick: PropTypes.func,
  /**
   * Material's UI Button props: https://material-ui.com/api/button/. As well as any other prop you would like to pass to the button.
   */
  '...rest': PropTypes.object,
}

Button.displayName = 'Newsletter.Button'

const DefaultComponent = styled(Button)``
DefaultComponent.displayName = Button.displayName
DefaultComponent.propTypes = Button.propTypes

export default DefaultComponent
export { Button as BaseButton }
