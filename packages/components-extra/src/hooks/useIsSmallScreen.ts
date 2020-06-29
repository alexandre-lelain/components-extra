import { useMediaQuery } from '@material-ui/core'
import { Theme } from '../theme'

export default (): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
