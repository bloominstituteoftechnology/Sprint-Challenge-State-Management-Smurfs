import { get } from "http";
import Axios from "axios";


export const SMURFS_LOADING = "SMURFS_LOADING";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILED = "SMURFS_FAILED";

export const smurfsLoading = () => ({ type: SMURFS_LOADING});

export const smurfsLoadSuccess = data => ({
    type: SMURFS_SUCCESS,
    payload: data
})

export const smurfsLoadFail = error => ({
    type: SMURFS_FAILED, 
    payload: error
});

export function getSmurfs(){

    return function(dispatch){

        dispatch(smurfsLoading())

        return Axios
                .get('http://localhost:3333/smurfs')
                .then(res => {
                dispatch(smurfsLoadSuccess(res))
                })
    }

}

