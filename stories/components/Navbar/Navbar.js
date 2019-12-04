import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar, { BaseNavbar } from 'components/Navbar'
import createApiStory from '../../helpers/createApiStory'
import { BrandIcon } from './Icons'

const StoryNavbar = styled(Navbar)`
  margin-top: 32px;
`
StoryNavbar.displayName = 'Navbar'

const story = storiesOf('Components|Navbar', module)

const info = `
If you play around with your browser's window size, you will see that the
menu automatically switch from *mobile* to *desktop* mode and vice versa.\n
No config or prop needed on your side! This Navbar does it for you :)\n
By default, it switches to *desktop* mode once the \`theme.breakpoints.md\` (default: *960px*) 
is reached. You can of course override
it when you bring your own \`theme\` in the \`StyledProvider\` provider at the root of your app.
`

story.add(
  'Default',
  () => (
    <StoryNavbar>
      <Navbar.Brand title="Awesome Navbar">
        <BrandIcon />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.MenuItem href="#">Awesome Link 1</Navbar.MenuItem>
        <Navbar.MenuItem href="#">Awesome Link 2</Navbar.MenuItem>
        <Navbar.MenuItem href="#">Awesome Link 3</Navbar.MenuItem>
      </Navbar.Menu>
    </StoryNavbar>
  ),
  { info },
)

story.add(
  'Sticky',
  () => (
    <>
      <StoryNavbar isSticky>
        <Navbar.Brand title="Awesome Navbar">
          <BrandIcon />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.MenuItem href="#">Awesome Link 1</Navbar.MenuItem>
          <Navbar.MenuItem href="#">Awesome Link 2</Navbar.MenuItem>
          <Navbar.MenuItem href="#">Awesome Link 3</Navbar.MenuItem>
        </Navbar.Menu>
      </StoryNavbar>
      <div style={{ height: '1000px' }} />
    </>
  ),
  { info },
)

story.add(
  'Without Brand Icon',
  () => (
    <StoryNavbar>
      <Navbar.Brand title="Awesome Navbar" />
    </StoryNavbar>
  ),
  { info },
)

story.add(
  'With Language',
  () => {
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
  },
  { info },
)

story.add(
  'Real life use-case',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    const isEnglish = selectedLanguage === 'English'
    return (
      <StoryNavbar>
        <Navbar.Brand title="Components-extra">
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
        <Navbar.Menu>
          <Navbar.MenuItem href="/">
            {isEnglish ? 'Visit Storybook' : 'Visiter le Storybook'}
          </Navbar.MenuItem>
          <Navbar.MenuItem href="https://github.com/alexandre-lelain/components-extra/issues">
            {isEnglish ? 'Open an issue' : 'Ouvrir une issue'}
          </Navbar.MenuItem>
          <Navbar.MenuItem href="https://github.com/alexandre-lelain/components-extra/pulls">
            {isEnglish ? 'Open a PR' : 'Faire une PR'}
          </Navbar.MenuItem>
        </Navbar.Menu>
      </StoryNavbar>
    )
  },
  { info },
)

const apiInfo =
  info +
  `\n
See also:
- [Navbar.Brand](/?path=/story/components-navbar-brand--api)
- [Navbar.Language](/?path=/story/components-navbar-language--api)
- [Navbar.LanguageItem](/?path=/story/components-navbar-languageitem--api)
- [Navbar.Menu](/?path=/story/components-navbar-menu--api)
- [Navbar.MenuItem](/?path=/story/components-navbar-menuitem--api)
`
createApiStory(story, BaseNavbar, apiInfo)
