import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import BackToTop from '../src/components/BackToTop'

storiesOf('BackToTop', module).add('Default', () => (
  <>
    <Typography>Scroll down... ;) </Typography>
    <div style={{ height: '1800px' }}></div>
    <BackToTop />
  </>
))
