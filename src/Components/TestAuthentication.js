import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { signUp, getData, setData } from '../Firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const TestAuthentication = () => {
  const classes = useStyles()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [currentUserID, setCurrentUserID] = useState()
  const [userName, setUserName] = useState()
  const [triger, setTriger] = useState(true)
  const [tempUserName, setTempUserName] = useState()

  useEffect(() => {
    if (currentUserID)
      getData('users', currentUserID).then((result) => setUserName(result))
  }, [triger])

  const newDoc = (doc) => {
    setData('users', doc, { UserName: tempUserName }).then((status) => {
      setCurrentUserID(doc)
      if (status) setTriger(!triger)
    })
  }
  const handleSubmit = () => {
    signUp(email, password).then((result) => {
      console.log(result)
      newDoc(result)
    })
  }

  const enter = (event) => {
    const code = event.keyCode || event.which
    if (code === 13) {
      handleSubmit()
    }
  }
  return (
    <div className={classes.root}>
      {userName ? 'Current Data : ' + userName.UserName : null}

      <TextField
        id='filled-basic'
        label='user name'
        variant='filled'
        value={tempUserName || ''}
        onChange={(event) => {
          setTempUserName(event.target.value)
        }}
        style={{ margin: '16px' }}
        onKeyDown={enter}
      />
      <TextField
        label='email'
        variant='filled'
        value={email || ''}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
      <TextField
        label='password'
        variant='filled'
        value={password || ''}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        type='password'
        onKeyDown={enter}
      />
      <Button onClick={handleSubmit}>Sign Up</Button>
    </div>
  )
}

export default TestAuthentication
