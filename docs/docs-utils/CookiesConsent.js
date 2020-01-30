import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import CookiesConsent from 'components/CookiesConsent'

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

export const DefaultCookiesConsent = () => {
  const [cookies, setCookies] = React.useState({
    analytics: false,
    functional: true,
    tracking: false,
  })

  const toggleAll = isOn =>
    setCookies({
      analytics: isOn,
      functional: isOn,
      tracking: isOn,
    })

  return (
    <CookiesConsent title="Manage Cookies Preferences">
      <CookiesConsent.Category
        checked={cookies.analytics}
        description="Theses cookies help us to analyze what you are doing on our site"
        title="Analytics cookies"
        onChange={checked => setCookies(cookies => ({ ...cookies, analytics: checked }))}
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        checked={cookies.functional}
        description="Theses cookies enable us to offer you a personalized experience on our site"
        title="Functional cookies"
        onChange={checked => setCookies(cookies => ({ ...cookies, functional: checked }))}
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Category
        checked={cookies.tracking}
        description="Theses cookies helps us to track you. You cannot escape!"
        title="Tracking cookies"
        onChange={checked => setCookies(cookies => ({ ...cookies, tracking: checked }))}
      >
        <Table />
      </CookiesConsent.Category>
      <CookiesConsent.Controls switchLabel="All cookies" onChange={toggleAll}>
        <CookiesConsent.Button>Cancel</CookiesConsent.Button>
        <CookiesConsent.Button>Confirm</CookiesConsent.Button>
      </CookiesConsent.Controls>
    </CookiesConsent>
  )
}