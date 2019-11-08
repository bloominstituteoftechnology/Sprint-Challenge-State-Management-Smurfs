import {
  ADD_SMURF,
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/actions";

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SMURF: 
        const newSmurf = {
            name: action.payload,
            age: "",
            height: "",
            // id: Date.now()
        };
        return {...state, smurfs: [...state.smurfs, newSmurf]};

        case START_FETCHING: 
        return {
            ...state,
            error: ""
        };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: "",
                smurfs: action.payload
            };

            case FETCH_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                };
                default: return state;
    }
};

export default reducer;
