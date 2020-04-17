const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_START':
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_SUCCESS':
            return{
                ...state,
                smurfs: [...action.payload]
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}