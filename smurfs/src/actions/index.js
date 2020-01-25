import axios from "axios";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
//Should have start and fail action types

//Need to export the new set of actions types for posting again, should have 3

export const fetchSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);

      dispatch({ type: "FETCHING_ACTIVITY_SUCCESS", payload: res.data });
    })
    .catch(err => console.log(err));
};

export const postSmurfs = item => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", {
      name: item.name,
      age: Number(item.age),
      height: item.height
    })
    .then(res => {
      dispatch({ type: "SUCESSS", payload: res.data });
    });
};
