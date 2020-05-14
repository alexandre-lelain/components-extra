import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Category from './components/Category'
import ConsentButton from './components/ConsentButton'
import Controls from './components/Controls'
import Container from './components/Container'
import MainTitle from './components/MainTitle'
import { CookiesConsentProps, CookiesConsentType } from './types'

const CookiesConsent = forwardRef(
  ({ children, title, ...rest }: CookiesConsentProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Container ref={ref} {...rest}>
        {title && <MainTitle>{title}</MainTitle>}
        {children}
      </Container>
    )
  },
) as CookiesConsentType

CookiesConsent.propTypes = {
  /**
   * The main title of the component.
   */
  title: PropTypes.string,
}
CookiesConsent.displayName = 'CookiesConsent'

/** Exposed components */
CookiesConsent.Category = Category
CookiesConsent.Controls = Controls
CookiesConsent.Button = ConsentButton

export { CookiesConsent as BaseCookiesConsent }
export default styled(CookiesConsent)``
