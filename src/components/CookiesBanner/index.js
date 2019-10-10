import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import isEmpty from 'utils/isEmpty'

import Paragraph from '../Paragraph'

import CookieButton from './components/CookieButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

const CookiesBanner = ({
  className,
  forwardedRef = null,
  rightBtn = {},
  leftBtn = {},
  text = null,
}) => {
  return (
    <Container className={className} ref={forwardedRef}>
      <CookieIcon />
      {text && <Paragraph color="secondary">{text}</Paragraph>}
      {!isEmpty(leftBtn) && <CookieButton {...leftBtn} />}
      {!isEmpty(rightBtn) && <CookieButton {...rightBtn} />}
    </Container>
  )
}

CookiesBanner.propTypes = {
  /**
   * The controls' left button. It will be a link if you set 'href',
   * and it will be a button if you set 'onClick'.
   */
  leftBtn: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  /**
   * The controls' right button. It will be a link if you set 'href',
   * and it will be a button if you set 'onClick'.
   */
  rightBtn: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  /**
   * The CookiesBanner main text content.
   */
  text: PropTypes.string,
}

CookiesBanner.displayName = 'CookiesBanner'

export { CookiesBanner }
export default styled(forwardRef((props, ref) => <CookiesBanner {...props} forwardedRef={ref} />))``
