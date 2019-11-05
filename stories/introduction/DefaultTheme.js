import React from 'react'
import ReactJson from 'react-json-view'
import { storiesOf } from '@storybook/react'

import theme from 'theme'

storiesOf('Introduction|Default Theme', module).add(
  'values',
  () => <ReactJson name={null} src={theme} sortKeys displayDataTypes={false} />,
  { info: { disable: true } },
)
