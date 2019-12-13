import{FETCHSMURF} from '../actioncomp/actions';
import{FETCHPASS} from '../actioncomp/actions';
import{FETCHMISS} from '../actioncomp/actions';
import{ADDSMURF} from '../actioncomp/actions';
import{ADDPASS} from '../actioncomp/actions';
import{ADDMISS} from '../actioncomp/actions';


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