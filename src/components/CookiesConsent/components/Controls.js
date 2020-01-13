import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Switch, Typography } from '@material-ui/core'

import CategoryTitle from './CategoryTitle'

const Container = styled('div')`
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => `
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
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      margin-top: 12px;
    }
  `}
`

const Controls = ({ checked = false, children, onChange, switchLabel = null, ...rest }) => {
  return (
    <Container {...rest}>
      <SwitchContainer>
        <Switch checked={checked} onChange={onChange} color="primary" />
        {switchLabel && <CategoryTitle>{switchLabel}</CategoryTitle>}
      </SwitchContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

Controls.propTypes = {
  /**
   * If true, the switch is checked and the category is on.
   */
  checked: PropTypes.bool,
  /**
   * Function called on switch change. Signature: (checked: bool) => void.
   */
  onChange: PropTypes.func,
  /**
   * The switch's label.
   */
  switchLabel: PropTypes.string,
}

const DefaultComponent = styled(Controls)``

export { Controls as BaseControls }
export default DefaultComponent
