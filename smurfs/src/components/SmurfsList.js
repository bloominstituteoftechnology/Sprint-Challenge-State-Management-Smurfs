import React, {useContext} from 'react'
import { SmurfsContext } from '../contexts/SmurfsContext'


function SmurfsList() {
    const { smurfs } = useContext(SmurfsContext)

console.log(smurfs)
    return (
        <div>
            {smurfs.map(item => (
                <div className='smurf-card' key={item.id}>
                <h1 >{item.name}</h1>
                <h2>Age {item.age}</h2>
                <h2>Height {item.height}</h2>
                </div>
            ))}
        </div>
    )
}

export default SmurfsList;
