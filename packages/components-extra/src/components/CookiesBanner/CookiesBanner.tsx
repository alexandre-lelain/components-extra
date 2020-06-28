import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

import Paragraph from '../Paragraph'
import { ComponentExtra } from '../../types'

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
const CookiesBanner: React.FC<CookiesBannerProps> = ({
  children,
  forwardedRef,
  text,
  ...rest
}: CookiesBannerProps) => {
  const classes = useStyles()

  return (
    <Container ref={forwardedRef} {...rest}>
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

export interface CookiesBannerProps {
  /**
   * The controls of the CookiesBanner. You can either use Cookies.Button or your own.
   */
  children?: React.ReactNode
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLDivElement>
  /**
   * The CookiesBanner main text content.
   */
  text?: string
  /**
   * The ref to attach to the main div container.
   */
  ref?: React.Ref<HTMLDivElement>
}

CookiesBanner.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export type CookiesBannerComponents = {
  Button: CookiesButtonType
}

export type CookiesBannerType = ComponentExtra<CookiesBannerProps, CookiesBannerComponents>

const CookiesBannerExtra = styled(
  forwardRef((props: CookiesBannerProps, ref: React.Ref<HTMLDivElement>) => (
    <CookiesBanner {...props} forwardedRef={ref} />
  )),
)`` as CookiesBannerType

/**
 * Exposed Components
 */
CookiesBannerExtra.Button = CookiesButton

export default CookiesBannerExtra
