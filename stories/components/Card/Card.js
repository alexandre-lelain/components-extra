import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Card, { BaseCard } from 'components/Card'

import createApiStory from '../../helpers/createApiStory'

const StyledCard = styled(Card)`
  min-width: 250px;
  width: 50%;
  margin: auto;
  text-align: center;
`
StyledCard.displayName = 'Card'

const story = storiesOf('Components|Card', module)

story.add('Default', () => (
  <StyledCard
    description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
    image={{ src: '//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg' }}
    onClick={() => console.log('Awesome card clicked!')}
    title="Awesome card"
  >
    <Card.Button onClick={() => console.log('Awesome button clicked!')}>Awesome button</Card.Button>
    <Card.Button href="#">Awesome link</Card.Button>
  </StyledCard>
))

story.add('In Big mode', () => (
  <StyledCard
    description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
    image={{ src: '//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg' }}
    onClick={() => console.log('Awesome card clicked!')}
    title="Awesome card"
    big
  >
    <Card.Button onClick={() => console.log('Awesome button clicked!')}>Awesome button</Card.Button>
    <Card.Button href="#">Awesome link</Card.Button>
  </StyledCard>
))

story.add('Without media', () => (
  <StyledCard
    description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
    onClick={() => console.log('Awesome card clicked!')}
    title="Awesome card"
  >
    <Card.Button onClick={() => console.log('Awesome button clicked!')}>Awesome button</Card.Button>
    <Card.Button href="#">Awesome link</Card.Button>
    <Card.Button href="#">Awesome link the return</Card.Button>
  </StyledCard>
))

story.add('Without buttons', () => (
  <StyledCard
    description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
    image={{ src: '//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg' }}
    onClick={() => console.log('Awesome card clicked!')}
    title="Awesome card"
  />
))

story.add('With your own custom button', () => (
  <StyledCard
    description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
    image={{ src: '//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg' }}
    onClick={() => console.log('Awesome card clicked!')}
    title="Awesome card"
  >
    <button onClick={() => console.log('clicked on your custom constrol component')}>
      This is your component
    </button>
  </StyledCard>
))

const CardExtended = styled(Card)`
  width: 30%;
  min-width: 250px;
  margin: auto;
`
story.add(
  'Extended - smaller',
  () => (
    <CardExtended
      description="This is an awesome card. An awesome card is easy to use and only have a few props so you can implement it very quickly, while you can still customize its colors. Did you know this component is built on top of material-ui's Card ?"
      image={{ src: '//torange.biz/photofx/74/8/coffee-cup-drop-74081.jpg' }}
      onClick={() => console.log('Awesome card clicked!')}
      title="Awesome card"
    >
      <Card.Button onClick={() => console.log('Awesome button clicked!')}>
        Awesome button
      </Card.Button>
      <Card.Button href="#">Awesome link</Card.Button>
    </CardExtended>
  ),
  { info: 'This `Card` component was extended using `styled()` from styled-components.' },
)

const info = `
See also:
- [Card.Button](/?path=/story/components-card-button--api)
`
createApiStory(story, BaseCard, info)
