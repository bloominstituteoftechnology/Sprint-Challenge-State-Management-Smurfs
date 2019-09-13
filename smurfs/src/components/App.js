import React from "react"
import { getSmurfs } from '../store/actions'
import { useDispatch } from 'react-redux'

import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
import "./App.css"

export default function App () {
  const dispatch = useDispatch()

  dispatch(getSmurfs())

  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
  )
}
