import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'

const StyledParagraph = styled(Typography)`
  ${({
    theme: {
      typography: { paragraph },
    },
  }): string => `
    max-width: ${paragraph.maxWidth}px;
  `}
`

/**
 *
 * API:
 *
 * - [Paragraph API](https://components-extra.netlify.app/components/paragraph)
 * - inherits [Typography API](https://material-ui.com/api/typography/)
 */
const Paragraph = forwardRef(
  (
    { color = 'textPrimary', variant = 'body1', ...rest }: TypographyProps,
    ref?: React.Ref<HTMLParagraphElement>,
  ) => {
    return <StyledParagraph color={color} variant={variant} ref={ref} {...rest} />
  },
) as ParagraphType

Paragraph.displayName = 'Paragraph'

export type ParagraphType = React.ForwardRefExoticComponent<TypographyProps>

export { Paragraph as BaseParagraph, TypographyProps as ParagraphProps }
export default styled(Paragraph)``
