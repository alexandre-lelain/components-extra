import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
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
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
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
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
    <Footer.Column title="Awesome Column B">
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
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
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('Without bottom banner', () => (
  <Footer title="Awesome footer">
    <Footer.Column isInline>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('With background-image', () => (
  <Footer
    title="Awesome footer"
    image={{ src: 'https://ak4.picdn.net/shutterstock/videos/3200194/thumb/9.jpg' }}
  >
    <Footer.Column>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
    <Footer.Column>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('With no title', () => (
  <Footer>
    <Footer.Column isInline>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={() => console.log('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </Footer.Column>
  </Footer>
))

story.add('With no icons on items', () => (
  <Footer title="Awesome footer">
    <Footer.Column title="Awesome column A">
      <Footer.Item href="#">My Account</Footer.Item>
      <Footer.Item onClick={() => console.log('Starting coding now!')}>Start Coding</Footer.Item>
      <Footer.Item href="lelain-dot-alexandre-at-gmail-dot-com">Contact Us</Footer.Item>
    </Footer.Column>
    <Footer.Column title="Awesome column B">
      <Footer.Item href="lelain-dot-alexandre-at-gmail-dot-com">Contact Us</Footer.Item>
      <Footer.Item onClick={() => console.log('Starting coding now!')}>
        Start Coding now !! sqd sd
      </Footer.Item>
      <Footer.Item href="#">My Account</Footer.Item>
    </Footer.Column>
  </Footer>
))

const ExtendedFooter = styled(Footer)`
  background-color: green;
  border-radius: 32px;
`
const ExtendedColumn = styled(Footer.Column)`
  box-shadow: 2px 2px 2px 2px white;
  border-radius: 3px;
`
const ExtendedItem = styled(Footer.Item)`
  * {
    color: #ccccff;
    font-size: 24px;
  }
`

story.add(
  'Extended',
  () => (
    <ExtendedFooter>
      <ExtendedColumn isInline>
        <ExtendedItem icon={AccountCircle} href="#">
          My Account
        </ExtendedItem>
        <ExtendedItem icon={Code} onClick={() => console.log('Starting coding now!')}>
          Start Coding
        </ExtendedItem>
        <ExtendedItem icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
          Contact Us
        </ExtendedItem>
      </ExtendedColumn>
    </ExtendedFooter>
  ),
  {
    info: `
This \`Footer\` was extended using \`styled()\` from styled-components.
`,
  },
)

const info = `
See also:
- [Footer.Column](/?path=/story/components-footer-column--api)
- [Footer.Item](/?path=/story/components-footer-item--api)
`
createApiStory(story, BaseFooter, info)
