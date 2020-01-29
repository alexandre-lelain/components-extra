import React from 'react'

const Extended = ({ name, children }) => (
  <>
    <p>This <code>{name}</code> was extended using <code>styled()</code> from styled-components.</p>
    {children}
  </>
)

export default Extended