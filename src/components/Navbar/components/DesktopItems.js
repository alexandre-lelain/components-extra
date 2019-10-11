import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Language from './Language'

import { useOptions } from '../hooks'

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}))

const StyledItem = styled(Button).attrs(() => ({
  color: 'secondary',
  underline: 'none',
}))`
  text-transform: none;
`

const DesktopItems = ({ linkComponent }) => {
  const options = useOptions()
  const styles = useStyles()

  return (
    <div className={styles.sectionDesktop}>
      <Language />
      {options.map(option => {
        const { href, label, ...rest } = option
        return (
          <StyledItem component={linkComponent} key={label} href={href} {...rest}>
            {label}
          </StyledItem>
        )
      })}
    </div>
  )
}

DesktopItems.propTypes = {
  // The element you want to render the items with. Can be a third-party Link.
  linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default DesktopItems
