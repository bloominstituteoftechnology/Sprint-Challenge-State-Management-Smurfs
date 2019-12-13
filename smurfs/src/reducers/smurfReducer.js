const intitialState = {
	smurfs: [{ name: '', age: null, height: ''}],
	isFetching: false,
	error: ''
}

export const smurfReducer = (state = intitialState, action) => {
	switch(action.type) {
	default:
		return state;
	}
}