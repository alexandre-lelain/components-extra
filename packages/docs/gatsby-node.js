const path = require('path')
const get = require('lodash/get')

const propsQuery = `
  query {
    allComponentMetadata {
      edges {
        node {
          displayName
          description {
            text
          }
          props {
            name
            type {
              name
              raw
              value
            }
            required
            defaultValue {
              value
            }
          }
        }
      }
    }
  }
`

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(propsQuery).then((result) => {
    const { errors, data } = result
    if (errors) {
      throw errors
    }
    const props = get(data, 'allComponentMetadata.edges', [])
    createPage({
      path: '/props',
      component: path.resolve('./src/templates/component.js'),
      context: { props },
    })
  })
}
