import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  type: {
    maxWidth: 200,
    minWidth: 150,
  },
  defaultValue: {
    color: '#3f51b5',
  },
  description: {
    minWidth: 150,
    [theme.breakpoints.up('md')]: {
      minWidth: 400,
    },
  },
  typeCell: {
    color: '#932981',
    maxWidth: 200,
    wordBreak: 'break-word',
  },
}))
