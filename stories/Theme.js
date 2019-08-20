import React from 'react'
import ReactJson from 'react-json-view'
import { storiesOf } from '@storybook/react'

import theme from 'theme'

storiesOf('Theme', module).add('Default', () => (
  <ReactJson src={theme} sortKeys displayDataTypes={false} />
))
