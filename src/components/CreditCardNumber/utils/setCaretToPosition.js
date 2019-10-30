export default (element, caretPos) => {
  if (element) {
    element.setSelectionRange(caretPos, caretPos)
    element.focus()
  }
}
