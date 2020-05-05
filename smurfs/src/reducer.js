export const initialState = { smurfs: [] };

export default function reducer(state, action) {
	switch (action.type) {
		case 'SET_SMURFS':
			return {
				...state,
				smurfs: action.smurfs
			};

		// create returned all smurfs instead of new smurf
		// case 'ADD_SMURF':
		//     return {
		//         ...state,
		//         smurfs: [
		//             ...state.smurfs,
		//             action.smurf,
		//         ],
		//     };

		case 'MOVE_OUT':
			return {
				...state,
				// keep all smurfs but the one i am moving out
				smurfs: state.smurfs.filter((smurf) => smurf.id !== action.smurfId)
			};
		default:
			return state;
	}
}
