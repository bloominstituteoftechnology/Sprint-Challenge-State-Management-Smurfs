import React, {useContext} from 'react'
import {DataContext} from '../context/DataContext'
import Smurf from '../components/Smurf'

export default function SmurfList() {
    const database = useContext(DataContext)
    return (
        <div>
            {database.data.map(smurf=>{
                return <Smurf key={smurf.id} smurf={smurf}/>
            })}
            
        </div>
    )
}
