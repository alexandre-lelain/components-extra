import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

import Paragraph from '../Paragraph'

import CookiesButton from './components/CookiesButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

const useStyles = makeStyles(({ palette }) => ({
  text: {
    color: palette.primary.contrastText,
  },
}))

const CookiesBanner = ({ children, className, forwardedRef = null, text = null, ...rest }) => {
  const classes = useStyles()

  return (
    <Container className={className} ref={forwardedRef} {...rest}>
      <CookieIcon />
      {text && (
        <Paragraph variant="body2" className={classes.text}>
          {text}
        </Paragraph>
      )}
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
