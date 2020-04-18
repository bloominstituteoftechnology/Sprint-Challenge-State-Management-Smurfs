import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const START_POST = "START_POST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const fetchData= () =>{
    return dispatch=>{
        dispatch({
            type:FETCH_DATA
        })
        setTimeout(()=>{
            axios
                .get(
                    "http://localhost:3333/smurfs"
                )
                .then(res=>{
                    console.log("TROY ACTIONS AXIOS RESPONSE", res)
                    dispatch({type:DATA_SUCCESS,payload: res})
                    
                })
                .catch(err =>{
                    console.log("TROY ACTIONS AXIOS ERROR", err)
                    dispatch({type:DATA_ERROR,payload:err})
                })
        },1500)
    }
}  

export const addSmurf = (smurf) => (dispatch) =>{

    dispatch({type:START_POST})
        axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((res)=>{
            console.log("TROY ACTIONS SMURF POST SUCCESS",res)
            dispatch({
                type:POST_SUCCESS, payload:res
            })
        })
        .catch((err)=>{
            console.log("TROY ACTIONS SMURF POST FAIL", err)
            dispatch({
                type:POST_FAIL,payload:err})
        })

}


