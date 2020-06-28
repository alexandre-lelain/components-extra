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

const ListItem: React.FC<ListItemProps> = ({
  children, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ordered, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tight,
  ...rest
}: ListItemProps) => {
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
}

export default ListItem
