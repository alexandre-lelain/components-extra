// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createTypography from '@material-ui/core/styles/createTypography'

declare module '@material-ui/core/styles/createTypography' {
  interface Paragraph {
    maxWidth: number
  }

  interface Typography {
    paragraph?: Paragraph
  }

  interface TypographyOptions {
    paragraph?: Paragraph
  }
}
