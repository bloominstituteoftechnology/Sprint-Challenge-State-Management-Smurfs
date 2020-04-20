import * as types from "./actionTypes";

const initialCount = 0;

export function countReducer(state = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;

    case types.DECREMENT:
      return state - 1;

    case types.RESET:
      return 0;
    default:
      return state;
  }
}

const initialData = [];
export function getSmurfReducer(state = initialData, action) {
  switch (action.type) {
    case types.GET_SMURF:
      return action.payload;
    default:
      return state;
  }
}
const initialFormState = {
  name: "",
  age: "",
  height: ""
};

export function addSmurReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}