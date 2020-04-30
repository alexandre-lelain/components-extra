import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  ${({ theme: { palette } }): string => `
    background-color: ${palette.primary.main};
  `};
`

export default FooterContainer
