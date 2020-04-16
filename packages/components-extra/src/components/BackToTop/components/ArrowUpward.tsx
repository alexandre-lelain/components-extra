import React, { memo } from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  icon: {
    fill: palette.primary.contrastText,
  },
}))

const ArrowUpward = memo(({ className, ...rest }: SvgIconProps) => {
  const classes = useStyles()
  return (
    <SvgIcon className={`${className} ${classes.icon}`} {...rest}>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </SvgIcon>
  )
})

export default ArrowUpward
