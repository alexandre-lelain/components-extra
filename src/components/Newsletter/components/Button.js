import React from 'react'
import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'

const Button = ({ className, ...rest }) => {
  return <MuiButton color="primary" className={className} size="small" {...rest} />
}

Button.propTypes = {}

Button.displayName = 'Newsletter.Button'

const DefaultComponent = styled(Button)``
DefaultComponent.displayName = Button.displayName
DefaultComponent.propTypes = Button.propTypes

export default DefaultComponent
export { Button as BaseButton }
