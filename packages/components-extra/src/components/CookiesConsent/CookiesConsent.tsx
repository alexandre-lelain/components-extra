import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Category, { CategoryType } from './components/Category'
import ConsentButton, { ConsentButtonType } from './components/ConsentButton'
import Controls, { ControlsType } from './components/Controls'
import Container from './components/Container'
import MainTitle from './components/MainTitle'

/**
 *
 * API:
 *
 * - [CookiesConsent API](https://components-extra.netlify.app/components/cookies-consent)
 */
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


export interface CookiesConsentProps {
  /**
   * The content of the component. You can either use an assemble of
   * the ones available in its scope, like CookiesConsent.Category, or bring
   * your own elemnts.
   */
  children?: React.ReactNode
  /**
   * The ref of the component, forwared to the dom root element?
   */
  ref?: React.Ref<HTMLDivElement>
  /**
   * The main title of the component.
   */
  title?: string
}

export interface CookiesConsentComponents {
  Category: CategoryType
  Controls: ControlsType
  Button: ConsentButtonType
}

export type CookiesConsentType = React.ForwardRefExoticComponent<CookiesConsentProps> &
  CookiesConsentComponents

CookiesConsent.propTypes = {
  title: PropTypes.string,
}

CookiesConsent.displayName = 'CookiesConsent'

/** Exposed components */
CookiesConsent.Category = Category
CookiesConsent.Controls = Controls
CookiesConsent.Button = ConsentButton

export { CookiesConsent as BaseCookiesConsent }
export default styled(CookiesConsent)``
