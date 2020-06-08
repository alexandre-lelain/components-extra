import { CategoryType } from './components/Category'
import { ControlsType } from './components/Controls'
import { ConsentButtonType } from './components/ConsentButton'

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
