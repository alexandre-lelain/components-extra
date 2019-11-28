import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Footer from 'components/Footer'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Footer/Item', module)

import { AccountCircle } from './Icons'

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

const info = `
Has to be used in a \`<Footer>\` component.
You can use all the props available in the Material-ui's \`Button\`: https://material-ui.com/api/button/.
`

createApiStory(story, Footer.Item.target, info)
