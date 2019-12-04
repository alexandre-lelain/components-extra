import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Navbar from 'components/Navbar'
import { BaseLanguageItem } from 'components/Navbar/components/LanguageItem'

import createApiStory from '../../helpers/createApiStory'
import { AmericaFlag } from './Icons'

const info = 'Has to be used inside a `<Navbar.Language>` component.'

const story = storiesOf('Components|Navbar/LanguageItem', module)

const StyledLanguageItem = styled(Navbar.LanguageItem).attrs({
  color: 'primary',
})`
  width: max-content;
`
StyledLanguageItem.displayName = 'Navbar.LanguageItem'

story.add(
  'Default',
  () => (
    <StyledLanguageItem label="english" onClick={action('clicked!')}>
      English
    </StyledLanguageItem>
  ),
  { info },
)

story.add(
  'With fancy children',
  () => (
    <StyledLanguageItem label="english" onClick={action('clicked!')}>
      <AmericaFlag />
      <p style={{ paddingLeft: '8px', margin: '4px' }}>English yeah! 🤘</p>
    </StyledLanguageItem>
  ),
  { info },
)

const LanguageItemExtended = styled(Navbar.LanguageItem)`
  background-color: green;
  width: max-content;
  padding: 18px;
  color: white;
  &:hover {
    background-color: black;
  }
`
story.add(
  'Extended',
  () => (
    <LanguageItemExtended label="english" onClick={action('clicked!')}>
      English
    </LanguageItemExtended>
  ),
  {
    info:
      info + '\n\nThis `Navbar.LanguageItem` was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, BaseLanguageItem, info)
