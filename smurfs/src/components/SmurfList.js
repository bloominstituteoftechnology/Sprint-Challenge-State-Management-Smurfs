import React, { useContext } from 'react'
import { SmurfContext } from './SmurfContext'
import SmurfCard from './SmurfCard'

const SmurfList = () => {
    const { smurfs, deleteSmurf } = useContext(SmurfContext);
    return (
      <div className="List">
        {console.log(smurfs)}
        {smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf}/>)}
    </div>
    )
}

export default SmurfList