import styled from 'styled-components'

import theme from 'theme'
const { primary } = theme.palette

export default styled.div`
  margin: 40px auto;
  width: 80%;

  & > * {
    color: ${primary.main};
    font-family: Roboto;
  }

  pre {
    line-height: 1;
    border-radius: 3px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    * {
      font-size: 14px;
    }
  }
`
