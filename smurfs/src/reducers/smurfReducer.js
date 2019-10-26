const initialState = {
    
}

export function smurfReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_SMURFS':
            return {
                smurfs: action.payload
            }

        default:
            return state;
    }
}