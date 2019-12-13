const initialState = {
    smurfs: []
}

export function smurfReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_SMURFS':
            return {
                smurfs: action.payload
            }

        case 'SUBMIT_SMURF':
            console.log(state)
            return {
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }

        default:
            return state;
    }
}