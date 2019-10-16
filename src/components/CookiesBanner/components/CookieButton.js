import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  label: {
    wordBreak: 'break-word',
  },
})

const CookieButton = ({ className, href = undefined, label = '', onClick = undefined }) => {
  const classes = useStyles()

  return (
    <Button
      className={`${className} ${classes.label}`}
      variant="contained"
      color="secondary"
      href={href}
      onClick={onClick}
      role={href ? 'link' : 'button'}
      size="small"
    >
      {label}
    </Button>
  )
}

CookieButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default styled(CookieButton)``
