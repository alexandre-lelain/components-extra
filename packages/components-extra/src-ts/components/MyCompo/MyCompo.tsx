import React from 'react'

const MyCompo = ({ title, name }: MyCompoProps) => {
  return <h1>{title}: {name}. That's components-extra true!</h1>
}

export interface MyCompoProps {
  title: string
  name: string
}

export default MyCompo