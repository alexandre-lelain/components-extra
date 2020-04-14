import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `};
`

export default FooterContainer
