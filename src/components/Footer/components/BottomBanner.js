import styled from 'styled-components'

export default styled.div`
  text-align: center;
  padding: 16px 12px;
  ${({ theme: { palette } }) => `
    color: ${palette.secondary.dark};
    background-color: ${palette.primary.dark};
 `}
`
