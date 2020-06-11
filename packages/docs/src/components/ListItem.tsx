import React from 'react'
import styled from 'styled-components'

import Paragraph from './Paragraph'

const StyledLi = styled.li`
  ${({ theme: { spacing } }): string => `
    margin-bottom: ${spacing(1)}px;
  `}
`

const ListItemContent = styled(Paragraph).attrs(() => ({
  component: 'span',
}))``

// eslint-disable-next-line no-unused-vars
const ListItem = ({ children, ordered, tight, ...rest }: ListItem) => {
  return (
    <StyledLi {...rest}>
      <ListItemContent>{children}</ListItemContent>
    </StyledLi>
  )
}

interface ListItem {
  children: any
  ordered?: boolean
  tight?: boolean
  rest?: object
}

export default ListItem