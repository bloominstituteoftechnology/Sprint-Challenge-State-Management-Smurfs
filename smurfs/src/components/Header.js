import React from 'react'

import smurfLogo from './images/smurfs.png'

import './css/Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={smurfLogo} alt="Smurf Logo" />
    </div>
  )
}

export default Header
