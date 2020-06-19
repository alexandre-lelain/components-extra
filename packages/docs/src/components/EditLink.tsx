import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import { Pencil } from '@icons'
import { useGithubEditLink } from '@hooks'

const StyledLink = styled(Button)`
  position: absolute;
  ${({ theme: { spacing }}): string => `
    right: ${spacing(3)}px;
    top: 84px;
  `}
`

const EditLink: React.FC<EditLinkProps> = ({ chunkName }: EditLinkProps) => {
  const href = useGithubEditLink(chunkName)
  return href ? (
    <StyledLink startIcon={<Pencil />} href={href} target="__blank" rel="noreferer noopener">
      Edit page
    </StyledLink>
  ) : <></>
}

interface EditLinkProps {
  chunkName: string
}

export default EditLink