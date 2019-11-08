export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";

export const smurfLoading = () => ({ type: FETCH_SMURF_LOADING });
export const smurfLoadSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
});
export const smurfLoadFailure = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
});

export function fetchSmurf() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(smurfLoading());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://localhost:3333/smurfs`)
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(smurfLoadSuccess(json.results))
      )
      .catch(error => dispatch(smurfLoadFailure(error)));
  };
}
