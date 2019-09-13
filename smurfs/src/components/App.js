import React, { useReducer } from "react"

import SmurfCtx from '../contexts/SmurfCtx'
import smurfReducer from '../reducers/smurfReducer'
import "./App.css"

export default function App () {
  const [smurfs, dispatch] = useReducer(smurfReducer, [])

  return (
    <SmurfCtx.Provider value={{smurfs, dispatch}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    </SmurfCtx.Provider>
  )
}
