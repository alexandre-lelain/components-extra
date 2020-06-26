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

import { CookiesConsent } from 'components-extra'

type RowType = {
  name: string
  value: string | number
  expires: string
  description: string
}

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

const createData = (name: string, value: string | number, expires: string, description: string): RowType => ({
  name, value, expires, description,
})

const rows = [
  createData('name', 'john Smith', 'in 5 days', 'Your name.'),
  createData('age', 42, 'on the 3th of November 2020', 'Your age.'),
  createData('sex', 'M', '12/12/20', 'Your sex.'),
  createData('plan', 'premium', 'in 21 days', 'The plan you first chose on sign up.'),
]

export const Table: React.FC = () => {
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
          {rows.map((row) => (
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

export const CookiesConsentExtendedButton = styled(CookiesConsent.Button)`
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

export const ExtendedControlsStory: React.FC = () => {
  const [isOn, setIsOn] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsOn(e.target.checked)
  }

  return (
    <CookiesConsent>
      <ExtendedControls switchLabel="Extended cookies" checked={isOn} onChange={onChange}>
        <CookiesConsent.Button>Cancel</CookiesConsent.Button>
        <CookiesConsent.Button>Confirm</CookiesConsent.Button>
      </ExtendedControls>
    </CookiesConsent>
  )
}
