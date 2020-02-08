import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { apiContext } from '../contexts/apiContext'

const SmurfForm = () => {
  const { apiUrl } = useContext(apiContext)

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button></button>
    </form>
  )
}

export default SmurfForm
