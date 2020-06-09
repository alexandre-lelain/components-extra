import React from 'react'
import styled, { css } from 'styled-components'
import { Link, Typography } from '@material-ui/core'

import { slugify } from '@utils'

const scrollStyle = css`
  scroll-margin-top: 108px;
  scroll-snap-margin-top: 108px;
`

const StyledTitle1 = styled(Typography).attrs(() => ({
  variant: 'h2',
  component: 'h1',
  color: 'textPrimary',
}))`
   ${scrollStyle};
`

const StyledTitle2 = styled(Typography).attrs(() => ({
  variant: 'h4',
  component: 'h2',
  color: 'textPrimary',
}))`
   ${scrollStyle};
`

const StyledTitle3 = styled(Typography).attrs(() => ({
  variant: 'h5',
  component: 'h3',
  color: 'textPrimary',
}))`
   ${scrollStyle};
`

const Title = ({ container: Container, children, ...rest }) => {
  const name = slugify(children)
  const href = `#${name}`

  return (
    <Container id={name} {...rest}>
      <Link color="inherit" href={href}>{children}</Link>
    </Container>
  )
}

const Title1 = props => <Title container={StyledTitle1} {...props} />

const Title2 = props => <Title container={StyledTitle2} {...props} />

const Title3 = props => <Title container={StyledTitle3} {...props} />


export { Title1, Title2, Title3 }