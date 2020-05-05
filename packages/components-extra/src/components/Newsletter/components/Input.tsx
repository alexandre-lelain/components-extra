import React from 'react'
import styled from 'styled-components'
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  input: {
    padding: '10px 14px',
  },
}))

const Input: InputType = (props: OutlinedInputProps) => {
  const classes = useStyles()

  return <OutlinedInput classes={classes} type="email" {...props} />
}

Input.displayName = 'Newsletter.Input'

export type InputType = React.FunctionComponent<OutlinedInputProps>

export { Input as BaseInput }
export default styled(Input)``
