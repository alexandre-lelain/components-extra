import { useMediaQuery } from '@material-ui/core'

export default () => useMediaQuery(theme => theme.breakpoints.up('md'))
