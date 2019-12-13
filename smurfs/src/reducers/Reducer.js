import{FETCHSMURF} from '../actions/actions';
import{FETCHPASS} from '../actions/actions';
import{FETCHMISS} from '../actions/actions';
import{ADDSMURF} from '../actions/actions';
import{ADDPASS} from '../actions/actions';
import{ADDMISS} from '../actions/actions';


const initialState = {
    messge: "",
    smurfs: []
  };
  
  export const Reducer = (state = initialState, action) => {
    console.log("ACTION", action.type, action.payload);
    switch (action.type) {
      case FETCHSMURF:
        return { ...state, message: action.payload };
      case FETCHPASS:
        return { message: "", smurfs: action.payload };
      case FETCHMISS:
        console.log(action.payload);
        return { ...state, message: action.payload };
      case ADDSMURF:
        return { ...state, message: action.payload };
      case ADDPASS:
        return { message: "Smurf added", smurfs: action.payload };
      case ADDMISS:
        console.log(action.payload);
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };