import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Navbar, { BaseNavbar } from 'components/Navbar'
import createApiStory from '../helpers/createApiStory'

const navItems = [
  {
    href: '#link1',
    label: 'Awesome Link 1',
  },
  {
    href: '#link2',
    label: 'Awesome Link 2',
  },
  {
    href: '#link3',
    label: 'Awesome Link 3',
  },
  {
    href: '#link4',
    label: 'Awesome Link 4',
  },
]

const languages = [
  {
    label: 'French',
    locale: 'FR',
  },
  {
    label: 'English',
    isDefault: true,
    locale: 'EN',
  },
]

const StoryNavbar = styled(Navbar)`
  margin-top: 32px;
`
StoryNavbar.displayName = 'Navbar'

const BrandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="white"
      d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
BrandIcon.displayName = 'YourCustomIcon'

const FlagIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill={color} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const story = storiesOf('Components|Navbar', module)

story.add('Default', () => (
  <StoryNavbar>
    <Navbar.Brand title="Awesome Navbar">
      <BrandIcon />
    </Navbar.Brand>
  </StoryNavbar>
))

story.add('Sticky', () => (
  <>
    <StoryNavbar isSticky>
      <Navbar.Brand title="Awesome Navbar">
        <BrandIcon />
      </Navbar.Brand>
    </StoryNavbar>
    <div style={{ height: '1000px' }} />
  </>
))

story.add('Without Brand Icon', () => (
  <StoryNavbar>
    <Navbar.Brand title="Awesome Navbar" />
  </StoryNavbar>
))

story.add('With Language', () => (
  <StoryNavbar>
    <Navbar.Brand title="Awesome Navbar">
      <BrandIcon />
    </Navbar.Brand>
    <Navbar.Language selectedLanguage="English">
      <Navbar.LanguageItem label="english" onClick={action('Language changed to English')}>
        <FlagIcon color="red" />
        English
      </Navbar.LanguageItem>
      <Navbar.LanguageItem label="french" onClick={action('Language changed to French')}>
        <FlagIcon color="blue" />
        French
      </Navbar.LanguageItem>
    </Navbar.Language>
  </StoryNavbar>
))

createApiStory(story, BaseNavbar)
