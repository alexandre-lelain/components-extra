import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const StyledParagraph = styled(Typography)`
  max-width: 650px;
`

const Paragraph = ({ className, variant = 'body2', ...rest }) => (
  <StyledParagraph className={className} variant={variant} {...rest} />
)

Paragraph.propTypes = {
  /**
   * Material-ui's Typography 'variant' prop.
   */
  variant: PropTypes.string,
}

export { Paragraph }
export default styled(Paragraph)``
