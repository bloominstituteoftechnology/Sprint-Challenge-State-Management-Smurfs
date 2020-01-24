const initialState = {
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                smurfs: action.payload
            }
        case 'POST':
            return {
                smurfs: action.payload
            }
        default:
            return state;
    }
}