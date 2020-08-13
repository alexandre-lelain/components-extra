import React from 'react'
import styled, { css } from 'styled-components'
import { Divider, Typography } from '@material-ui/core'

import { SpacedParagraph } from './Paragraph'

const commonStyle = css`
  font-weight: bold;
  color: cadetblue;
`

const Title = styled(Typography).attrs(() => ({
  variant: 'h3',
  component: 'h1',
}))`
  ${commonStyle};
`

const SubTitle = styled(Typography).attrs(() => ({
  variant: 'h5',
  component: 'h2',
}))`
  ${commonStyle};
  margin-bottom: 24px;
`

const Separator = styled(Divider)`
  width: 40%;
  margin: 18px auto 32px auto;
`

const Introduction: React.FC = () => {
  return (
    <>
      <Title>components-extra</Title>
      <Separator />
      <SubTitle>React UI molecule components based on Material-UI & styled-components.</SubTitle>
      <SpacedParagraph>
        Thank you for using components-extra ❤. Here you will learn how to set up in 2 minutes the
        lib inside your app.
      </SpacedParagraph>
    </>
  )
}

export default Introduction
