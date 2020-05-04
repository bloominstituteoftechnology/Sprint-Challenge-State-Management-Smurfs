export const initialState = { smurfs: []}

export default function reducer (state, action){
    switch (action.type) {
        case 'SET_SMURFS':
            return {
                ...state,
                smurfs: action.smurfs,
            };
        default: 
            return state;
    }
}