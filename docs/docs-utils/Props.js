import React from 'react'
import { Typography } from '@material-ui/core'
import { Props } from 'docz'

export default ({ children, ...rest }) => (
  <div>
    <Typography variant="body2">The <code>ref</code> will be forwarded to the html root element, as well as any other props.</Typography>
    <br />
    {children}
    <Props {...rest} />
  </div>
)