import React, { forwardRef, useEffect, useState } from 'react'
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
const BackToTop: React.FC<BackToTopProps> = ({ forwardedRef, ...rest }: BackToTopProps) => {
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
      if (body.scrollTop > startHeight || documentElement.scrollTop > startHeight) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
    }

    document.addEventListener('scroll', onScroll)
    return (): void => document.removeEventListener('scroll', onScroll)
  }, [body.scrollTop, documentElement.scrollTop, backToTop])

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

export interface BackToTopProps extends FabProps {
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>
}

export type BackToTopType = ComponentExtra<BackToTopProps, {}, "button">

const BackToTopExtra = styled(
  forwardRef((props: BackToTopProps, ref: React.Ref<HTMLButtonElement>) => <BackToTop {...props} forwardedRef={ref} />)
)`` as BackToTopType

export default BackToTopExtra
