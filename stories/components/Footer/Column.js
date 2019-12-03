import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Footer from 'components/Footer'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|Footer/Column', module)

import { AccountCircle, Code, Email } from './Icons'

const info = `
Has to be used inside a \`<Footer>\` component. 
`

const StyledColumn = styled(Footer.Column)`
  width: max-content;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
  `}
`
StyledColumn.displayName = Footer.Column.displayName

story.add(
  'Default',
  () => (
    <StyledColumn>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </StyledColumn>
  ),
  { info },
)

story.add(
  'With a title',
  () => (
    <StyledColumn title="Awesome title">
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </StyledColumn>
  ),
  { info },
)

story.add(
  'Inline',
  () => (
    <StyledColumn title="Awesome title" isInline>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </StyledColumn>
  ),
  { info },
)

const ExtendedColumn = styled(Footer.Column)`
  box-shadow: 2px 2px 2px 2px white;
  border-radius: 3px;
  padding: 32px;
  background-color: green;
`
story.add(
  'Extended',
  () => (
    <ExtendedColumn title="Awesome title" isInline>
      <Footer.Item icon={AccountCircle} href="#">
        My Account
      </Footer.Item>
      <Footer.Item icon={Code} onClick={action('Starting coding now!')}>
        Start Coding
      </Footer.Item>
      <Footer.Item icon={Email} href="lelain-dot-alexandre-at-gmail-dot-com">
        Contact Us
      </Footer.Item>
    </ExtendedColumn>
  ),
  { info: info + '\nThis `Footer.Column` was extended using `styled()` from styled-components.' },
)

createApiStory(story, Footer.Column.target, info)
