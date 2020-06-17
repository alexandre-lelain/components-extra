import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button, { ButtonType } from './components/Button'
import Container from './components/Container'
import Form from './components/Form'
import Input, { InputType } from './components/Input'
import { Caption, Description, Title } from './components/Typographies'

/**
 *
 * API:
 *
 * - [Newsletter API](https://components-extra.netlify.app/components/newsletter)
 */
const Newsletter = forwardRef(
  (
    { caption, children, description, title, ...rest }: NewsletterProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <Container ref={ref} {...rest}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children && <Form>{children}</Form>}
        {caption && <Caption>{caption}</Caption>}
      </Container>
    )
  },
) as NewsletterType

export interface NewsletterProps {
  /**
   * The newsletter's caption. Often used to display clear consent sentence.
   * Do not forget to mention you are not sending spam ;)
   */
  caption?: string
  /**
   * The components to render inside the form. You can either use the ones exposed from
   * Newsletter or bring your owns.
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

Newsletter.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
}

/**
 * Exposed components
 */
Newsletter.Button = Button
Newsletter.Input = Input

export { Newsletter as BaseNewsletter }
export default styled(Newsletter)``
