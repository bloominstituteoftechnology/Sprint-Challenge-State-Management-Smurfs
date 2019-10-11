import * as act from "../actions";


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};


const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.FETCHING:
      return { 
        ...state, 
        fetchingSmurfs: true 
    };
    case act.FETCHED:
      return {
        ...state, 
        smurfs: [...state, ...action.payload] 
    };
    case act.ADDING:
      return { 
        ...state, 
        addingSmurf: true 
    };
    case act.ADDED:
      return { 
        ...state, 
        smurfs: action.payload 
    };
    default:
      return state;
  }
};

export default smurfReducer;