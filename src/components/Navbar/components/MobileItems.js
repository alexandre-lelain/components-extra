import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

import Language from './Language'

import { useOptions } from '../hooks'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

const MobileItems = ({ linkComponent }) => {
  const options = useOptions()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isOpen = Boolean(mobileMoreAnchorEl)
  const styles = useStyles()

  const component = linkComponent || Link

  const renderMenuMobile = (
    <Menu
      classes={{ paper: styles.paper }}
      anchorEl={mobileMoreAnchorEl}
      keepMounted
      open={isOpen}
      onClose={() => setMobileMoreAnchorEl(null)}
    >
      {options.map(option => {
        const { href, label } = option
        return (
          <MenuItem classes={{ root: styles.root }} href={href} component={component} key={label}>
            <Typography>{label}</Typography>
          </MenuItem>
        )
      })}
    </Menu>
  )

  return (
    <div className={styles.sectionMobile}>
      <Language />
      <IconButton
        aria-label="Open navigation"
        color="secondary"
        onClick={e => setMobileMoreAnchorEl(e.currentTarget)}
        title="Open navigation"
      >
        <MenuIcon />
      </IconButton>
      {renderMenuMobile}
    </div>
  )
}

MobileItems.propTypes = {
  // The element you want to render the items with. Can be a third-party Link.
  linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default MobileItems
