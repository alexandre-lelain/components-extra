import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Card from 'components/Card'

const Container = styled('div')`
  width: 70%;
  margin: auto;
`

storiesOf('Card', module).add('Default', () => (
  <Container>
    <Card title="Awesome card" />
  </Container>
))
