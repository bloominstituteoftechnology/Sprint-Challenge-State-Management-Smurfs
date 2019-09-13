const baseUrl = "http://localhost:3333"

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"

export const getSmurfs = () => async dispatch => {
    dispatch({ type: GET_SMURFS_START })

    try {
        const res = await fetch(`${baseUrl}/smurfs`)
        const parsedRes = await res.json()
        dispatch({ type: GET_SMURFS_SUCCESS, payload: parsedRes})
    } catch(e) {
        dispatch({ type: GET_SMURFS_FAILURE })
        console.error(e)
    }
}


export const ADD_NEW_SMURF_START = "ADD_NEW_SMURF_START"
export const ADD_NEW_SMURF_SUCCESS = "ADD_NEW_SMURF_SUCCESS"
export const ADD_NEW_SMURF_FAILURE = "ADD_NEW_SMURF_FAILURE"

export const addNewSmurf = smurf => async dispatch => {
    dispatch({ type: ADD_NEW_SMURF_START })

    try {
        dispatch({ type: ADD_NEW_SMURF_START })
        const res = await fetch(`${baseUrl}/smurfs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(smurf)
        })
        const parsedRes = await res.json()
        dispatch({ type: ADD_NEW_SMURF_SUCCESS, payload: parsedRes })
    } catch(e) {
        dispatch({ type: ADD_NEW_SMURF_FAILURE })
        console.error(e)
    }
    
}

