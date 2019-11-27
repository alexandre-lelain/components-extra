import React from 'react'

export default (story, Component, info) => {
  story.add('API', () => <div />, {
    info: { inline: true, source: false, propTables: [Component], text: info },
    options: { showPanel: false },
  })
}
