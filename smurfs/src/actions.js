export const fetchSmurfs = () => (dispatch, getState) => {
    const state = getState();
    
    if (state.smurfs.length > 0) {
        return;
    }

    fetch('http://localhost:3333/smurfs')
        .then(response => response.json())
        .then(json => dispatch({ type: 'SET_SMURFS', smurfs: json }));
};

export const createSmurf = smurfData => (dispatch) => {
    const requestData = {
        ...smurfData,
        age: parseInt(smurfData.age, 10),
    };

    fetch('http://localhost:3333/smurfs', {
        method: 'POST',
        // have to tell server i am sending json so the server can 
        // see the request data in the body
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => response.json())
        .then(json => dispatch({ type: 'SET_SMURFS', smurfs: json }));
};