import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TestDatabase from './Components/TestDatabase'
import TestAuthenticaton from './Components/TestAuthentication'
import TestAuthentication from './Components/TestAuthentication'
import TestKonva from './Components/TestKonva'
import TestFreeDraw from './Components/TestFreeDraw'
import Canvas from './Components/Canvas/Canvas'

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
      <Canvas />
    </div>
  )
}

export default App
