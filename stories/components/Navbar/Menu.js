import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar from 'components/Navbar'
import createApiStory from '../../helpers/createApiStory'
import { BrandIcon, AmericaFlag } from './Icons'

const story = storiesOf('Components|Navbar/Menu', module)

const info = `Has to be used inside a \`<Navbar>\` component.\n`

const StoryMenu = styled(Navbar.Menu)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `}
  width: max-content;
`
StoryMenu.displayName = 'Navbar.Menu'

story.add(
  'Default',
  () => (
    <StoryMenu label="open-menu">
      <Navbar.MenuItem href="#">Awesome Link 1</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 2</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 3</Navbar.MenuItem>
    </StoryMenu>
  ),
  { info },
)

story.add(
  'With lots of items',
  () => (
    <StoryMenu>
      <Navbar.MenuItem href="#">Awesome Link 1</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 2</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 3</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 4</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 5</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 6</Navbar.MenuItem>
    </StoryMenu>
  ),
  { info },
)

story.add(
  'With fancy items',
  () => (
    <StoryMenu>
      <Navbar.MenuItem href="#">
        <BrandIcon />
        Awesome Link 1
      </Navbar.MenuItem>
      <Navbar.MenuItem href="#">
        <AmericaFlag />
      </Navbar.MenuItem>
      <Navbar.MenuItem href="#">
        <BrandIcon />
      </Navbar.MenuItem>
    </StoryMenu>
  ),
  { info },
)

const MenuExtended = styled(Navbar.Menu)`
  background-color: green;
  padding: 12px;
  ${Navbar.MenuItem} {
    margin: 18px;
    font-size: 28px;
  }
`

story.add(
  'Extended',
  () => (
    <MenuExtended>
      <Navbar.MenuItem href="#">Awesome Link 1</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 2</Navbar.MenuItem>
      <Navbar.MenuItem href="#">Awesome Link 3</Navbar.MenuItem>
    </MenuExtended>
  ),
  {
    info:
      info + '\nThis `Navbar.Menu` component was extended using `styled()` from styled-components.',
  },
)

createApiStory(story, Navbar.Menu.target)
