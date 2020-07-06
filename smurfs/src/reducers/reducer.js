import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "../actions/getData"
// import { UPDATE_LIST_START, UPDATE_LIST_SUCCESS, UPDATE_LIST_FAIL } from "../actions/updateList" try as another option for refreshing component after delete?
import { ADD_SMURF } from "../actions/addSmurf";
import { REMOVE_SMURF } from "../actions/removeSmurf";

const initialState = {
  smurfs: [
    {
      id: 0,
      name: 'Brainey',
      age: 200,
      height: 5
    }
  ],
  isFetching: false,
  error: ''
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        }

      case FETCH_DATA_FAIL:
        return {
          error: action.payload
        }

      case ADD_SMURF:
        return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }

      case REMOVE_SMURF:
        return {
          smurfs: state.smurfs.filter(item => {
            if (item.id !== action.payload.id) {
              return item
            } else return state.smurfs
          })
        }


    //     case UPDATE_LIST_START:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: ''
    //   }

    //   case UPDATE_LIST_SUCCESS:
    //     return {
    //       ...state,
    //       smurfs: action.payload,
    //       isFetching: false,
    //       error: ''
    //     }

    //   case UPDATE_LIST_FAIL:
    //     return {
    //       error: action.payload
    //     }


    default:
      return state
  }
}

// const initialState = [

// ]

// export const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case "":
//             console.log("post api")
//             return [ ...state, action.payload ]
//         default:
//             return state;
//     }
// } 