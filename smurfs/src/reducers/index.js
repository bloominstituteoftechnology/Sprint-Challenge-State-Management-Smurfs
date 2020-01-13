const initialState = {  
    smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){ 
        case "GET_SMURFS" :
            return { smurfs: action.payload };
        case "ADD_SMURF":
              return { smurfs: action.payload };
        case "DELETE_SMURF":
              return { smurfs: action.payload };
            default:
              return state;
    }



}

export default smurfReducer;