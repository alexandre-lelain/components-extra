import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './components/Button'
import Container from './components/Container'
import Form from './components/Form'
import Input from './components/Input'
import { Caption, Description, Title } from './components/Typographies'

const Newsletter = ({
  caption = '',
  children,
  className,
  description = '',
  forwardedRef,
  title = '',
  ...rest
}) => {
  return (
    <Container className={className} ref={forwardedRef} {...rest}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {children && <Form>{children}</Form>}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  )
}

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

Newsletter.displayName = 'Newsletter'

const DefaultComponent = styled(
  forwardRef((props, ref) => <Newsletter forwardedRef={ref} {...props} />),
)``
/**
 * Exposed components
 */
DefaultComponent.Button = Button
DefaultComponent.Input = Input
DefaultComponent.displayName = Newsletter.displayName
DefaultComponent.propTypes = Newsletter.propTypes

export default DefaultComponent
export { Newsletter as BaseNewsletter }
