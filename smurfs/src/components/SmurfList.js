import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { apiContext } from '../contexts/apiContext'
import { smurfContext } from '../contexts/smurfContext'

import Smurf from './Smurf'
import './css/SmurfList.css'

const SmurfList = ({ smurfs }) => {
  console.log(smurfs)
  return (
    <div className="smurf-container">
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
