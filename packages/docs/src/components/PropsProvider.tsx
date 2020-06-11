import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { map } from 'lodash-es'

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
            tsType
          }
        }
      }
    }
  }
`

const PropsContext = React.createContext([])

const PropsProvider = ({ children }) => {
  const { allComponentMetadata: { edges } } = useStaticQuery(propsQuery)

  const allProps = React.useMemo(() => {
    const sortedProps = []
    map(edges, ({ node: { displayName, ...rest } }) => sortedProps[displayName] = rest)
    return sortedProps
  }, [edges])

  return (
    <PropsContext.Provider value={allProps}>
      {children}
    </PropsContext.Provider>
  )
}

const useProps = (): array => React.useContext(PropsContext)

export { useProps }
export default PropsProvider