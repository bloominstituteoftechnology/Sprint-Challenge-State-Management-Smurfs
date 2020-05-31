import { useEffect, useReducer } from "react";
import axios from "axios";

// Reducer and initialState
import { reducer, initialState } from "../reducers";

// Actions
import { UPDATE_STATE_WITH_SMURFS } from "../actions";

export const useSmurfs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) =>
        dispatch({ type: UPDATE_STATE_WITH_SMURFS, payload: res.data })
      )
      .catch((err) => console.log(err));
  }, []);

  return [state, dispatch];
};
