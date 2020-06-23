import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { filter, includes, reduce } from 'lodash-es'

const IGNORED_PROPS = ['ref', 'className', 'forwardedRef']

const propsQuery = graphql`
  {
    allComponentMetadata {
      edges {
        node {
          displayName
          description {
            text
          }
          props {
            defaultValue {
              value
            }
            description {
              text
            }
            required
            name
            type {
              name
            }
          }
        }
      }
    }
  }
`

type PropType = {
  name: string
}

type ComponentsType = {
  [key: string]: object
}

type ComponentType = {
  node: {
    displayName: string
    props: PropType[]
  }
}

const PropsContext = React.createContext<ComponentsType[]>([])

const edgeToProp = (components: ComponentsType[], { node: { displayName, props, ...rest } }: ComponentType): ComponentsType[] => {
  const filteredProps = filter(props, ({ name = '' }) => !includes(IGNORED_PROPS, name))
  components[displayName] = { props: filteredProps, ...rest }
  return components
}

const PropsProvider: React.FC<PropsProviderProps> = ({ children }: PropsProviderProps) => {
  const { allComponentMetadata: { edges } } = useStaticQuery(propsQuery)

  const allProps = React.useMemo(() => reduce(edges, edgeToProp, []), [edges])

  return (
    <PropsContext.Provider value={allProps}>
      {children}
    </PropsContext.Provider>
  )
}

interface PropsProviderProps {
  children: React.ReactNode
}

const useProps = (): ComponentsType[] => React.useContext(PropsContext)

export { useProps }
export default PropsProvider