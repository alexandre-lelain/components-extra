import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Category, { CookiesConsentCategoryType } from './components/Category'
import ConsentButton, { CookiesConsentButtonType } from './components/ConsentButton'
import Controls, { CookiesConsentControlsType } from './components/Controls'
import Container from './components/Container'
import MainTitle from './components/MainTitle'

import { ComponentExtra } from '../../types'

/**
 *
 * API:
 *
 * - [CookiesConsent API](https://components-extra.netlify.app/components/cookies-consent)
 */
const CookiesConsent: React.FC<CookiesConsentProps> = ({ children, forwardedRef, title, ...rest }: CookiesConsentProps) => {
  return (
    <Container ref={forwardedRef} {...rest}>
      {title && <MainTitle>{title}</MainTitle>}
      {children}
    </Container>
  )
}


export interface CookiesConsentProps {
  /**
   * The content of the component. You can either use an assemble of
   * the ones available in its scope, like CookiesConsent.Category, or bring
   * your own elemnts.
   */
  children?: React.ReactNode
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLDivElement>
  /**
   * The main title of the component.
   */
  title?: string
}

CookiesConsent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export type CookiesConsentComponents = {
  Category: CookiesConsentCategoryType
  Controls: CookiesConsentControlsType
  Button: CookiesConsentButtonType
}

export type CookiesConsentType = ComponentExtra<CookiesConsentProps, CookiesConsentComponents>

const CookiesConsentExtra = styled(
  forwardRef((props: CookiesConsentProps, ref: React.Ref<HTMLDivElement>) => <CookiesConsent {...props} forwardedRef={ref} />)
)`` as CookiesConsentType


/** Exposed components */
CookiesConsentExtra.Category = Category
CookiesConsentExtra.Controls = Controls
CookiesConsentExtra.Button = ConsentButton

export default CookiesConsentExtra
