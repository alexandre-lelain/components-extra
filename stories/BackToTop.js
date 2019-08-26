import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import BackToTop from 'components/BackToTop'
import PropsTable from './components/PropsTable'

storiesOf('BackToTop', module).add('Default', () => (
  <>
    <Typography>Scroll down... ;) </Typography>
    <div style={{ height: '1800px' }}></div>
    <BackToTop />
  </>
))

storiesOf('BackToTop', module).add('API', () => <PropsTable title="BackToTop" />, {
  info: { disable: true },
})
