import styled from 'styled-components'

import Paragraph from '../../Paragraph'

import CookiesButton from '../CookiesButton'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0.95;
  ${({ theme }) => `
    color: ${theme.palette.secondary.main};
    background-color: ${theme.palette.primary.main};

    ${CookiesButton}:last-of-type {
      margin-left: 16px;
    }

    ${theme.breakpoints.down('xs')} {
      flex-direction: column;

      ${CookiesButton}:last-of-type {
        margin-top: 16px;
      }

      ${Paragraph} {
        margin-top: 16px;
        margin-bottom: 8px;
        text-align: justify;
      }
    }

    
  `}
`
