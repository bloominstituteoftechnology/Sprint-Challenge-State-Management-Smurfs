

export const reducer = (state, action) => {
    switch (action.type) {
        case "ON_LOAD":
            return state;
        case "ADD_SMURF":
            return [
                ...state,
                action.payload
            ];
        case "DELETE_SMURF":
            return state.filter(smurf => smurf.id !== action.payload);
        default:
            return state;
    }
}