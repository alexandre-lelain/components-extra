import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Navbar from 'components/Navbar'

import createApiStory from '../../helpers/createApiStory'
import { BrandIcon } from './Icons'

const info = 'Has to be used inside a `<Navbar>` component.'

const story = storiesOf('Components|Navbar/Brand', module)

const StyledBrand = styled(Navbar.Brand)`
  width: max-content;
  background-color: ${({ theme }) => `
    ${theme.palette.primary.main};
  `};
`
StyledBrand.displayName = 'Navbar.Brand'

story.add(
  'Default',
  () => (
    <StyledBrand title="Awesome Navbar">
      <BrandIcon />
    </StyledBrand>
  ),
  { info },
)

story.add('Without children', () => <StyledBrand title="Awesome Navbar" />, { info })

story.add(
  'Without title',
  () => (
    <StyledBrand>
      <BrandIcon />
    </StyledBrand>
  ),
  { info },
)

story.add(
  'Without custom link',
  () => (
    <StyledBrand title="Awesome Navbar" href="https://www.youtube.com/watch?v=Ckom3gf57Yw">
      <BrandIcon />
    </StyledBrand>
  ),
  { info },
)

const BrandExtended = styled(Navbar.Brand)`
  background-color: green;
  width: max-content;
  * {
    color: black;
    font-size: 36px;
  }
`
story.add(
  'Extended',
  () => (
    <BrandExtended title="Awesome Navbar" href="https://www.youtube.com/watch?v=Ckom3gf57Yw">
      <BrandIcon />
    </BrandExtended>
  ),
  { info: info + '\n\nThis `Navbar.Brand` was extended using `styled()` from styled-components.' },
)

createApiStory(story, Navbar.Brand.target, info)
