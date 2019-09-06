import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from './components/Container'
import Title from './components/Title'

const Footer = ({ className, image, title }) => {
  return (
    <Container className={className} image={image}>
      {title && <Title text={title} />}
    </Container>
  )
}

Footer.propTypes = {
  /**
   * The footer's background image. It can either be an url or a
   * module-loaded image. Optional.
   */
  image: PropTypes.string,
  /**
   * The footer's title.
   */
  title: PropTypes.string,
}

export { Footer }
export default styled(Footer)
