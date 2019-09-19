import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import isEmpty from 'utils/isEmpty'

import BottomBanner from './components/BottomBanner'
import Columns from './components/Columns'
import Container from './components/Container'
import Title from './components/Title'

const Footer = ({
  bannerContent: BannerContent = null,
  className,
  columns = [],
  items = [],
  image = null,
  title = null,
}) => {
  return (
    <>
      <Container className={className} image={image}>
        {!!title && <Title text={title} />}
        {!isEmpty(columns) && !isEmpty(items) && <Columns columns={columns} items={items} />}
      </Container>
      {!!BannerContent && (
        <BottomBanner>
          <BannerContent />
        </BottomBanner>
      )}
    </>
  )
}

Footer.propTypes = {
  /**
   * The content of the footer's bottom banner. Optional.
   */
  bannerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * The columns' titles. Leave to 'undefined' if you just want
   * to display the columns's items without a title.
   */
  columns: PropTypes.arrayOf(PropTypes.string),
  /**
   * The footer's background image. It can either be an url or a
   * module-loaded image.
   */
  image: PropTypes.string,
  /**
   * The Columns' list of items.
   */
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
      }),
    ),
  ),
  /**
   * The footer's title.
   */
  title: PropTypes.string,
}

export { Footer }
export default styled(Footer)``
