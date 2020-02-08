import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { apiContext } from '../contexts/apiContext'
import { smurfContext } from '../contexts/smurfContext'

import Smurf from './Smurf'

const SmurfList = () => {
  const { apiUrl } = useContext(apiContext)
  const { smurfArray } = useContext(smurfContext)

  const [smurfs, setSmurfs] = useState(smurfArray)

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(smurfs)

  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            key={smurf.id}
            age={smurf.age}
            height={smurf.height}
          />
        )
      })}
    </div>
  )
}

export default SmurfList
