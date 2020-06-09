import React from 'react'

const Component = ({ pageContext }) => {
  const { props } = pageContext
  return (
    <div> 
      <h1>Props: see console</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default Component
