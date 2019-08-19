import React from 'react'
import { storiesOf } from '@storybook/react'

import theme from '../src/theme'

storiesOf('Theme', module).add('Default', () => <p>{JSON.stringify(theme)}</p>)
