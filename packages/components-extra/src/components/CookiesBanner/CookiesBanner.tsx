import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

import Paragraph from '../Paragraph'

import CookiesButton, { CookiesButtonType } from './components/CookiesButton'
import CookieIcon from './components/CookieIcon'
import Container from './components/Container'

const useStyles = makeStyles(({ palette }) => ({
  text: {
    color: palette.primary.contrastText,
  },
}))

/**
 *
 * API:
 *
 * - [CookiesBanner API](https://components-extra.netlify.app/components/cookies-banner)
 */
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

export interface CookiesBannerProps {
  /**
   * The controls of the CookiesBanner. You can either use Cookies.Button or your own.
   */
  children?: React.ReactNode
  /**
   * The CookiesBanner main text content.
   */
  text?: string
  /**
   * The ref to attach to the main div container.
   */
  ref?: React.Ref<HTMLDivElement>
}

export interface CookiesBannerComponents {
  Button: CookiesButtonType
}

export type CookiesBannerType = React.ForwardRefExoticComponent<CookiesBannerProps> &
  CookiesBannerComponents


CookiesBanner.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

/**
 * Exposed Components
 */
CookiesBanner.Button = CookiesButton

export { CookiesBanner as BaseCookiesBanner }
export default styled(CookiesBanner)``
