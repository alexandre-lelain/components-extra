import { CookiesButtonType } from './components/CookiesButton'

export interface CookiesBannerProps {
  /**
   * The controls of the CookiesBanner. You can either use Cookies.Button or your own.
   */
  children?: React.ReactNode
  /**
   * The CookiesBanner main text content.
   */
  text?: string
  /**
   * The ref to attach to the main div container.
   */
  ref?: React.Ref<HTMLDivElement>
}

export interface CookiesBannerComponents {
  Button: CookiesButtonType
}

export type CookiesBannerType = React.ForwardRefExoticComponent<CookiesBannerProps> &
  CookiesBannerComponents
