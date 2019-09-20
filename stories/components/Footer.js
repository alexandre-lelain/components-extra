import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Link, Typography } from '@material-ui/core'
import { AccountCircle, Code, Email } from '@material-ui/icons'

import { Footer } from 'components/Footer'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|Footer', module)

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
