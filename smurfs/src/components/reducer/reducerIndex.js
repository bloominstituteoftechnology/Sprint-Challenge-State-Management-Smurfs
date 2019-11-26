import {
    SMURFS_LOAD_SUCCESS,
    SMURF_ADD_SUCCESS,
  } from '../actions/actionsIndex'

const initialState = [];

export const AppReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
      case SMURFS_LOAD_SUCCESS:
        return [...state, ...action.payload];
  
      case SMURF_ADD_SUCCESS:
        console.log(action.payload);
        return [...state, action.payload];
  
      default:
        return state;
    }
  };