import {FETCH_DATA,DATA_SUCCESS,DATA_ERROR,START_POST,POST_SUCCESS,POST_FAIL} from "../Actions/app"

const initialState = {
    smurfs :[],
    isLoading:true,
    error:""
}

export const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case FETCH_DATA:
            console.log("FETCH DATA RUNS")
            
            return{
                ...state,
                isLoading:true
            };
        case DATA_SUCCESS:
            console.log("DATA SUCCESS PAYLOAD", action.payload)
                return{
                    ...state,
                    smurfs:action.payload,
                    isLoading:false,
                    error:""
                }

        case DATA_ERROR:
            console.log("DATA ERRORED")
            return{
                ...state,
                    isLoading:false
            }
        case START_POST:
            console.log("DATASTARTPOST")
            return{
                ...state,
                isLoading:true,
                error:""
            }
        case POST_SUCCESS:
            console.log("DATASUCCESSPOST", action.payload)
            return{
                ...state,
                smurfs:action.payload,
                isLoading:false,
                error:""
            }
        case POST_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }    



        default:
            return state 
    }
}