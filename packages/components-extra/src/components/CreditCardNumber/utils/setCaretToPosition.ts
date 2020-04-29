export default (element: HTMLInputElement, caretPos: number): void => {
  if (element) {
    element.setSelectionRange(caretPos, caretPos)
    element.focus()
  }
}
