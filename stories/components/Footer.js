import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Link, Typography } from '@material-ui/core'

import { Footer } from 'components/Footer'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|Footer', module)

const Icon = styled.svg.attrs({
  'aria-hidden': 'true',
  focusable: false,
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  height: 24px;
  width: 24px;
`

const AccountCircle = props => (
  <Icon {...props}>
    <path
      fill="white"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
    ></path>
  </Icon>
)

const Code = props => (
  <Icon {...props}>
    <path
      fill="white"
      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
    ></path>
  </Icon>
)

const Email = props => (
  <Icon {...props}>
    <path
      fill="white"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    ></path>
  </Icon>
)

const items = [
  {
    icon: AccountCircle,
    label: 'Awesome link 1',
    href: '/',
  },
  {
    icon: Code,
    label: 'Awesome button 1',
    onClick: action('clicked on awesome button 1!'),
  },
  {
    icon: Email,
    label: 'Awesome link 2',
    href: 'mailto:lelain-dot-alexandre-at-gmail-dot-com',
  },
]

const BottomBannerContent = () => (
  <Typography>
    © Copyrights{' '}
    <Link color="secondary" href="/">
      Awesome website
    </Link>
  </Typography>
)

story.add('Default', () => <Footer title="Awesome footer" items={items} sections={3} />)

story.add('With bottom banner', () => (
  <Footer bannerContent={BottomBannerContent} title="Awesome footer" items={items} />
))

story.add('With background-image', () => (
  <Footer
    image="//cdn.pixabay.com/photo/2016/11/29/11/46/blurred-1869271_960_720.jpg"
    title="Awesome footer"
    items={items}
  />
))

story.add('With no title', () => <Footer items={items} />)

createApiStory(story, Footer)
