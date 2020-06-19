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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ListItem: JSX.Element = ({ children, ordered, tight, ...rest }: ListItemProps) => {
  return (
    <StyledLi {...rest}>
      <ListItemContent>{children}</ListItemContent>
    </StyledLi>
  )
}

interface ListItemProps {
  children: any
  ordered?: boolean
  tight?: boolean
  rest?: object
}

export default ListItem