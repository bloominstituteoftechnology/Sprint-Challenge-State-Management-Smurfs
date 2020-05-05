//fetch the list of Smurfs from API
export const fetchSmurfs = () => (dispatch, getState) => {
	const state = getState();
	// just so we dont fetch again if we already has smurfs in state
	if (state.smurfs.length > 0) {
		return;
	}
	//fetch when we dont have smurfs
	fetch('http://localhost:3333/smurfs')
		.then((response) => response.json())
		// we recieve a list of smurfs so we dispatch the action{} 'SET_SMURFS' which handle by reducer
		.then((json) => dispatch({ type: 'SET_SMURFS', smurfs: json }));
};

//create new Smurf - createSmurf is a action creator that return a thunk take dispatch and making a fetch
export const createSmurf = (smurfData) => (dispatch) => {
	const requestData = {
		...smurfData,
		age: parseInt(smurfData.age, 10)
	};

	fetch('http://localhost:3333/smurfs', {
		method: 'POST',
		// have to tell server i am sending json so the server can
		// see the request data in the body
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestData)
	})
		.then((response) => response.json())
		//creating a smurf return a whole list of smurfs again.
		.then((json) => dispatch({ type: 'SET_SMURFS', smurfs: json }));
};

//delete a smurf
export const moveSmurfOut = (smurfId) => (dispatch) => {
	fetch(`http://localhost:3333/smurfs/${smurfId}`, {
		method: 'DELETE'
	}).then(() => {
		dispatch({ type: 'MOVE_OUT', smurfId });
	});
};
