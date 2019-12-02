import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  type: {
    minWidth: 160,
  },
  defaultCell: {
    minWidth: 100,
  },
  defaultValue: {
    color: '#3f51b5',
  },
  description: {
    minWidth: 250,
    [theme.breakpoints.up('md')]: {
      minWidth: 400,
    },
  },
  typeCell: {
    color: '#932981',
    wordBreak: 'break-word',
  },
}))

export const HeaderTitle = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
}))``

export const CellContent = styled(Typography).attrs(() => ({
  variant: 'body2',
}))``
