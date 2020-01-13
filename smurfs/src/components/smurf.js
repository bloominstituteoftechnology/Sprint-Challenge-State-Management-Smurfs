import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSmurf } from './actions/deleteSmurf';

const Smurf = () => {
    const smurfs = useSelector(state => state.smurfs);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteSmurf(e.target.value))
    }

    return (
        <div className='smurf-list'>
            {smurfs.map((smurf, index) => (
                < >
                <div className='smurf' key={smurf.id} index={index}>
                    <h1>{smurf.name}</h1>
                    <h2>{smurf.age}</h2>
                    <h3>{smurf.height}</h3>
                
                    <button className='delete' onClick={handleDelete} value={smurf.id}>
                        Delete {smurf.name} Smurf
                </button>
                </div>
                </>
            ))}
            
        </div>
    );
}

export default Smurf;