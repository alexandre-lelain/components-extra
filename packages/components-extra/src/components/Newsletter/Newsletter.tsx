import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './components/Button'
import Container from './components/Container'
import Form from './components/Form'
import Input from './components/Input'
import { Caption, Description, Title } from './components/Typographies'

import { NewsletterProps, NewsletterType } from './types'

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

Newsletter.propTypes = {
  /**
   * The newsletter's caption. Often used to display clear consent sentence.
   * Do not forget to mention you are not sending spam ;)
   */
  caption: PropTypes.string,
  /**
   * The description of your newsletter. You can use it to explain why the users
   * should subscribe to your newsletter!
   */
  description: PropTypes.string,
  /**
   * The newsletter's title.
   */
  title: PropTypes.string,
}

/**
 * Exposed components
 */
Newsletter.Button = Button
Newsletter.Input = Input

export { Newsletter as BaseNewsletter }
export default styled(Newsletter)``
