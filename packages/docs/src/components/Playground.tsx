import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { replace } from 'lodash-es'
import { Button } from '@material-ui/core'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import copy from 'copy-text-to-clipboard'
import { Resizable } from 're-resizable'
import theme from "prism-react-renderer/themes/oceanicNext"

import { Copy, Code } from '@icons'
import { SpacedParagraph } from './Paragraph'
import Link from './Link'

import * as componentsExtra from 'components-extra'
import * as componentsDocs from './docs'
const scope = { ...componentsExtra, ...componentsDocs }

const COPY_LABELS = {
  copy: 'copy',
  copied: 'copied!',
}

const DELAY_BEFORE_RESET = 2000

const resizableProps = {
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
}

const resizableStyle = {
  border: 'solid 1px #ddd',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1px 2px 4px 0px',
  borderRadius: '4px',
}

const commonStyle = css`
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`

const StyledLiveEditor = styled(LiveEditor)`
  ${commonStyle};
`

const StyledLiveError = styled(LiveError)`
  background-color: #ff4757;
  color: white;
  overflow-x: auto;
  ${commonStyle};
`

const StyledButton = styled(Button).attrs(() => ({
  variant: 'outlined',
  size: 'small',
}))``

const ControlsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 4px 0px;

  svg {
    margin-right: 4px;
  }

  ${StyledButton}:first-of-type {
    margin-right: 8px;
  }
`

const Container = styled.div`
  ${({ theme: { spacing }}): string => `
    margin: ${spacing(4)}px 0px;
  `}
`

const LIVE_PATTERN = /\/\/ live(-extended)?/
const EXTENDED_PATTERN = /\/\/ live-extended/

const Playground: JSX.Element = ({ children }: PlaygroundProps) => {
  const [showEditor, setShowEditor] = useState(false)
  const [copyLabel, setCopyLabel] = useState(COPY_LABELS.copy)
  const { children: code, className } = children.props
  const [, language = "jsx"] = className.match(/language-([\S]+)/)

  useEffect(() => {
    if (copyLabel === COPY_LABELS.copied) {
      setTimeout(() => setCopyLabel(COPY_LABELS.copy), DELAY_BEFORE_RESET)
    }
  }, [copyLabel])

  const onCopy: void = () => {
    copy(code)
    setCopyLabel(COPY_LABELS.copied)
  }

  const onEditCode: void = () => {
    setShowEditor((show) => !show)
  }
  
  if (code.match(LIVE_PATTERN)) {
    const cleansedCode = replace(code, LIVE_PATTERN, '').trim()
    return (
      <>
        {code.match(EXTENDED_PATTERN) && (
          <SpacedParagraph>
            This component was extended using <Link href="https://styled-components.com/docs/api">styled()</Link> from styled-components.
          </SpacedParagraph>
        )}
        <Container>
          <LiveProvider code={cleansedCode} scope={scope} language={language} theme={theme}>
            <Resizable {...resizableProps}>
              <div style={resizableStyle}>
                <LivePreview />
              </div>
              <ControlsContainer>
                <StyledButton onClick={onCopy}>
                  <Copy fontSize="small"/>
                  {copyLabel}
                </StyledButton>
                <StyledButton onClick={onEditCode}>
                  <Code fontSize="small"/>
                  Edit code
                </StyledButton>
              </ControlsContainer>
              {showEditor && <StyledLiveEditor />}
              <StyledLiveError />
            </Resizable>
          </LiveProvider>
        </Container>
      </>   
    )
  }
  return <pre className={className}>{children}</pre>
}

interface PlaygroundProps {
  children: object
}

export default Playground