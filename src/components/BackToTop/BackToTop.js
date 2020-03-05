import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import ArrowUpward from './components/ArrowUpward'
import Button from './components/Button'

import { isServerSide } from 'utils'

const START_HEIGHT = 20

const BackToTop = ({ className, forwardedRef = null, ...rest }) => {
  const [display, setDisplay] = useState(false)
  const { body = {}, documentElement = {} } = isServerSide() ? {} : document

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
    <Button
      aria-label="Back to top"
      className={className}
      color="primary"
      isDisplayed={display}
      onClick={scrollToTop}
      ref={forwardedRef}
      {...rest}
    >
      <ArrowUpward />
    </Button>
  )
}

BackToTop.displayName = 'BackToTop'

export { BackToTop, START_HEIGHT }
export default styled(forwardRef((props, ref) => <BackToTop {...props} forwardedRef={ref} />))``
