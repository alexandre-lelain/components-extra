import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Link, Typography } from '@material-ui/core'

import Footer, { BaseFooter } from 'components/Footer'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Footer', module)

import { AccountCircle, Code, Email } from './Icons'

const BottomBannerContent = () => (
  <Typography>
    © Copyrights{' '}
    <Link color="secondary" href="/">
      Awesome website
    </Link>
  </Typography>
)

story.add('Default', () => (
  <Footer title="Awesome footer" bottomBanner={BottomBannerContent}>
    <Footer.Column isInline>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('Big Footer', () => (
  <Footer title="Awesome footer" bottomBanner={BottomBannerContent}>
    <Footer.Column title="Awesome Column A">
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
    <Footer.Column title="Awesome Column B">
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
    <Footer.Column title="Awesome Column C">
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('With bottom banner', () => <Footer title="Awesome footer">qsdsq</Footer>)

story.add('With background-image', () => (
  <Footer
    title="Awesome footer"
    image={{ src: '//cdn.pixabay.com/photo/2016/11/29/11/46/blurred-1869271_960_720.jpg' }}
  >
    qsdsq
  </Footer>
))

story.add('With no title', () => <Footer>qsd</Footer>)

createApiStory(story, BaseFooter)
