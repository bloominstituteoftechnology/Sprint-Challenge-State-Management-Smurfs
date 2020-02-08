import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { apiContext } from '../contexts/apiContext'
import { smurfContext } from '../contexts/smurfContext'

import SmurfList from './SmurfList'
import './css/SmurfForm.css'

const SmurfForm = () => {
  const { apiUrl } = useContext(apiContext)
  const { smurfArray } = useContext(smurfContext)

  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
  const [smurfs, setSmurfs] = useState(smurfArray)

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(apiUrl, newSmurf)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
    setNewSmurf({ name: '', age: '', height: '' })
  }

  return (
    <div className="container">
      <form className="smurf-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={newSmurf.name}
        />
        <label>Age</label>
        <input
          id="age"
          type="text"
          name="age"
          onChange={handleChange}
          value={newSmurf.age}
        />
        <label>Height</label>
        <input
          id="height"
          type="text"
          name="height"
          onChange={handleChange}
          value={newSmurf.height}
        />
        <button className="btn" type="submit">
          Add Smurf
        </button>
      </form>
      <SmurfList smurfs={smurfs} />
    </div>
  )
}

export default SmurfForm
