import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Footer from 'components/Footer'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Footer/Item', module)

import { AccountCircle, Code, Email } from './Icons'

const info = `
Has to be used inside a \`<Footer.Column>\` component. 
`

const StyledItem = styled(Footer.Item)`
  width: max-content;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `}
`
StyledItem.displayName = Footer.Item.displayName

story.add(
  'Default',
  () => (
    <StyledItem icon={AccountCircle} href="#">
      My Account
    </StyledItem>
  ),
  { info },
)

story.add(
  'As a button',
  () => (
    <StyledItem icon={Code} onClick={() => console.log('clicked!')}>
      I'm a button
    </StyledItem>
  ),
  { info },
)

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
  { info: info + '\nThis `Footer.Item` was extended using `styled()` from styled-components.' },
)

const apiInfo =
  info +
  `\n
You can use all the props available in the Material-ui's \`Button\`: https://material-ui.com/api/button/.
`
createApiStory(story, Footer.Item.target, apiInfo)
