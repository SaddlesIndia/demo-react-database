import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TestDatabase from './Components/TestDatabase'
import TestAuthenticaton from './Components/TestAuthentication'
import TestAuthentication from './Components/TestAuthentication'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}))

function App(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TestAuthentication />
      {/* <TestDatabase /> */}
    </div>
  )
}

export default App
