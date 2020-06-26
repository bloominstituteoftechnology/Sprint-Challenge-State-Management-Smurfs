import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Smurf() {

  const [smurfs, editSmurfs] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data)
        editSmurfs(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    console.log('smurfs', smurfs),
    <div>
      Smurf component
      {smurfs.map(smurf => {
        console.log('smurf map', smurf)
        return (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
          </div>
        )
      })}
    </div>
  )
} 