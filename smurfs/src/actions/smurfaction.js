export const UPDATE_SMURF = 'UPDATE_SMURF'




export function updateSmurf(title) {
    return dispatch => 
    dispatch({type: UPDATE_SMURF, payload: title})
}