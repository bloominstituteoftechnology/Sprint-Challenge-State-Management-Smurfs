
const initialState = {
    fetching: false,
    smurfs: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETSMURF":
            return {
                ...state,
                fetching: true
            }

            case "SUCCESS":
                return {
                    ...state,
                    fetching: false,
                    smurfs: action.payload
                }
    
      default:
        return state;
    }
  };