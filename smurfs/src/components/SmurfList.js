import React, {useContext} from 'react'
import {DataContext} from '../context/DataContext'
import styled from 'styled-components'
import Smurf from '../components/Smurf'

const Div = styled.div `
    margin:0 auto;
    width:60%;
    padding: 1% 4%;
    display:flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap:wrap;
    div{
        width:40%;
        margin:2% 0;
        text-align:center;
        background:white;
    }

`

export default function SmurfList() {
    //get the context of the database
    const database = useContext(DataContext)
    return (
        <Div>
            {/* mapping over the database for smurfs inside the array */}
            {database.data.map(smurf=>{
                return <div>
                    <Smurf
                 key={smurf.id}
                  smurf={smurf}/>
                </div> 
            })}
            
        </Div>
    )
}
