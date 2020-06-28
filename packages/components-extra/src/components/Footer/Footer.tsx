import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CardMediaProps } from '@material-ui/core'

import { ComponentExtra } from '../../types'

import BottomBannerContainer from './components/BottomBanner'
import Column, { FooterColumnType } from './components/Column'
import FooterContainer from './components/FooterContainer'
import Item, { FooterItemType } from './components/Item'
import ItemsContainer from './components/ItemsContainer'
import Title from './components/Title'
import TopContainer from './components/TopContainer'

/**
 *
 * API:
 *
 * - [Footer API](https://components-extra.netlify.app/components/footer)
 */
const Footer: React.FC<FooterProps> = ({
  bottomBanner,
  children,
  forwardedRef,
  image,
  title,
  ...rest
}: FooterProps) => {
  return (
    <FooterContainer ref={forwardedRef} {...rest}>
      <TopContainer {...image}>
        {title && <Title text={title} />}
        {children && <ItemsContainer>{children}</ItemsContainer>}
      </TopContainer>
      {bottomBanner && <BottomBannerContainer>{bottomBanner}</BottomBannerContainer>}
    </FooterContainer>
  )
}

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
   * The ref to attach to the footer element.
   */
  forwardedRef?: React.Ref<HTMLDivElement>
  /**
   * The footer's background image. Please refer to MUI's CardMedia's props for the exhaustive list:
   * https://material-ui.com/api/card-media/.
   */
  image?: CardMediaProps
  /**
   * The footer's title.
   */
  title?: string
}

export interface FooterComponents {
  Column: FooterColumnType
  Item: FooterItemType
}

export type FooterType = ComponentExtra<FooterProps, FooterComponents>

Footer.propTypes = {
  bottomBanner: PropTypes.node,
  children: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
}

const FooterExtra = styled(
  forwardRef((props: FooterProps, ref: React.Ref<HTMLDivElement>) => (
    <Footer {...props} forwardedRef={ref} />
  )),
)`` as FooterType

/**
 * Exposed components.
 */
FooterExtra.Column = Column
FooterExtra.Item = Item

export default FooterExtra
