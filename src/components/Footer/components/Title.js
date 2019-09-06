import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Separator = styled.hr`
  width: 30%;
  ${({ theme }) => `
    border-color: ${theme.palette.secondary.main};
  `}
`

const Title = ({ text = '' }) => {
  return (
    <>
      <Typography align="center" color="secondary" variant="h5">
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
