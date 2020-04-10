import React from 'react'

const MyCompo = ({ title, name }: MyCompoProps) => {
  return <h1>{title}: {name}</h1>
}

export interface MyCompoProps {
  title: string
  name: string
}

export default MyCompo