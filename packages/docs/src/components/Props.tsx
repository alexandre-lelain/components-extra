import React from 'react'

import { useProps } from './PropsProvider'

const Props: React.FC = ({ of: component }: PropsProps) => {
  const allProps = useProps()
  const props = allProps[component] || {}

  return (
    <div>
      <h1>Props of {component}</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export interface PropsProps {
  of: string;
}

export default Props