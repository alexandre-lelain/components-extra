import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Zoom } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import ArrowUpward from './components/ArrowUpward'
import Button from './components/Button'

import { isServerSide } from 'utils'

const START_HEIGHT = 20

const BackToTop = ({ className, forwardedRef = null, ...rest }) => {
  const { transitions } = useTheme()
  const [display, setDisplay] = useState(false)
  const { body = {}, documentElement = {} } = isServerSide() ? {} : document

  const transitionDuration = {
    enter: transitions.duration.enteringScreen,
    exit: transitions.duration.leavingScreen,
  }

  useEffect(() => {
    const onScroll = () => {
      if (body.scrollTop > START_HEIGHT || documentElement.scrollTop > START_HEIGHT) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [body.scrollTop, documentElement.scrollTop])

  const scrollToTop = () =>
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
        className={className}
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

export { BackToTop, START_HEIGHT }
export default styled(forwardRef((props, ref) => <BackToTop {...props} forwardedRef={ref} />))``
