import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import Card from 'components/Card'

import PropsTable, { createData } from './components/PropsTable'

const Container = styled('div')`
  width: 70%;
  margin: auto;
  text-align: center;
`

storiesOf('Card', module).add('Default', () => (
  <Container>
    <Card
      actions={[
        {
          label: 'Awesome button',
          onClick: action('Awesome button clicked!'),
        },
        {
          label: 'Awesome link',
          href: '//components-extra.netlify.com',
        },
      ]}
      description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
      image="//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg"
      onCardClick={action('Awesome card clicked!')}
      title="Awesome card"
    />
  </Container>
))

storiesOf('Card', module).add('Without media', () => (
  <Container>
    <Card
      actions={[
        {
          label: 'Awesome link',
          href: '//components-extra.netlify.com',
        },
      ]}
      description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
      title="Awesome card"
    />
  </Container>
))

const props = [
  createData('actions', 'arrayOf({ label: string, href: string, onClick: func })', '[]', 'false'),
  createData('description', 'string', "''", 'false'),
  createData('image', 'string', 'null', 'false'),
  createData('onCardClick', 'func', 'noop', 'false'),
  createData('title', 'string', "''", 'true'),
]

storiesOf('Card', module).add('API', () => <PropsTable title="Card" rows={props} />, {
  info: { disable: true },
})
