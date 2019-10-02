import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import isEmpty from 'utils/isEmpty'

import Paragraph from '../Paragraph'

import CookieButton from './components/CookieButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

const CookiesBanner = ({ className, rightBtn = {}, leftBtn = {}, text = null }) => {
  return (
    <Container className={className}>
      <CookieIcon />
      {text && <Paragraph color="secondary">{text}</Paragraph>}
      {!isEmpty(leftBtn) && <CookieButton {...leftBtn} />}
      {!isEmpty(rightBtn) && <CookieButton {...rightBtn} />}
    </Container>
  )
}

CookiesBanner.propTypes = {
  /**
   * The controls' left button.
   */
  leftBtn: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  /**
   * The controls' right button.
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

export { CookiesBanner }
export default styled(CookiesBanner)``
