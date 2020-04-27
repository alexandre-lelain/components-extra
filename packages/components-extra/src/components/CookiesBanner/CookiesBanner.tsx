import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

import Paragraph from '../Paragraph'

import CookiesButton from './components/CookiesButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

import { CookiesBannerProps, CookiesBannerType } from './types'

const useStyles = makeStyles(({ palette }) => ({
  text: {
    color: palette.primary.contrastText,
  },
}))

const CookiesBanner = forwardRef(
  ({ children, text, ...rest }: CookiesBannerProps, ref: React.Ref<HTMLDivElement>) => {
    const classes = useStyles()

    return (
      <Container ref={ref} {...rest}>
        <CookieIcon />
        {text && (
          <Paragraph variant="body2" className={classes.text}>
            {text}
          </Paragraph>
        )}
        {children}
      </Container>
    )
  },
) as CookiesBannerType

CookiesBanner.propTypes = {
  /**
   * The controls of the CookiesBanner. You can either use Cookies.Button or your own.
   */
  children: PropTypes.node,
  /**
   * The CookiesBanner main text content.
   */
  text: PropTypes.string,
}

/**
 * Exposed Components
 */
CookiesBanner.Button = CookiesButton

export { CookiesBanner as BaseCookiesBanner }
export default styled(CookiesBanner)``
