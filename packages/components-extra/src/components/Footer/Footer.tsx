import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CardMediaProps } from '@material-ui/core'

import BottomBannerContainer from './components/BottomBanner'
import Column, { ColumnType } from './components/Column'
import FooterContainer from './components/FooterContainer'
import Item, { ItemType } from './components/Item'
import ItemsContainer from './components/ItemsContainer'
import Title from './components/Title'
import TopContainer from './components/TopContainer'

/**
 *
 * API:
 *
 * - [Footer API](https://components-extra.netlify.app/components/footer)
 */
const Footer = forwardRef(
  (
    { bottomBanner, children, imageProps, title, ...rest }: FooterProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <FooterContainer ref={ref} {...rest}>
        <TopContainer {...imageProps}>
          {title && <Title text={title} />}
          {children && <ItemsContainer>{children}</ItemsContainer>}
        </TopContainer>
        {bottomBanner && <BottomBannerContainer>{bottomBanner}</BottomBannerContainer>}
      </FooterContainer>
    )
  },
) as FooterType

export interface FooterProps {
  /**
   * The content of the bottom banner. Leave to undefined if you don't want one.
   */
  bottomBanner?: React.ReactNode
  /**
   * The Footer's children. You can use Footer.Column & Footer.Item components
   * or bring any component you want.
   */
  children?: React.ReactNode
  /**
   * The footer's background image. Please refer to MUI's CardMedia's props for the exhaustive list:
   * https://material-ui.com/api/card-media/.
   */
  imageProps?: CardMediaProps
  /**
   * The ref to attach to the footer element.
   */
  ref?: React.Ref<HTMLElement>
  /**
   * The footer's title.
   */
  title?: string
}

export interface FooterComponents {
  Column: ColumnType
  Item: ItemType
}

export type FooterType = React.ForwardRefExoticComponent<FooterProps> & FooterComponents

Footer.propTypes = {
  bottomBanner: PropTypes.node,
  imageProps: PropTypes.object,
  title: PropTypes.string,
}

/**
 * Exposed components.
 */
Footer.Column = Column
Footer.Item = Item

export { Footer as BaseFooter }
export default styled(Footer)``
