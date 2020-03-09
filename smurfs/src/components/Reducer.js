import React from 'react';

export const ADD_SMURF = "ADD_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

const initialState = {
    smurfs : [
        {
        name:"",
        height:"",
        age:"",
        }
    ]
}

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SMURF:
            console.log(...state);
            return {...state, smurfs: [...state.smurfs, action.payload]}
        case REMOVE_SMURF:
            return {...state, smurfs: [...state.smurfs.filter(item => item !== action.payload)]}
        default:
            return state;
    }
}