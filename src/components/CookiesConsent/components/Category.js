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
import { makeStyles } from '@material-ui/styles'

import { useIsSmallScreen } from 'hooks'

import ArrowIcon from './ArrowIcon'

const Title = styled(Typography)`
  padding: 0px 12px;
  flex-shrink: 0;
  ${({ theme }) => `
    ${theme.breakpoints.up('sm')} {
      flex-basis: 20%;
    }
  `}
`

const Description = styled(Typography).attrs({
  variant: 'body2',
  color: 'textSecondary',
})``

const useStyles = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
  },
})

const StyledExpansionPanel = styled(ExpansionPanel)`
  overflow-x: auto;
`

const Category = ({ children, description, title, ...rest }) => {
  const classes = useStyles()
  const isSmallScreen = useIsSmallScreen()
  const [expanded, setExpanded] = useState(null)
  const [isCheck, setIsCheck] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const onToggle = event => {
    event.stopPropagation()
    setIsCheck(isCheck => !isCheck)
  }

  return (
    <StyledExpansionPanel
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      {...rest}
    >
      <ExpansionPanelSummary
        expandIcon={<ArrowIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        classes={{ content: classes.content }}
      >
        <Switch
          checked={isCheck}
          onChange={onToggle}
          onClick={event => event.stopPropagation()}
          onFocus={event => event.stopPropagation()}
          value="checkedB"
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />

        <Title isSmallScreen={isSmallScreen}>{title}</Title>
        {description && !isSmallScreen && <Description>{description}</Description>}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {isSmallScreen && <Description>{description}</Description>}
        {children}
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
}

Category.propTypes = {
  /**
   * A brief description of the cookies category.
   */
  description: PropTypes.string,
  /**
   * The title of the cookies category. Required.
   */
  title: PropTypes.string,
}
Category.displayName = 'CookiesConsent.Category'

const DefaultComponent = styled(Category)``
DefaultComponent.displayName = Category.displayName
DefaultComponent.propTypes = Category.propTypes

export { Category as BaseCategory }
export default DefaultComponent
