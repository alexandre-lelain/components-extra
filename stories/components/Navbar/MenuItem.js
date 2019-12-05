import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar from 'components/Navbar'
import { BaseMenuItem } from 'components/Navbar/components/MenuItem'
import createApiStory from '../../helpers/createApiStory'
import { BrandIcon, AmericaFlag } from './Icons'

const story = storiesOf('Components|Navbar/MenuItem', module)

const info = `Has to be used inside a \`<Navbar.Menu>\` component.\n`

const StoryMenuItem = styled(Navbar.MenuItem)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `}
  width: max-content;
`
StoryMenuItem.displayName = 'Navbar.MenuItem'

story.add('Default', () => <StoryMenuItem href="#">Awesome Link</StoryMenuItem>, { info })

story.add(
  'As a button',
  () => <StoryMenuItem onClick={() => console.log('clicked!')}>Awesome Link</StoryMenuItem>,
  { info },
)

story.add(
  'With fancy children',
  () => (
    <StoryMenuItem onClick={() => console.log('clicked!')}>
      <BrandIcon />
      <p style={{ paddingLeft: '8px', paddingRight: '8px', margin: '0px' }}>Awesome Link</p>
      <AmericaFlag />
    </StoryMenuItem>
  ),
  { info },
)

const MenuItemExtended = styled(Navbar.MenuItem)`
  background-color: green;
  width: max-content;
  padding: 8px;
  &:hover {
    background-color: red;
  }
`

story.add('Extended', () => <MenuItemExtended href="#">Extended MenuItem</MenuItemExtended>, {
  info,
})

createApiStory(story, BaseMenuItem)
