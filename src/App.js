import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { getData, setData } from './Firebase'

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
  const [data, setdata] = useState()
  const [tempData, setTempData] = useState()

  useEffect(() => {
    getData('users', 'dummy').then((docuement) => setdata(docuement))
  }, [])

  const newDoc = () => {
    setData('users', 'dummy', { name: tempData })
  }

  return (
    <div className={classes.root}>
      {data ? 'Current Data : ' + data.name : null}

      <TextField
        id='filled-basic'
        label='Filled'
        variant='filled'
        value={tempData}
        onChange={(event) => {
          setTempData(event.target.value)
        }}
        style={{ margin: '16px' }}
      />
      <Button variant='contained' style={{ margin: '16px' }} onClick={newDoc}>
        set data
      </Button>
    </div>
  )
}

export default App
