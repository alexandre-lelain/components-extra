import React, { memo } from 'react'
import { SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  icon: {
    fill: palette.primary.contrastText,
  },
}))

export default memo(({ className, ...rest }) => {
  const classes = useStyles()
  return (
    <SvgIcon
      className={`${className} ${classes.icon}`}
      viewBox="0 0 24 24"
      height="24"
      width="24"
      {...rest}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SvgIcon>
  )
})
