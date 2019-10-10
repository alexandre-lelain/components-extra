import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const StyledParagraph = styled(Typography)`
  max-width: 650px;
`

const Paragraph = ({ className, forwardedRef = null, variant = 'body2', ...rest }) => (
  <StyledParagraph className={className} ref={forwardedRef} variant={variant} {...rest} />
)

Paragraph.propTypes = {
  /**
   * Material-ui's Typography 'variant' prop.
   */
  variant: PropTypes.string,
}

Paragraph.displayName = 'Paragraph'

export { Paragraph }
export default styled(forwardRef((props, ref) => <Paragraph {...props} forwardedRef={ref} />))``
