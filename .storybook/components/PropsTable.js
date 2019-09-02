import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
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
  typeCell: {
    color: '#932981',
  },
}))

const parseType = type => {
  const { name, value } = type

  if (value) {
    return JSON.stringify(type)
  }
  return name
}

const PropsTable = ({ propDefinitions = [] }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Prop</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Default value</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propDefinitions.map(({ defaultValue, description, property, propType, required }) => (
            <TableRow key={property}>
              <TableCell component="th" scope="row">
                {property}
                {required ? '*' : ''}
              </TableCell>
              <TableCell className={classes.typeCell} align="right" color="purple">
                {parseType(propType)}
              </TableCell>
              <TableCell align="right">{defaultValue}</TableCell>
              <TableCell align="right">{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

PropsTable.propTypes = {
  propDefinitions: PropTypes.array,
}

export default PropsTable
