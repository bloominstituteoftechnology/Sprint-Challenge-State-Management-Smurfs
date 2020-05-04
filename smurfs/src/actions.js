export const fetchSmurfs = () => (dispatch, getState) => {
    const state = getState();
    
    if (state.smurfs.length > 0) {
        return;
    }

    fetch('http://localhost:3333/smurfs')
        .then(response => response.json())
        .then(json => dispatch({ type: 'SET_SMURFS', smurfs: json }));
};