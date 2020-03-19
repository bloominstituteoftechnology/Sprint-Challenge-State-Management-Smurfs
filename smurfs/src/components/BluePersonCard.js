import React, { useState, useEffect } from 'react';

export default function BluePersonCard(props) {
  // const [smurf, setSmurf] = useState({name: ''})

  // useEffect(() => {
  //   setSmurf(props)
  // }, [props])

  console.log(props)
  return(
       
    <div>
        <h3>{props.smurf && props.smurf.name}</h3>
        {/* <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p> */}
    </div>
)
}
