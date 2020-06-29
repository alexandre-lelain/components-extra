export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({
    style: { scrollBehavior: 'smooth' },
  })
  setBodyAttributes({
    style: { margin: 0 },
  })
}
