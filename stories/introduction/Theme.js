import React from 'react'
import ReactJson from 'react-json-view'
import { storiesOf } from '@storybook/react'

import theme from 'theme'

storiesOf('Introduction|Theme', module).add(
  'values',
  () => <ReactJson src={theme} sortKeys displayDataTypes={false} />,
  { info: { disable: true } },
)
