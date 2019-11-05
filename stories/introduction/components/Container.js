import styled from 'styled-components'

import theme from 'theme'
const { primary, secondary } = theme.palette

export default styled.div`
  margin: 40px auto;
  width: 80%;

  & > * {
    color: ${primary.main};
    font-family: Roboto;
  }

  pre {
    background-color: ${secondary.main};
    border-radius: 3px;
    padding: 12px;
  }
`
