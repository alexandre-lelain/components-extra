import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paragraph from '../Paragraph'

import CookiesButton from './components/CookiesButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

const CookiesBanner = ({ children, className, forwardedRef = null, text = null }) => {
  return (
    <Container className={className} ref={forwardedRef}>
      <CookieIcon />
      {text && <Paragraph color="secondary">{text}</Paragraph>}
      {children}
    </Container>
  )
}

CookiesBanner.propTypes = {
  /**
   * The CookiesBanner main text content.
   */
  text: PropTypes.string,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <CookiesBanner {...props} forwardedRef={ref} />),
)``
/**
 * Exposed Components
 */
DefaultComponent.Button = CookiesButton
DefaultComponent.displayName = 'CookiesBanner'
DefaultComponent.propTypes = CookiesBanner.propTypes

export { CookiesBanner as BaseCookiesBanner }
export default DefaultComponent
