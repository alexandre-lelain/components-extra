import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CardContainer from './components/CardContainer'
import CardHeader from './components/CardHeader'

const Card = ({ className, title }) => {
  return (
    <CardContainer className={className}>
      <CardHeader>{title}</CardHeader>
      Hello there
      <br />
      It's me
    </CardContainer>
  )
}

Card.propTypes = {
  /**
   * the Card's title.
   */
  title: PropTypes.string.isRequired,
}

export default styled(Card)``
