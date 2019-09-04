import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

import Button from './components/Button'

const START_HEIGHT = 20

const BackToTop = ({ className }) => {
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
      aria-label="Back to top"
      isDisplayed={display}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon color="secondary" />
    </Button>
  )
}

export { BackToTop }
export default styled(BackToTop)``
