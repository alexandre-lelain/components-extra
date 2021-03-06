import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormControlLabel, Switch } from '@material-ui/core'

import { isBoolean } from '../../../utils'
import { ComponentExtra } from '../../../types'

const Container = styled('div')`
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }): string => `
    background-color: ${theme.palette.background};
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`

const StyledSwitch = styled(Switch)`
  margin: 0 11px 0 4px;
`

const ChildrenContainer = styled('div')`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: auto;
  }
  ${({ theme }): string => `
    ${theme.breakpoints.down('sm')} {
      margin-top: 12px;
    }
  `}
`

const Controls: React.FC<CookiesConsentControlsProps> = ({
  checked,
  children,
  onChange,
  switchLabel,
  ...rest
}: CookiesConsentControlsProps) => {
  const [localChecked, setLocalChecked] = useState(false)

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event)
    if (!isBoolean(checked)) {
      setLocalChecked((localChecked) => !localChecked)
    }
  }

  return (
    <Container {...rest}>
      {onChange && (
        <FormControlLabel
          control={
            <StyledSwitch
              checked={isBoolean(checked) ? checked : localChecked}
              onChange={onToggle}
              color="primary"
            />
          }
          label={switchLabel}
        />
      )}
      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </Container>
  )
}

Controls.displayName = 'CookiesConsent.Controls'

Controls.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  switchLabel: PropTypes.string,
}

export interface CookiesConsentControlsProps {
  /**
   * If true, the switch is checked and the category is on. Leave to undefined if you don't
   * need to control the component.
   */
  checked?: boolean
  /**
   * The content of the controls section. You can either use CookiesConsent.Button or
   * bring your own controls.
   */
  children?: React.ReactNode
  /**
   * Function called on switch change. Signature: (event) => void. You can access the value using `event.target.checked`.
   * If you don't provide an onChange function, the switch will not be displayed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The switch's label.
   */
  switchLabel?: string
}

export type CookiesConsentControlsType = ComponentExtra<CookiesConsentControlsProps>

const ControlsExtra = styled(Controls)`` as CookiesConsentControlsType

export default ControlsExtra
