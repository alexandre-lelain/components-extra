import styled from 'styled-components'

import Paragraph from '../../Paragraph'

import CookiesButton from './CookiesButton'
import CookieIcon from './CookieIcon'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0.95;
  ${({ theme: { breakpoints, palette, zIndex } }): string => `
    background-color: ${palette.primary.main};
    z-index: ${zIndex.cookiesBanner};

    ${CookiesButton}:last-of-type {
      margin-left: 16px;
    }

    ${breakpoints.down('xs')} {
      flex-direction: column;

      ${CookieIcon} {
        margin-right: 0px;
      }

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
