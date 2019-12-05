import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar from 'components/Navbar'

import createApiStory from '../../helpers/createApiStory'
import { FlagIcon } from './Icons'

const info = 'Has to be used inside a `<Navbar>` component.'

const story = storiesOf('Components|Navbar/Language', module)

const StyledLanguage = styled(Navbar.Language).attrs({
  color: 'primary',
})``
StyledLanguage.displayName = 'Navbar.Language'

story.add(
  'Default',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    return (
      <StyledLanguage selectedLanguage={selectedLanguage}>
        <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
          English
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
          Français
        </Navbar.LanguageItem>
      </StyledLanguage>
    )
  },
  { info },
)

story.add(
  'With a very looooong language',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    return (
      <StyledLanguage selectedLanguage={selectedLanguage}>
        <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
          English
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
          Français
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Very very very long language')}>
          <FlagIcon /> :) Very very very long language :)
        </Navbar.LanguageItem>
      </StyledLanguage>
    )
  },
  { info },
)

story.add(
  'Without cutting selectedLanguage for small screens',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    return (
      <StyledLanguage selectedLanguage={selectedLanguage} smallScreenSupport={false}>
        <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
          English
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
          Français
        </Navbar.LanguageItem>
      </StyledLanguage>
    )
  },
  { info },
)

story.add(
  'With your custom items',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    return (
      <StyledLanguage selectedLanguage={selectedLanguage}>
        <button label="english" onClick={() => setLang('English')}>
          English
        </button>
        <button label="french" onClick={() => setLang('Français')}>
          Français
        </button>
      </StyledLanguage>
    )
  },
  { info },
)

const LanguageExtended = styled(Navbar.Language)`
  background-color: green;
  padding: 16px;
  box-shadow: 2px 2px 2px 2px black;
  &:hover {
    background-color: red;
  }
  * {
    color: dark;
  }
`
story.add(
  'Extended',
  () => {
    const [selectedLanguage, setLang] = React.useState('English')
    return (
      <LanguageExtended selectedLanguage={selectedLanguage}>
        <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
          English
        </Navbar.LanguageItem>
        <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
          Français
        </Navbar.LanguageItem>
      </LanguageExtended>
    )
  },
  {
    info: info + '\n\nThis `Navbar.Language` was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, Navbar.Language.target, info)
