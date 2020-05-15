import {FETCH_SMURF, ADD_SMURF, SMURF_NAME, SMURF_AGE, SMURF_HEIGHT, SMURF_ID} from './actions/smurfAction';

// import FETCH_SMURF from './actions/smurfAction';
// import ADD_SMURF from './actions/smurfAction';
// import 'SMURF_NAME' from './actions/smurfAction';
// import 'SMURF_AGE' from './actions/smurfAction';
// import 'SMURF_HEIGHT' from './actions/smurfAction';
// export const SMURF_ID ='SMURF_ID';
export const intitialState = {
    smurfs: [],

    smurfInfo : {
        name: '',
        age: 0,
        height: '',
        id: 0,
    }
}

export const reducer = (state = intitialState, action) => {
    switch(action.type){
        case SMURF_NAME:
            return {
                ...state,
                smurfInfo: {...state.smurfInfo, name: action.payload}
            }
            case SMURF_AGE:
                return {
                    ...state,
                    smurfInfo: {...state.smurfInfo, age: action.payload}
                }
            case SMURF_HEIGHT:    
                return {
                    ...state,
                    smurfInfo: {...state.smurfInfo, height: action.payload}
                }
            case SMURF_ID:
                return {
                    ...state,
                    smurfInfo: {...state.smurfInfo, id: action.payload}
                }    
        default:
            return state;
    }
}