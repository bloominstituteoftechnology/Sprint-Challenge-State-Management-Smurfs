import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      <NavLink exact to={`/`} activeClassName="active-nav">
        <p>Home</p>
      </NavLink>

      <NavLink to={`/smurf-form`} activeClassName="active-nav">
        <p>Add Smurf</p>
      </NavLink>
    </nav>
  )
}

export default Navigation;