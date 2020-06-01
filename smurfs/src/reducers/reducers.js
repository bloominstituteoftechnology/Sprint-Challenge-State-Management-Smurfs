import { GET_SMURF_DATA, POST_SMURF, REMOVE_SMURF, ADD_NUMBER } from '../actions'

const initialState = {
  smurfs: [
    {name: '',
    height: '',
    age: '',
    id: null}
  ],
 // number: 1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF_DATA:
      return {
        smurfs: action.payload
      }
      case POST_SMURF:
        return {
            ...state,
            smurfs: [...state.smurfs, {
                name: action.payload.name,
                height: action.payload.height + ' cm ',
                age: action.payload.age,
                id: action.payload.id
            }]
        }
        case REMOVE_SMURF:            
        return {
            ...state,
            smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)               
        }
    case ADD_NUMBER:
        return {
            ...state,
            number: action.payload.id
        }
    default:
      return state;
  }
}

export default reducer;