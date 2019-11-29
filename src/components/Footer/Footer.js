import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import isEmpty from 'utils/isEmpty'

import BottomBanner from './components/BottomBanner'
import Column from './components/Column'
import FooterContainer from './components/FooterContainer'
import Item from './components/Item'
import ItemsContainer from './components/ItemsContainer'
import Title from './components/Title'
import TopContainer from './components/TopContainer'

const Footer = ({
  bottomBanner: BottomBannerContent = null,
  children,
  className,
  forwardedRef = null,
  image = {},
  title = null,
  ...rest
}) => {
  const { component, src } = image
  return (
    <FooterContainer className={className} ref={forwardedRef} {...rest}>
      <TopContainer image={src} component={component} alt={title}>
        {!!title && <Title text={title} />}
        {!isEmpty(children) && <ItemsContainer>{children}</ItemsContainer>}
      </TopContainer>
      {BottomBannerContent && (
        <BottomBanner>
          <BottomBannerContent />
        </BottomBanner>
      )}
    </FooterContainer>
  )
}

Footer.propTypes = {
  /**
   * The content of the bottom banner. Leave to undefined if you don't want one.
   */
  bottomBanner: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  /**
   * The footer's background image. 'component' can either be a string 'ex: 'section', or a component.
   */
  image: PropTypes.shape({
    component: PropTypes.elementType,
    src: PropTypes.string,
  }),
  /**
   * The footer's title.
   */
  title: PropTypes.string,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <Footer {...props} forwardedRef={ref} />),
)``
/**
 * Exposed components.
 */
DefaultComponent.Column = Column
DefaultComponent.Item = Item
DefaultComponent.displayName = 'Footer'
DefaultComponent.propTypes = Footer.propTypes

export { Footer as BaseFooter }
export default DefaultComponent
