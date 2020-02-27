import React from 'react'
import { Button, SvgIcon } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { LiveEditor, LiveError } from 'react-live'

export const resizableStyle = {
  border: 'solid 1px #ddd',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1px 2px 4px 0px',
  borderRadius: '4px',
}

const commonStyle = css`
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`

export const StyledLiveEditor = styled(LiveEditor)`
  ${commonStyle};
`

export const StyledLiveError = styled(LiveError)`
  background-color: #ff4757;
  color: white;
  ${commonStyle};
`

export const StyledButton = styled(Button).attrs(({ theme }) => ({
  variant: 'outlined',
  size: 'small',
  color: theme.palette.type === 'dark' ? 'secondary' : 'primary',
}))``

export const ControlsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 4px 0px;

  ${StyledButton}:first-of-type {
    margin-right: 8px;
  }
`

const StyledIcon = styled(SvgIcon)`
  margin-right: 4px;
`

export const CodeIcon = () => (
  <StyledIcon fontSize="small">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
  </StyledIcon>
)

export const CopyIcon = () => (
  <StyledIcon fontSize="small">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
  </StyledIcon>
)
