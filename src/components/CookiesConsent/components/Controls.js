import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Switch } from '@material-ui/core'

import { isBoolean } from 'utils'

import CategoryTitle from './CategoryTitle'

const SwitchLabel = styled(CategoryTitle)`
  ${({ theme }) => `
  ${theme.breakpoints.up('sm')} {
    flex-basis: 50%;
  }
`}
`

const Container = styled('div')`
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.light};
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`

const SwitchContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 60%;
`

const ChildrenContainer = styled('div')`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: auto;
  }
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      margin-top: 12px;
    }
  `}
`

const Controls = ({
  checked = undefined,
  children,
  onChange = undefined,
  switchLabel = null,
  ...rest
}) => {
  const [localChecked, setLocalChecked] = useState(false)

  const onToggle = event => {
    onChange && onChange(event.target.checked)
    if (!isBoolean(checked)) {
      setLocalChecked(localChecked => !localChecked)
    }
  }

  return (
    <Container {...rest}>
      {onChange && (
        <SwitchContainer>
          <Switch
            checked={isBoolean(checked) ? checked : localChecked}
            onChange={onToggle}
            color="primary"
          />
          {switchLabel && <SwitchLabel>{switchLabel}</SwitchLabel>}
        </SwitchContainer>
      )}
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

Controls.propTypes = {
  /**
   * If true, the switch is checked and the category is on. Leave to undefined if you don't
   * need to control the component.
   */
  checked: PropTypes.bool,
  /**
   * Function called on switch change. Signature: (checked: bool) => void.
   * If you don't provide an onChange function, the switch will not be displayed.
   */
  onChange: PropTypes.func,
  /**
   * The switch's label.
   */
  switchLabel: PropTypes.string,
}

Controls.displayName = 'CookiesConsent.Controls'

const DefaultComponent = styled(Controls)``
DefaultComponent.displayName = Controls.displayName
DefaultComponent.propTypes = Controls.propTypes

export { Controls as BaseControls }
export default DefaultComponent
