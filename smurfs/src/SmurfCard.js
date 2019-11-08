import React from 'react';



const SmurfCard = props => {
    console.log(props)
    return (
       <div>
           
           <h1>NOMENCLATURE: {props.name}</h1>
           <h3>HISTORY: {props.age} yeahrs </h3>
        <p>STATURE: {props.height}cm</p>
        <h4>ID: {props.id}</h4>
       </div>
 )
}

export default SmurfCard;
