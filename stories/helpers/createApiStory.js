import React from 'react'

const addRefToInfo = (info = '') =>
  info +
  `\n
The \`ref\` will be forwarded to the **html** root element, as well as any other props.
`

export default (story, Component, info) => {
  story.add('API', () => <div />, {
    info: { inline: true, source: false, propTables: [Component], text: addRefToInfo(info) },
    options: { showPanel: false },
  })
}
