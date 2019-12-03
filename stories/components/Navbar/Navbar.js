import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar, { BaseNavbar } from 'components/Navbar'
import createApiStory from '../../helpers/createApiStory'
import { BrandIcon } from './Icons'

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

const StoryNavbar = styled(Navbar)`
  margin-top: 32px;
`
StoryNavbar.displayName = 'Navbar'

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

story.add('With Language', () => {
  const [selectedLanguage, setLang] = React.useState('English')
  return (
    <StoryNavbar>
      <Navbar.Brand title="Awesome Navbar">
        <BrandIcon />
      </Navbar.Brand>
      <Navbar.Language selectedLanguage={selectedLanguage}>
        <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
          English
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
          Français
        </Navbar.LanguageItem>
      </Navbar.Language>
    </StoryNavbar>
  )
})

createApiStory(story, BaseNavbar)
