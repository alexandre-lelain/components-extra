import React, { forwardRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Zoom, FabProps } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import ArrowUpward from './components/ArrowUpward'
import Button from './components/Button'

import { isServerSide, serverDocument } from '../../utils'
import { ComponentExtra } from '../../types'

/**
 *
 * API:
 *
 * - [BackToTop API](https://components-extra.netlify.app/components/back-to-top)
 * - inherits [Fab API](https://material-ui.com/api/fab/)
 */
const BackToTop: React.FC<BackToTopProps> = ({
  forwardedRef,
  keepHash = false,
  ...rest
}: BackToTopProps) => {
  const {
    mixins: { backToTop },
    transitions,
  } = useTheme()
  const [display, setDisplay] = useState(false)
  const { body, documentElement } = isServerSide() ? serverDocument : document

  const transitionDuration = {
    enter: transitions.duration.enteringScreen,
    exit: transitions.duration.leavingScreen,
  }

  useEffect(() => {
    const { startHeight } = backToTop
    const onScroll = (): void => {
      const removeHash = (): void => {
        if (!isServerSide() && window.location.href.includes('#') && !keepHash) {
          window.location.hash = ''
        }
      }

      if (body.scrollTop > startHeight || documentElement.scrollTop > startHeight) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
      if (documentElement.scrollTop === 0) {
        removeHash()
      }
    }

    document.addEventListener('scroll', onScroll)
    return (): void => document.removeEventListener('scroll', onScroll)
  }, [body.scrollTop, documentElement.scrollTop, backToTop, keepHash])

  const scrollToTop = (): void =>
    documentElement && documentElement.scrollIntoView({ behavior: 'smooth' })

  return (
    <Zoom
      in={display}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${display ? transitionDuration.exit : 0}ms`,
      }}
    >
      <Button
        aria-label="Back to top"
        data-testid="back-to-top-button"
        color="primary"
        onClick={scrollToTop}
        ref={forwardedRef}
        {...rest}
      >
        <ArrowUpward />
      </Button>
    </Zoom>
  )
}

BackToTop.displayName = 'BackToTop'

export interface BackToTopProps extends Omit<FabProps, 'children'> {
  /**
   * Optional. There already is the arrow icon as a child. However, you can still
   * bring any node you would like to render inside the button.
   */
  children?: React.ReactNode
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>
  /**
   * By default, the component will clear any existing hash from the URL when clicked, since it goes
   * to the top of the page. Set this prop to true if you don't want this behavior.
   */
  keepHash?: boolean
}

BackToTop.propTypes = {
  children: PropTypes.node,
  keepHash: PropTypes.bool,
}

export type BackToTopType = ComponentExtra<BackToTopProps, Record<string, unknown>, 'button'>

const BackToTopExtra = styled(
  forwardRef((props: BackToTopProps, ref: React.Ref<HTMLButtonElement>) => (
    <BackToTop {...props} forwardedRef={ref} />
  )),
)`` as BackToTopType

export default BackToTopExtra
