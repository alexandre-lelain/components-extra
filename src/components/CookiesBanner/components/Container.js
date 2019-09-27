import styled from 'styled-components'

export default styled.div`
  text-align: center;
  padding: 24px;
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.dark}; 
  `}
`
