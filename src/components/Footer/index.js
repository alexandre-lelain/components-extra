import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import isEmpty from 'utils/isEmpty'

import BottomBanner from './components/BottomBanner'
import FooterContainer from './components/FooterContainer'
import Items from './components/Items'
import Title from './components/Title'
import TopContainer from './components/TopContainer'

const Footer = ({
  bannerContent: BannerContent = null,
  className,
  items = [],
  image = null,
  title = null,
}) => {
  return (
    <FooterContainer className={className}>
      <TopContainer image={image}>
        {!!title && <Title text={title} />}
        {!isEmpty(items) && <Items items={items} />}
      </TopContainer>
      {!!BannerContent && (
        <BottomBanner>
          <BannerContent />
        </BottomBanner>
      )}
    </FooterContainer>
  )
}

Footer.propTypes = {
  /**
   * The content of the footer's bottom banner. Optional.
   */
  bannerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * The footer's background image. It can either be an url or a
   * module-loaded image.
   */
  image: PropTypes.string,
  /**
   * The footer's item list.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object]),
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
  /**
   * The footer's title.
   */
  title: PropTypes.string,
}

export { Footer }
export default styled(Footer)``
