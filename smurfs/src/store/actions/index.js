export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"

export const getSmurfs = (dispatch)  => {
    dispatch({ type: GET_SMURFS_START })

    fetch("localhost:3333/smurfs")
    .then(res => res.json())
    .then(parsedRes => {
        dispatch({ type: GET_SMURFS_SUCCESS })
        console.log(parsedRes)
    })
    .catch(res => {
        dispatch({ type: GET_SMURFS_FAILURE })
        console.error(res)
    })
}


