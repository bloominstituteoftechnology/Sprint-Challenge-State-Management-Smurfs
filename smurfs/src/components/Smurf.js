import React from 'react'

function Smurf(props) {
    console.log(props.smurfs)
    return (
        <div>
          {
              props.smurfs.map(smurf => {
                  return (
                      <div key={smurf.id} >
                          {smurf.name}
                      </div>
                  )
              })
          }  
        </div>
    )
}

export default Smurf

/* {smurfs.map(smurf => (
           <div>Name: {smurf.name}</div>
         ))} */