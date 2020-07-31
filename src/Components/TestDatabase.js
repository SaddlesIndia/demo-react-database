import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { getData, setData } from '../Firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}))

function TestDatabase(props) {
  const classes = useStyles()
  const [data, setdata] = useState()
  const [triger, setTriger] = useState(true)
  const [tempData, setTempData] = useState()

  useEffect(() => {
    getData('users', 'dummy').then((docuement) => setdata(docuement))
    console.log('read')
  }, [triger])

  const newDoc = () => {
    if (data.name != tempData) {
      setData('users', 'dummy', { name: tempData }).then((status) =>
        status ? setTriger(!triger) : null
      )
    }
  }

  const enter = (event) => {
    const code = event.keyCode || event.which
    if (code === 13) {
      newDoc()
    }
  }

  return (
    <div className={classes.root}>
      {data ? 'Current Data : ' + data.name : null}

      <TextField
        id='filled-basic'
        label='Filled'
        variant='filled'
        value={tempData || ''}
        onChange={(event) => {
          setTempData(event.target.value)
        }}
        style={{ margin: '16px' }}
        onKeyDown={enter}
      />
      <Button variant='contained' style={{ margin: '16px' }} onClick={newDoc}>
        set data
      </Button>
    </div>
  )
}

export default TestDatabase
