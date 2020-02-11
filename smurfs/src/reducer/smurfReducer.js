import {GET_DATA, UPDATE_lIST, RECIEVE_DATA, DATA_SUCCESS} from '../actions/index';
export const intialState = {
    smurfList: [],
    isFetchingData: true,
    isPostingData: false
};

export const smurfReducer = (state = intialState, action)=>{
    switch(action.type) {
        case GET_DATA :
            return{
                ...state,
                isFetchingData : false
            };
        case UPDATE_lIST:
            return{
                ...state,
                smurfList: action.payload,
                isFetchingData: true
            }
        case RECIEVE_DATA:
            return{
                ...state,
                isPostingData: true,                
            }
        case DATA_SUCCESS:
            return{
                ...state,
                smurfList:[...state.smurfList, action.payload],
                isPostingData: false
            }
        default:
            return state;
}}