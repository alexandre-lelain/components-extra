import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.components.links,
  },
}))

const Actions = ({ actions = [] }) => {
  const classes = useStyles()

  return (
    <CardActions>
      {actions.map(action => {
        const { label, href, onClick } = action
        return (
          <Button
            className={classes.button}
            key={label}
            href={href}
            onClick={onClick}
            size="small"
            color="inherit"
          >
            {label}
          </Button>
        )
      })}
    </CardActions>
  )
}

Actions.propTypes = {
  /**
   * The Card's list of actions. The actions are displayed
   * and behave as links.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
}

export default Actions
