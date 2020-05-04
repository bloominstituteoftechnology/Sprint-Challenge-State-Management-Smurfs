export const initialState = { smurfs: []}

export default function reducer (state, action){
    switch (action.type) {
        case 'SET_SMURFS':
            return {
                ...state,
                smurfs: action.smurfs,
            };
        case 'ADD_SMURF':
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.smurf,
                ],
            };
        default: 
            return state;
    }
}