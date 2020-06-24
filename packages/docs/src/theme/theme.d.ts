// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as transitions from '@material-ui/core/styles/transitions'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/transitions' {
  interface Transitions {
    backgroundColor: string
  }

  interface TransitionsOptions {
    backgroundColor?: string
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    inlineCode: string
  }

  interface PaletteOptions {
    inlineCode?: string
  }
}
