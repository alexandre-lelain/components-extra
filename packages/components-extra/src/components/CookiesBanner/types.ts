import CookiesButton from './components/CookiesButton'

export interface CookiesBannerProps {
  /**
   * The controls of the CookiesBanner. You can either use Cookies.Button or your own.
   */
  children?: React.ReactNode
  /**
   * The CookiesBanner main text content.
   */
  text?: string
}

export interface CookiesBannerType
  extends React.ForwardRefExoticComponent<CookiesBannerProps & React.RefAttributes<HTMLElement>> {
  Button?: typeof CookiesButton
}
