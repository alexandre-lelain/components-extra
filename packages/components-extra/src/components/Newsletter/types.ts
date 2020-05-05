import { ButtonType } from './components/Button'
import { InputType } from './components/Input'

export interface NewsletterProps {
  /**
   * The newsletter's caption. Often used to display clear consent sentence.
   * Do not forget to mention you are not sending spam ;)
   */
  caption?: string
  /**
   * The components to render inside the <form>. You can either use the ones exposed from
   * <Newsletter> or bring your owns.
   */
  children?: React.ReactNode
  /**
   * The description of your newsletter. You can use it to explain why the users
   * should subscribe to your newsletter!
   */
  description?: string
  /**
   * The ref to pass to the main html element container.
   */
  ref?: React.Ref<HTMLElement>
  /**
   * The newsletter's title.
   */
  title?: string
}

export interface NewsletterComponents {
  Button: ButtonType
  Input: InputType
}

export type NewsletterType = React.ForwardRefExoticComponent<NewsletterProps> & NewsletterComponents
