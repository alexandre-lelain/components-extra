import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import CookiesConsent from 'components/CookiesConsent'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: '#1976d2',
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

export const Table = () => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <MuiTable className={classes.table} aria-label="cookies table">
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
      </MuiTable>
    </TableContainer>
  )
}

export const ExtendedCookiesConsent = styled(CookiesConsent)`
  width: 50%;
  background-color: #3377ff;
`

export const ExtendedCategory = styled(CookiesConsent.Category)`
  background-color: #3377ff;
  p {
    color: white;
  }
`

export const ExtendedButton = styled(CookiesConsent.Button)`
  background-color: #3377ff;
  border-radius: 18px;
  box-shadow: 2px 2px 2px 2px grey;
  * {
    color: white;
  }
`

const ExtendedControls = styled(CookiesConsent.Controls)`
  padding: 4px;
  background-color: #3377ff;
  border-radius: 6px;
  p {
    color: white;
  }
`

export const ExtendedControlsStory = () => {
  const [isOn, setIsOn] = React.useState(false)
  return (
    <CookiesConsent>
      <ExtendedControls switchLabel="Extended cookies" checked={isOn} onChange={setIsOn}>
        <CookiesConsent.Button>Cancel</CookiesConsent.Button>
        <CookiesConsent.Button>Confirm</CookiesConsent.Button>
      </ExtendedControls>
    </CookiesConsent>
  )
}
