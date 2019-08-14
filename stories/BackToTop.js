import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import BackToTop from '../src/components/BackToTop'
import StyledProvider from '../src/components/StyledProvider'

import theme from 'theme'

storiesOf('BackToTop', module).add('Default', () => (
  <StyledProvider theme={theme}>
    <>
      <Typography>Scroll down... ;) </Typography>
      <div style={{ height: '1800px' }}></div>
      <BackToTop />
    </>
  </StyledProvider>
))
