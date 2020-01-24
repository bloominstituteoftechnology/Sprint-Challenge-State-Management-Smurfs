export const initialState = {
    isLoading:false,
    smurfs: [
        {

        }
    ]
        
}

    
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_ACTIVITY_START":
            console.log(state)
            return {
                ...state,
                isLoading: true
            };
        case "FETCHING_DATA_SUCCESS":
            console.log(state)
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case "ADD_SMURF":
            return {
                ...state, smurfs:[...state, action.payload]
            }
        default: 
            return state;
    }
}