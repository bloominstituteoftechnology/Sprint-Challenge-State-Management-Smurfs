import axios from "axios";

export const PREPARE_DATA = "PREPARE_DATA";
export const SMURFS_LOADING_SUCCESS = "SMURFS_LOADING_SUCCESS";
export const SET_ERROR = "SET_ERROR";

export const loadSmurfs = () => dispatch => {
	dispatch({ type: PREPARE_DATA });

	setTimeout(() => {
	axios
		.get("http://localhost:3333/smurfs")
		.then(res => {
			dispatch({ type: SMURFS_LOADING_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.error("Gargamel Got Us Help!", err);
			dispatch({ type: SET_ERROR, payload: "Gargamel Has Us Help!" });
		}, []);
})
}
export const addSmurf = smurf => dispatch => {
	axios
		.post("http://localhost:3333/smurfs", smurf)
		.then(res => {
			dispatch({ type: SMURFS_LOADING_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.error("Azreal is after us, Run!", err);
		});
};
