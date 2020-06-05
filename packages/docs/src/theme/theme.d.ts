import * as createTransitions from '@material-ui/core/styles/createTransitions'

declare module '@material-ui/core/styles/createTransitions' {
  interface Transitions {
    backgroundColor: string
  }

  interface TransitionsOptions {
    backgroundColor?: string
  }
}
