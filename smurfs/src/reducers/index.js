import {FETCH_DATA, UPDATE_SMURFS ,SET_ERROR} from '../actions';
import { SMURF_POST_START, SMURF_POST_SUCCESS,SMURF_POST_FAILURE} from "../actions";
import {SMURF_PUT_START,SMURF_PUT_SUCCESS,SMURF_PUT_FAILURE} from "../actions";

export const initialState = {
    smurfs:[], 
    isFetchingData: false,
    error: ""
};

export const smurfsReducer =( state =initialState, action) => { 
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state, isFetchingData:true
            };
         case UPDATE_SMURFS:
             return {
                ...state,
                smurfs:action.payload,
                isFetchingData: false
             };
             case SET_ERROR:
                 return {
                     ...state,
                     isFetchingData:false,
                     error: action.payload
                 };
                 case SMURF_POST_START:
                    return {
                      ...state,
                      isLoading: true
                    };
                  case SMURF_POST_SUCCESS:
                    console.log(
                      `redux: reducers: index,js: SMURF_POST_SUCCESS: action.payload: `,
                      action.payload
                    );
                    return {
                      ...state,
                      smurfs: action.payload,
                      isLoading: false
                    };
                  case SMURF_POST_FAILURE:
                    console.log(
                      `redux: reducers: index,js: SMURF_POST_FAILURE: action.payload: `,
                      action.payload
                    );
                    return {
                      ...state,
                      error: action.payload,
                      isLoading: false
                    };
                  case SMURF_PUT_START:
                    return {
                      ...state,
                      isLoading: true
                    };
                  case SMURF_PUT_SUCCESS:
                    console.log(
                      `redux: reducers: index,js: SMURF_PUT_SUCCESS: action.payload: `,
                      action.payload
                    );
                    const { payload } = action;
                    return {
                      ...state,
                      smurfs: state.smurfs.map(smurf => {
                        if (smurf.id === payload.id) {
                          return { ...smurf, payload };
                        } else {
                          return smurf;
                        }
                      }),
                      isLoading: false
                    };
                  case SMURF_PUT_FAILURE:
                    console.log(
                      `redux: reducers: index,js: SMURF_PUT_FAILURE: action.payload: `,
                      action.payload
                    );
                    return {
                      ...state,
                      error: action.payload,
                      isLoading: false
                    };       

        default :
            return state;
    };
}