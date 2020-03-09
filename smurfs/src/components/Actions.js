import {ADD_SMURF} from './Reducer';
import React, {dispatch} from 'react'

export const addSmurf = newSmurf =>{
    return {type: ADD_SMURF, payload: newSmurf}
}