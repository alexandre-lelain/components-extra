import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Switch,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { isBoolean } from 'lodash-es'

import { useIsSmallScreen } from 'hooks'

import ArrowIcon from './ArrowIcon'
import CategoryTitle from './CategoryTitle'

const Description = styled(Typography).attrs(() => ({
  variant: 'body2',
  color: 'textSecondary',
}))`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      margin-bottom: 24px;
    }
  `}
`

const useStyles = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
  },
})

const StyledExpansionPanel = styled(ExpansionPanel)`
  overflow-x: auto;
`

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  display: flex;
  flex-direction: column;
`

const Category = ({
  children,
  checked = undefined,
  description = null,
  onChange = undefined,
  title,
  ...rest
}) => {
  const classes = useStyles()
  const isSmallScreen = useIsSmallScreen()
  const [expanded, setExpanded] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const onToggle = event => {
    stopPropagation(event)
    onChange && onChange(event.target.checked)
    if (!isBoolean(checked)) {
      setIsChecked(isChecked => !isChecked)
    }
  }

  const stopPropagation = event => event.stopPropagation()

  return (
    <StyledExpansionPanel expanded={expanded} onChange={() => setExpanded(prev => !prev)} {...rest}>
      <ExpansionPanelSummary expandIcon={<ArrowIcon />} classes={{ content: classes.content }}>
        <Switch
          checked={isBoolean(checked) ? checked : isChecked}
          onChange={onToggle}
          onClick={stopPropagation}
          onFocus={stopPropagation}
          color="primary"
        />
        <CategoryTitle>{title}</CategoryTitle>
        {description && !isSmallScreen && <Description>{description}</Description>}
      </ExpansionPanelSummary>
      <StyledExpansionPanelDetails>
        {isSmallScreen && <Description>{description}</Description>}
        {children}
      </StyledExpansionPanelDetails>
    </StyledExpansionPanel>
  )
}

Category.propTypes = {
  /**
   * If true, the switch is checked and the category is on.
   * Leave to undefined if you don't need to control the component.
   */
  checked: PropTypes.bool,
  /**
   * A brief description of the cookies category.
   */
  description: PropTypes.string,
  /**
   * Function called on switch change. Signature: (checked: bool) => void.
   */
  onChange: PropTypes.func,
  /**
   * The title of the cookies category. Required.
   */
  title: PropTypes.string.isRequired,
  /**
   * The other props of Material-ui's ExpansionPanel component. See https://material-ui.com/api/expansion-panel/.
   */
  '...rest': PropTypes.object,
}
Category.displayName = 'CookiesConsent.Category'

const DefaultComponent = styled(Category)``
DefaultComponent.displayName = Category.displayName
DefaultComponent.propTypes = Category.propTypes

export { Category as BaseCategory }
export default DefaultComponent
