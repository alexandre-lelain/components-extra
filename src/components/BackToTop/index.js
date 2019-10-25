import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import ArrowUpward from './components/ArrowUpward'
import Button from './components/Button'

const START_HEIGHT = 20

const BackToTop = ({ className, forwardedRef = null }) => {
  const [display, setDisplay] = useState(false)
  const { body, documentElement } = document

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
  }, [])

  const scrollToTop = () => documentElement.scrollIntoView({ behavior: 'smooth' })

  return (
    <Button
      aria-label="Back to top"
      className={className}
      color="primary"
      isDisplayed={display}
      onClick={scrollToTop}
      ref={forwardedRef}
    >
      <ArrowUpward color="secondary" />
    </Button>
  )
}

BackToTop.displayName = 'BackToTop'

export { BackToTop, START_HEIGHT }
export default styled(forwardRef((props, ref) => <BackToTop {...props} forwardedRef={ref} />))``
