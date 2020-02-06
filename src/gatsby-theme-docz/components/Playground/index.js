import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useConfig } from 'docz'
import copy from 'copy-text-to-clipboard'
import { LiveProvider, LivePreview } from 'react-live'
import { Resizable } from 're-resizable'
import { usePrismTheme } from 'gatsby-theme-docz/src/utils/theme'

import {
  resizableStyle,
  CodeIcon,
  CopyIcon,
  ControlsContainer,
  StyledLiveEditor,
  StyledLiveError,
  StyledButton,
} from './styles'

const COPY_LABELS = {
  copy: 'copy',
  copied: 'copied!',
}
const DELAY_BEFORE_RESET = 2000

export const Playground = ({ code, scope, language = 'jsx' }) => {
  const {
    themeConfig: { showPlaygroundEditor },
  } = useConfig()
  const theme = usePrismTheme()

  const [showEditor, setShowEditor] = useState(showPlaygroundEditor)
  const [scopeOnMount] = useState(scope)
  const [copyLabel, setCopyLabel] = useState(COPY_LABELS.copy)

  useEffect(() => {
    if (copyLabel === COPY_LABELS.copied) {
      setTimeout(() => setCopyLabel(COPY_LABELS.copy), DELAY_BEFORE_RESET)
    }
  }, [copyLabel])

  const onCopy = () => {
    copy(code)
    setCopyLabel(COPY_LABELS.copied)
  }

  const onEditCode = () => {
    setShowEditor(show => !show)
  }

  return (
    <LiveProvider code={code} scope={scopeOnMount} language={language} theme={theme}>
      <Resizable>
        <div style={resizableStyle}>
          <LivePreview />
        </div>
        <ControlsContainer>
          <StyledButton onClick={onCopy}>
            <CopyIcon />
            {copyLabel}
          </StyledButton>
          <StyledButton onClick={onEditCode}>
            <CodeIcon />
            Edit code
          </StyledButton>
        </ControlsContainer>
        {showEditor && <StyledLiveEditor />}
        <StyledLiveError />
      </Resizable>
    </LiveProvider>
  )
}

Playground.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  scope: PropTypes.object,
}
