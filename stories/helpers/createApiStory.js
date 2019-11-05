import React from 'react'

export default (story, Component) => {
  story.add('API', () => <div />, {
    info: { inline: true, source: false, propTables: [Component] },
    options: { showPanel: false },
  })
}
