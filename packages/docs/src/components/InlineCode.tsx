import styled from 'styled-components'

const InlineCode = styled.code`
  padding: 2px 4px;
  font-size: 90%;
  font-family: Consolas, Roboto;
  ${({ theme: { palette, shape } }): string => `
    background-color: ${palette.inlineCode};
    color: ${palette.primary.dark};
    border-radius: ${shape.borderRadius}px;
  `}
`

export default InlineCode