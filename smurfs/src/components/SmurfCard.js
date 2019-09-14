import React from 'react'


export default function SmurfCard (props) {
  console.log(props)
  return (
  <div className='smurfCards'>
   <h5>{props.smurfy.name}</h5>
   <h6>Age: {props.smurfy.age}</h6>
   <h6>Height: {props.smurfy.height}</h6>
  </div>
  )}