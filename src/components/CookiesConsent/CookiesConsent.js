import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Category from './components/Category'
import ConsentButton from './components/ConsentButton'
import Controls from './components/Controls'
import Container from './components/Container'
import MainTitle from './components/MainTitle'

const CookiesConsent = ({ children, forwardedRef, title = null, ...rest }) => {
  return (
    <Container ref={forwardedRef} {...rest}>
      {title && <MainTitle>{title}</MainTitle>}
      {children}
    </Container>
  )
}

CookiesConsent.propTypes = {
  /**
   * The main title of the component.
   */
  title: PropTypes.string,
}
CookiesConsent.displayName = 'CookiesConsent'

const DefaultComponent = styled(
  forwardRef((props, ref) => <CookiesConsent forwardedRef={ref} {...props} />),
)``
/** Exposed components */
DefaultComponent.Category = Category
DefaultComponent.Controls = Controls
DefaultComponent.Button = ConsentButton

DefaultComponent.displayName = CookiesConsent.displayName
DefaultComponent.propTypes = CookiesConsent.propTypes

export { CookiesConsent as BaseCookiesConsent }
export default DefaultComponent
