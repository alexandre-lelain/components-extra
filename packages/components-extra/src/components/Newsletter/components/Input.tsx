import React from 'react'
import styled from 'styled-components'
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ComponentExtra } from '../../../types'

const useStyles = makeStyles(() => ({
  input: {
    padding: '10px 14px',
  },
}))

const Input: React.FC<OutlinedInputProps> = (props: OutlinedInputProps) => {
  const classes = useStyles()

  return <OutlinedInput classes={classes} type="email" {...props} />
}

Input.displayName = 'Newsletter.Input'

export type NewsletterInputType = ComponentExtra<OutlinedInputProps>

const InputExtra = styled(Input)`` as NewsletterInputType

export { OutlinedInputProps as NewsletterInputProps }
export default InputExtra
