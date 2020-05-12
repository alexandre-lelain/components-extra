import React from 'react'
import ReactJson from 'react-json-view'
import Layout from '../components/Layout'

const Component = ({ pageContext }) => {
  const { props } = pageContext

  return (
    <Layout>
      <h1>Props:</h1>
      <ReactJson
        style={{ fontSize: 16 }}
        name={null}
        theme="ocean"
        src={props}
        sortKeys
        displayDataTypes={false}
      />
    </Layout>
  )
}

export default Component
