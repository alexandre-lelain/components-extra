import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: '#404040',
  },
  headCell: {
    color: 'white',
  },
})

function createData(name, value, expires, description) {
  return { name, value, expires, description }
}

const rows = [
  createData('name', 'john Smith', 'in 5 days', 'Your name.'),
  createData('age', 42, 'on the 3th of November 2020', 'Your age.'),
  createData('sex', 'M', '12/12/20', 'Your sex.'),
  createData('plan', 'premium', 'in 21 days', 'The plan you first chose on sign up.'),
]

export default function YourTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="cookies table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.headCell}>Name</TableCell>
            <TableCell align="right" className={classes.headCell}>
              Value
            </TableCell>
            <TableCell align="right" className={classes.headCell}>
              Expires
            </TableCell>
            <TableCell align="right" className={classes.headCell}>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.expires}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
