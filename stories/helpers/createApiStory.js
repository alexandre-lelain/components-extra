import React from 'react'
import { storiesOf } from '@storybook/react'

export default (title = '', Component) => {
  storiesOf(title, module).add('API', () => <div />, {
    info: { inline: true, source: false, propTables: [Component] },
  })
}
