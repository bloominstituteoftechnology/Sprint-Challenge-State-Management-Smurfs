import React from 'react';
import {connect} from 'react-redux';

export const Cards = (props) =>{
        return (
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.height}</p>
            </div>
        )

}

export default Cards;