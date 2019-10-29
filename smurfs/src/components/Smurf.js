import React from 'react'

function Smurf(props) {
    console.log(props.smurfs)
    return (
        <div>
          {
              props.smurfs.map(smurf => {
                  return (
                      <div key={smurf.id} >
                          <h1>{smurf.name}</h1>
                          <h2>{smurf.height}</h2>
                          <h2>{smurf.age}</h2>
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