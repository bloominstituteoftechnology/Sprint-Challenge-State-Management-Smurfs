import React, {useContext} from "react"
import { SmurfContext } from "./contexts/smurfContext"

export const SmurfList = () => {
  const {smurfs, deleteSmurf} = useContext(SmurfContext)


  return ( 

    smurfs.map(smurf => {
      return (
        <div key={smurf.id}>
          <h1>
            Smurfy Name: {smurf.name}
          </h1>
          <h3>
            Smurf-tastic Height: {smurf.height}
          </h3>
          <h3>
            Smurfabulous Age: {smurf.age}
          </h3>
          <button onClick={e => { 
            deleteSmurf(e, smurf)
          }}>Not a Real Smurf!</button>
        </div>
      )
    })
  )
}