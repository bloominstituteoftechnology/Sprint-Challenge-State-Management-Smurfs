import React from 'react';

import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, ADD_SMURF, POST_SUCCESS } from '../actions/index';

const initialState = {
    smurfs: [],
    name: '',
    age: '',
    height: '',
    isFetchingData: false
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_SMURFS:
            return {
                ...state,
               smurfs: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
    }
        default:
            return state;
    }
};
