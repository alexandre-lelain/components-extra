import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}))

const createData = (name, type, defaultValue, isRequired) => ({
  name,
  type,
  defaultValue,
  isRequired,
})

const PropsTable = ({ rows = [], title }) => {
  const classes = useStyles()

  return (
    <>
      <Typography>API of {title}</Typography>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Prop</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Default value</TableCell>
              <TableCell align="right">Is required</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.defaultValue}</TableCell>
                <TableCell align="right">{row.isRequired}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

PropsTable.propTypes = {
  rows: PropTypes.array,
  title: PropTypes.string,
}

export default PropsTable
export { createData }
