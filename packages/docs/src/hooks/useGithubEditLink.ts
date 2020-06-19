import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        githubEditLinkRoot
      }
    }
  }
`

const regex = /pages-([\w]+)-?([\S]*)?-mdx/

const useGithubEditLink = (chunkName: string): string | null => {
  const { site: { siteMetadata: { githubEditLinkRoot }}} = useStaticQuery(query)
  const matched = chunkName.match(regex)
  if (matched) {
    const [, node, file] = matched
    const relativePath = file ? `${node}/${file}` : `${node}`
    return `${githubEditLinkRoot}/${relativePath}.mdx`
  }
  return null
}

export default useGithubEditLink