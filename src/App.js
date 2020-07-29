import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getData } from './Firebase'

function App(props) {
  const [data, setData] = useState()

  useEffect(() => {
    getData('users', 'dummy').then((data) => setData(data))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {data ? data.test : null}
        </a>
      </header>
    </div>
  )
}

export default App
