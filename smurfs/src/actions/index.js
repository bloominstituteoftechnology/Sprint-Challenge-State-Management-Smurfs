export const getSmurfs = (data) =>{
    return {
        type: "GET_SMURFS",
        payload: data
    }
}

export const addSmurfs = (data) => {
    return {
        type: "ADD_SMURF",
        payload: data
    }
}

export const deleteSmurfs = (data) =>{
    return {
        type: "DELETE_SMURF",
        payload: data
    }
}