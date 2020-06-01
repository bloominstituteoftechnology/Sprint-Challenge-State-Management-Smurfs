import React from 'react';



const Smurfs = (props) => {
    return(
        <div className='smurfsCont'>
            {props.smurfs.map(smurf =>
            <div className='buttonCont' key={smurf.id}>
                <div className='smurfs'>
                    <p className='smurfs'>{smurf.name}</p>
                    <p className='smurfs'>{smurf.height} tall</p>
                    <p className='smurfs'>{smurf.age} years old</p>
                </div> 
                <button onClick={() => props.remove(smurf.id)}>Remove Smurf</button>
            </div>
            )}
        </div>
    )
}

export default Smurfs;