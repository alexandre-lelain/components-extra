import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'

import { ComponentExtra } from '../../types'

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
const Paragraph: React.FC<ParagraphProps> = ({ color = 'textPrimary', forwardedRef, variant = 'body1', ...rest }: ParagraphProps) => {
  return <StyledParagraph color={color} variant={variant} ref={forwardedRef} {...rest} />
}

Paragraph.displayName = 'Paragraph'

export interface ParagraphProps extends TypographyProps {
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLParagraphElement>
}

export type ParagraphType = ComponentExtra<ParagraphProps>

const ParagraphExtra = styled(
  forwardRef((props: ParagraphProps, ref: React.Ref<HTMLParagraphElement>) => <Paragraph {...props} forwardedRef={ref} />)
)`` as ParagraphType


export default ParagraphExtra
