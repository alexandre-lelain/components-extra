import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Switch,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { isBoolean } from '../../../utils'
import { ComponentExtra } from '../../../types'
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

const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
`

const Category: React.FC<CookiesConsentCategoryProps> = ({
  children,
  checked,
  description,
  onChange,
  title,
  ...rest
}: CookiesConsentCategoryProps) => {
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
    <Accordion expanded={expanded} onChange={(): void => setExpanded((prev) => !prev)} {...rest}>
      <AccordionSummary expandIcon={<ArrowIcon />} classes={{ content: classes.content }}>
        <Switch
          checked={isBoolean(checked) ? checked : isChecked}
          onChange={onToggle}
          onClick={stopPropagation}
          onFocus={stopPropagation}
          color="primary"
        />
        <CategoryTitle>{title}</CategoryTitle>
        {description && !isSmallScreen && <Description>{description}</Description>}
      </AccordionSummary>
      <StyledAccordionDetails>
        {isSmallScreen && <Description>{description}</Description>}
        {children}
      </StyledAccordionDetails>
    </Accordion>
  )
}

Category.displayName = 'CookiesConsent.Category'

Category.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  description: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export interface CookiesConsentCategoryProps extends Omit<AccordionProps, 'onChange' | 'children'> {
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
   * Function called on switch change. Signature: (event) => void. You can access the value using `event.target.value`.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The title of the cookies category. Required.
   */
  title: string
}

export type CookiesConsentCategoryType = ComponentExtra<CookiesConsentCategoryProps>

const CategoryExtra = styled(Category)`` as CookiesConsentCategoryType

export default CategoryExtra
