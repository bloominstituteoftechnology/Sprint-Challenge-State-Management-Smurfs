import{FETCHSMURF} from '../actions/actions';



const initialState = {
    messge: "",
    smurfs: []
  };
  
  export const Reducer = (state = initialState, action) => {
    console.log("ACTION", action.type, action.payload);
    switch (action.type) {
      case FETCHSMURF:
        return { ...state, message: action.payload };
      case GET_SUCCESS:
        return { message: "", smurfs: action.payload };
      case GET_FAIL:
        console.log(action.payload);
        return { ...state, message: action.payload };
      case ADD_SMURF:
        return { ...state, message: action.payload };
      case ADD_SUCCESS:
        return { message: "Smurf added", smurfs: action.payload };
      case ADD_FAIL:
        console.log(action.payload);
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };