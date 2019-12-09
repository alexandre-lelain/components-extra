import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { storiesOf } from '@storybook/react'

import resetCSS from 'utils/resetCSS'

import Container from '../introduction//components/Container'

const story = storiesOf('Utils|resetCSS', module)

const StyledTitle = styled.h1`
  ${resetCSS};
`

story.add('Default', () => <StyledTitle>This title's default browser style was reset</StyledTitle>)

const content = `
# How to use resetCSS helper

This helper will reset some of the default browser styles. You can use it as a css object inside your
styled-components as follow:

\`\`\`
import { resetCSS } from 'components-extra'

export default styled.h1\`
  \${resetCSS};
  ... // your style
\`

\`\`\`

**Note:** it is important to place the resetCSS helper first.
`
story.add(
  'How to use',
  () => (
    <Container>
      <ReactMarkdown source={content} />
    </Container>
  ),
  { info: { disable: true } },
)
