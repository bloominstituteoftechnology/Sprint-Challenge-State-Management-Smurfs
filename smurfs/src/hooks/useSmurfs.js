import { useEffect, useReducer } from "react";
import axios from "axios";

// Reducer and initialState
import { reducer, initialState } from "../reducers";

// Actions
import { FETCH_SMURF_SUCCESS } from "../actions";

export const useSmurfs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return [state, dispatch];
};
