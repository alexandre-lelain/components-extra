import React from 'react'
import { Props } from 'docz'

export default ({ children, ...rest }) => (
  <>
    <p>The <code>ref</code> will be forwarded to the html root element, as well as any other props.</p>
    {children}
    <Props {...rest} />
  </>
)