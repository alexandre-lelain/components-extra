import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  title: {
    fontWeight: 500,
  },
})

const Separator = styled.hr`
  width: 30%;
  margin-bottom: 48px;
  ${({ theme }) => `
    border-color: ${theme.palette.secondary.main};
  `}
`

const Title = ({ text = '' }) => {
  const classes = useStyles()

  return (
    <>
      <Typography align="center" className={classes.title} color="secondary" variant="h4">
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
