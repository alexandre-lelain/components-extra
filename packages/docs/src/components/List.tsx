import styled from 'styled-components'

const List = styled.ul`
  word-break: break-word;
  ${({ theme: { palette, spacing } }): string => `
    color: ${palette.text.primary};
    margin: ${spacing(4)}px 0;
  `}
`

export default List