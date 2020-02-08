import React, { useState } from 'react'

import { apiContext } from '../contexts/apiContext'
import { smurfContext } from '../contexts/smurfContext'

import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'

import './App.css'

const App = () => {
  const [apiUrl] = useState('http://localhost:3333/smurfs')
  const [smurfArray] = useState([])

  return (
    <apiContext.Provider value={{ apiUrl }}>
      <smurfContext.Provider value={{ smurfArray }}>
        <div className="App">
          <SmurfForm />
        </div>
      </smurfContext.Provider>
    </apiContext.Provider>
  )
}

export default App
