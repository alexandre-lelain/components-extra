import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import useStyles from './helpers/styles'

const parseType = type => {
  const { name, value } = type

  if (value) {
    return `${name}: ${parseType(value)}`
  }
  return name
}

const HeaderTitle = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
}))``

const CellContent = styled(Typography).attrs(() => ({
  variant: 'body2',
}))``

const PropsTable = ({ propDefinitions = [] }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <HeaderTitle>Prop</HeaderTitle>
            </TableCell>
            <TableCell className={classes.type}>
              <HeaderTitle>Type</HeaderTitle>
            </TableCell>
            <TableCell>
              <HeaderTitle>Default</HeaderTitle>
            </TableCell>
            <TableCell className={classes.description}>
              <HeaderTitle>Description</HeaderTitle>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propDefinitions.map(({ defaultValue, description, property, propType, required }) => (
            <TableRow key={property}>
              <TableCell>
                <CellContent>
                  {property}
                  {required ? '*' : ''}
                </CellContent>
              </TableCell>
              <TableCell className={classes.typeCell}>
                <CellContent>{parseType(propType)}</CellContent>
              </TableCell>
              <TableCell className={classes.defaultValue}>
                <CellContent>{defaultValue}</CellContent>
              </TableCell>
              <TableCell>
                <CellContent>{description}</CellContent>
              </TableCell>
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
