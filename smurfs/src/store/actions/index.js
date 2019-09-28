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


export const EDIT_SMURF_START = "EDIT_SMURF_START"
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS"
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE"

export const startEditingSmurf = id => {
    return  { type: EDIT_SMURF_START, payload: id }
}

export const editSmurf = smurf => async (dispatch, getState) => {
    try {
        const { smurfToEditId }  = getState()
        const res = await fetch(`${baseUrl}/smurfs/${smurfToEditId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(smurf)
        })
        const parsedRes =  await res.json()

        dispatch({ type: EDIT_SMURF_SUCCESS, payload: parsedRes })
    } catch(e) {
        dispatch({ type: EDIT_SMURF_FAILURE })
        console.error(e)
    }
}


export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE"



export const deleteSmurf = id => async (dispatch, getState) => {
    dispatch({ type: DELETE_SMURF_START, payload: id })
    
    try {
        const { smurfToDeleteId } = getState()
        const res = await fetch(`${baseUrl}/smurfs/${smurfToDeleteId}`, {
            method: 'DELETE'
        })
        const parsedRes = await res.json()
        console.log('DELETE SMURF SUCCESS RESPONSE' ,parsedRes)
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: parsedRes })
    } catch(e) {
        dispatch({ type: DELETE_SMURF_FAILURE })
        console.error(e)
    }
}