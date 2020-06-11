import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { filter, includes, reduce } from 'lodash-es'

const IGNORED_PROPS = ['ref', 'className']

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

const PropsContext = React.createContext([])

const edgeToProp = (components, { node: { displayName, props, ...rest } }): array => {
  const filteredProps = filter(props, ({ name = '' }) => !includes(IGNORED_PROPS, name))
  components[displayName] = { props: filteredProps, ...rest }
  return components
}

const PropsProvider = ({ children }) => {
  const { allComponentMetadata: { edges } } = useStaticQuery(propsQuery)

  const allProps = React.useMemo(() => reduce(edges, edgeToProp, []), [edges])

  return (
    <PropsContext.Provider value={allProps}>
      {children}
    </PropsContext.Provider>
  )
}

const useProps = (): array => React.useContext(PropsContext)

export { useProps }
export default PropsProvider