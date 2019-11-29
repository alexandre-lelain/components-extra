import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Footer from 'components/Footer'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Footer/Item', module)

import { AccountCircle, Code, Email } from './Icons'

const StyledItem = styled(Footer.Item)`
  width: max-content;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `}
`
StyledItem.displayName = Footer.Item.displayName

story.add('Default', () => (
  <StyledItem icon={AccountCircle} href="#">
    My Account
  </StyledItem>
))

story.add('As a button', () => (
  <StyledItem icon={Code} onClick={action('clicked!')}>
    I'm a button
  </StyledItem>
))

const ExtendedItem = styled(Footer.Item)`
  * {
    color: white;
  }
  background-color: blue;
  border-radius: 3px;
  width: max-content;
`
story.add(
  'Extended',
  () => (
    <ExtendedItem icon={Email} href="#">
      I'm a button
    </ExtendedItem>
  ),
  { info: 'This `Footer.Item` was extended using `styled()` from styled-components.' },
)

const info = `
Has to be used in a \`<Footer>\` component.
You can use all the props available in the Material-ui's \`Button\`: https://material-ui.com/api/button/.
`

createApiStory(story, Footer.Item.target, info)
