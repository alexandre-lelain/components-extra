import {
  buttons as dButtons,
  editor as dEditor,
} from 'gatsby-theme-docz/src/components/Playground/styles'

const editor = theme => ({
  ...dEditor(theme),
  fontSize: 14,
  padding: 8,
})

const buttons = {
  ...dButtons,
  right: 0,
}

export * from 'gatsby-theme-docz/src/components/Playground/styles'
export { buttons, editor }
