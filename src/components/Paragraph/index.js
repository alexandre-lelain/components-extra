import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const MAX_WIDTH = '650px'

const StyledParagraph = styled(Typography)`
  max-width: ${MAX_WIDTH};
`

const Paragraph = ({ className, forwardedRef = null, variant = 'body2', ...rest }) => (
  <StyledParagraph className={className} ref={forwardedRef} variant={variant} {...rest} />
)

Paragraph.propTypes = {
  /**
   * Material-ui's Typography 'variant' prop.
   */
  variant: PropTypes.string,
  /**
   * Material's UI Typography props: https://material-ui.com/api/typography/. As well as any other prop you would like to pass to the component.
   */
  '...rest': PropTypes.object,
}

Paragraph.displayName = 'Paragraph'

export { Paragraph, MAX_WIDTH }
export default styled(forwardRef((props, ref) => <Paragraph {...props} forwardedRef={ref} />))``
