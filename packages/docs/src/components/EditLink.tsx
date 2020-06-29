import React from 'react'
import styled from 'styled-components'
import { Button, ExtendButtonBase, ButtonTypeMap } from '@material-ui/core'

import { Pencil } from '@icons'
import { useGithubEditLink } from '@hooks'

const StyledLink: ExtendButtonBase<ButtonTypeMap> = styled(Button)`
  position: absolute;
  ${({ theme: { breakpoints, spacing }}): string => `
    right: ${spacing(3)}px;
    top: 84px;
    ${breakpoints.down('xs')} {
      right: ${spacing(1)}px;
    }
  `}
`

const EditLink: React.FC<EditLinkProps> = ({ chunkName }: EditLinkProps) => {
  const href = useGithubEditLink(chunkName)
  return href ? (
    <StyledLink startIcon={<Pencil />} href={href} target="_blank" rel="noreferer noopener">
      Edit page
    </StyledLink>
  ) : <></>
}

interface EditLinkProps {
  chunkName: string
}

export default EditLink