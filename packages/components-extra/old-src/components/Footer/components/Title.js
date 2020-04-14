import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  title: {
    fontWeight: 500,
    color: palette.primary.contrastText,
  },
}))

const Separator = styled.hr`
  width: 30%;
  margin-bottom: 48px;
  ${({ theme }) => `
    border-color: ${theme.palette.primary.contrastText};
  `}
`

const Title = ({ text = '' }) => {
  const classes = useStyles()

  return (
    <>
      <Typography align="center" className={classes.title} variant="h4">
        {text}
      </Typography>
      <Separator />
    </>
  )
}

Title.propTypes = {
  /**
   * The  title's text.
   */
  text: PropTypes.string,
}

export default Title
