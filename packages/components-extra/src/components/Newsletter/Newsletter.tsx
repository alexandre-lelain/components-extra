import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ComponentExtra } from '../../types'

import Button, { NewsletterButtonType } from './components/Button'
import Container from './components/Container'
import Form from './components/Form'
import Input, { NewsletterInputType } from './components/Input'
import { Caption, Description, Title } from './components/Typographies'

/**
 *
 * API:
 *
 * - [Newsletter API](https://components-extra.netlify.app/components/newsletter)
 */
const Newsletter: React.FC<NewsletterProps> = ({ caption, children, description, forwardedRef, title, ...rest }: NewsletterProps) => {
  return (
    <Container ref={forwardedRef} {...rest}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {children && <Form>{children}</Form>}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  )
}

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
  forwardedRef?: React.Ref<HTMLDivElement>
  /**
   * The newsletter's title.
   */
  title?: string
}

export interface NewsletterComponents {
  Button: NewsletterButtonType
  Input: NewsletterInputType
}

export type NewsletterType = ComponentExtra<NewsletterProps, NewsletterComponents>

Newsletter.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
}

const NewsletterExtra = styled(
  forwardRef((props: NewsletterProps, ref: React.Ref<HTMLDivElement>) => <Newsletter {...props} forwardedRef={ref} />)
)`` as NewsletterType

/**
 * Exposed components
 */
NewsletterExtra.Button = Button
NewsletterExtra.Input = Input

export default NewsletterExtra
