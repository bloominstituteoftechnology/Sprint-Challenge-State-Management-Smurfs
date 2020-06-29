import axios from 'axios';

export const FETCH_BEGIN ='FETCH_BEGIN';
export const FETCH_SUCCESS ='FETCH_SUCCESS';
export const FETCH_FAIL ='FETCH_FAIL';
export const GRAB_LIST = 'GRAB_LIST';

export const SEND_BEGIN ='SEND_BEGIN';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAIL ='SEND_FAIL';

export const PUT_SUCCESS = 'PUT_SUCCESS';

export const get_smurfs = () => dispatch =>{
    dispatch({type:FETCH_BEGIN});
    axios
        .get('http://localhost:3333/smurfs')
        .then(resp=>{
            console.log(resp.data);
            dispatch({type:FETCH_SUCCESS, payload:resp.data})
        })
        .catch(err=>{
            console.log(err)
        });
}

export const send_smurf = (smurf)  => {

    console.log('inside send smurf')
    axios
        .post('http://localhost:3333/smurfs',{
            name:smurf.name + '5',
            age:parseInt(smurf.age),
            height: smurf.height,
            id: Math.floor(Math.random()* 100000)
        })
        .then(resp=>{
            console.log(resp);

        })
        .catch(err=>{
            console.log(err);
        })
}

export const put_smurf = (smurf) =>{
    axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, {
            name: smurf.name,
            age: parseInt(smurf.age),
            height: smurf.height,
            id : smurf.id
        })
        .then(resp=>{
            console.log(resp)
        })
        .catch(err=>{
            console.log(err)
        })
}

export const inquire = () =>{
    return{
        type: GRAB_LIST
    }
}
