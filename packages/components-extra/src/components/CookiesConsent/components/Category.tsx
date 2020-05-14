import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelProps,
  ExpansionPanelSummary,
  Switch,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { isBoolean } from '../../../utils'

import { useIsSmallScreen } from '../../../hooks'

import ArrowIcon from './ArrowIcon'
import CategoryTitle from './CategoryTitle'

const Description = styled(Typography).attrs(() => ({
  variant: 'body2',
  color: 'textSecondary',
}))`
  ${({ theme }): string => `
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

const Category: CategoryType = ({
  children,
  checked,
  description,
  onChange,
  title,
  ...rest
}: CategoryProps) => {
  const classes = useStyles()
  const isSmallScreen = useIsSmallScreen()
  const [expanded, setExpanded] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const stopPropagation = (event: React.ChangeEvent<any>): void => {
    event.stopPropagation()
  }

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    stopPropagation(event)
    onChange && onChange(event)
    if (!isBoolean(checked)) {
      setIsChecked((isChecked) => !isChecked)
    }
  }

  return (
    <StyledExpansionPanel
      expanded={expanded}
      onChange={(): void => setExpanded((prev) => !prev)}
      {...rest}
    >
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

Category.displayName = 'CookiesConsent.Category'

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
   * Function called on switch change. Signature: (event) => void.
   */
  onChange: PropTypes.func,
  /**
   * The title of the cookies category. Required.
   */
  title: PropTypes.string.isRequired,
}

export interface CategoryProps extends Omit<ExpansionPanelProps, 'onChange' | 'children'> {
  /**
   * If true, the switch is checked and the category is on.
   * Leave to undefined if you don't need to control the component.
   */
  checked?: boolean
  /**
   * The content of the category.
   */
  children?: React.ReactNode
  /**
   * A brief description of the cookies category.
   */
  description?: string
  /**
   * Function called on switch change. Signature: (event) => void.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The title of the cookies category. Required.
   */
  title: string
}

export type CategoryType = React.FunctionComponent<CategoryProps>

export { Category as BaseCategory }
export default styled(Category)``
