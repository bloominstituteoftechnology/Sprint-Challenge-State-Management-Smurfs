import {
SMURF_NAME,
SMURF_NAME_SUCCESS,
SMURF_NAME_ERROR,
SMURF_AGE,
SMURF_HEIGHT, 
SMURF_ID
} from '../actions/smurf';

const initialState = {
  smurf: {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  },

  moreSmurfs: [
    {
      name: 'Grumpy',
      age: 30,
      height: '3cm',
      id: 1
    },
    {
      name: 'Sleepy',
      age: 211,
      height: '2cm',
      id: 0
    }
  ]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SMURF_NAME:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_NAME_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isLoading: false
      };
    case SMURF_NAME_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
      case SMURF_AGE:
        return {
          ...state,
          isLoading: true
        };
        case SMURF_HEIGHT:
            return {
              ...state,
              isLoading: true
            };
            case SMURF_ID:
            return {
              ...state,
              isLoading: true
            };

    default:
      return state;
  }
}