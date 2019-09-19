import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link, Typography } from '@material-ui/core'

import { Footer } from 'components/Footer'
import createApiStory from './helpers/createApiStory'

const story = storiesOf('Components|Footer', module)

const columns = ['Awesome site', 'Awesome links', 'Contact us']
const items = [
  [
    {
      label:
        'Awesome site is an awesome site that provides you with awesome things to help you in your awesome projects',
    },
  ],
  [
    {
      label: 'Awesome Link 1',
      href: '/',
    },
    {
      label: 'Awesome Link 2',
      href: '/',
    },
    {
      label: 'Awesome Link 3',
      href: '/',
    },
  ],
  [
    {
      label: 'Awesome Contact 1',
    },
    {
      label: 'Awesome Contact 2',
    },
    {
      label: 'Awesome Contact 3',
      href: '/',
    },
  ],
]

const BottomBannerContent = () => (
  <Typography>
    © Copyrights{' '}
    <Link color="secondary" href="/">
      Awesome website
    </Link>
  </Typography>
)

story.add('Default', () => <Footer title="Awesome footer" columns={columns} items={items} />)

story.add('With bottom banner', () => (
  <Footer bannerContent={BottomBannerContent} title="Awesome footer" />
))

story.add('With background-image', () => (
  <Footer image="//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg" title="Awesome footer" />
))

createApiStory(story, Footer)
