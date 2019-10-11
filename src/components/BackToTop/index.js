import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowUpward } from '@material-ui/icons'

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
      className={className}
      color="primary"
      ref={forwardedRef}
      aria-label="Back to top"
      isDisplayed={display}
      onClick={scrollToTop}
    >
      <ArrowUpward color="secondary" />
    </Button>
  )
}

BackToTop.displayName = 'BackToTop'

export { BackToTop }
export default styled(forwardRef((props, ref) => <BackToTop {...props} forwardedRef={ref} />))``
