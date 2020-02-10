import {
    FETCH_DATA, UPDATE_SMURFS, UPDATE_NEW_SMURF_NAME, UPDATE_NEW_SMURF_AGE,
    UPDATE_NEW_SMURF_HEIGHT, UPDATE_NEW_SMURF_ID, POST_DATA, ADD_NEW_SMURF,
    SET_ERROR
} from '../actions';

const initialState = {
    smurfList: [],
    isFetchingData: false,
    isUpdatingData: false,
    error: "",
    newSmurf: {
        name: "",
        age: 0,
        height: "",
        id: 0
    }
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                isUpdatingData: false
            };
        case POST_DATA:
            return {
                ...state,
                isUpdatingData: true
            }
        case UPDATE_SMURFS:
            //console.log('action.payload', action.payload)
            return {
                ...state,
                smurfList: action.payload,
                isFetchingData: false,
                isUpdatingData: false
            }
        case ADD_NEW_SMURF:
            let anotherCopyOfSmurfList = [...state.smurfList];
            let anotherCopyOfNewSmurf = { ...state.newSmurf };
            anotherCopyOfSmurfList.push(anotherCopyOfNewSmurf);
            return {
                ...state,
                smurfList: anotherCopyOfSmurfList,
                isUpdatingData: true,
                newSmurf: {
                    name: "",
                    age: 0,
                    height: "",
                    id: 0
                }
            }
        case UPDATE_NEW_SMURF_NAME:
            let copyOfNewSmurf = { ...state.newSmurf };
            copyOfNewSmurf.name = action.payload;
            console.log('new smurf ', copyOfNewSmurf)
            return {
                ...state,
                newSmurf: copyOfNewSmurf
            }
        case UPDATE_NEW_SMURF_AGE:
            let copyOfNewSmurf1 = { ...state.newSmurf };
            copyOfNewSmurf1.age = action.payload;
            console.log('new smurf ', copyOfNewSmurf1)
            return {
                ...state,
                newSmurf: copyOfNewSmurf1
            }
        case UPDATE_NEW_SMURF_HEIGHT:
            let copyOfNewSmurf2 = { ...state.newSmurf };
            copyOfNewSmurf2.height = action.payload;
            console.log('new smurf ', copyOfNewSmurf2)
            return {
                ...state,
                newSmurf: copyOfNewSmurf2
            }
        case UPDATE_NEW_SMURF_ID:
            let copyOfNewSmurf3 = { ...state.newSmurf };
            copyOfNewSmurf3.id = action.payload;
            console.log('new smurf ', copyOfNewSmurf3)
            return {
                ...state,
                newSmurf: copyOfNewSmurf3
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                isUpdatingData: false,
                error: action.payload
            };
        default: return state;
    }
}