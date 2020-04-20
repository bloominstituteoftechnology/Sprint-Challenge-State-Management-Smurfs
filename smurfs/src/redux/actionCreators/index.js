import {
    GET_SMURFS_FAIL,
    GET_SMURFS_START,
    GET_SMURFS_FINISH,
    ADD_SMURFS_START,
    ADD_SMURFS_FINISH,
    ADD_SMURFS_FAIL,
    UPDATE_SMURFS_FAIL,
    UPDATE_SMURFS_START,
    UPDATE_SMURFS_FINISH,
    DELETE_SMURFS_FAIL,
    DELETE_SMURFS_START,
    DELETE_SMURFS_FINISH,
} from '../actions';

import { withAxios } from '../../helpers';

export const getSmurfStart = () => {
    return {
        type: GET_SMURFS_START,
    };
};

export const getSmurfFinish = (data) => {
    return {
        type: GET_SMURFS_FINISH,
        payload: data,
    };
};

export const getSmurfFail = (data) => {
    return {
        type: GET_SMURFS_FAIL,
        payload: data,
    };
};

export const addSmurfStart = () => {
    return {
        type: ADD_SMURFS_START,
    };
};

export const addSmurfFinish = (data) => {
    return {
        type: ADD_SMURFS_FINISH,
        payload: data,
    };
};

export const addSmurfFail = (data) => {
    return {
        type: ADD_SMURFS_FAIL,
        payload: data,
    };
};

export const updateSmurfStart = () => {
    return {
        type: UPDATE_SMURFS_START,
    };
};

export const updateSmurfFinish = (data) => {
    return {
        type: UPDATE_SMURFS_FINISH,
        payload: data,
    };
};

export const updateSmurfFail = (data) => {
    return {
        type: UPDATE_SMURFS_FAIL,
        payload: data,
    };
};

export const deleteSmurfStart = () => {
    return {
        type: DELETE_SMURFS_START,
    };
};

export const deleteSmurfFinish = (data) => {
    return {
        type: DELETE_SMURFS_FINISH,
        payload: data,
    };
};

export const deleteSmurfFail = (data) => {
    return {
        type: DELETE_SMURFS_FAIL,
        payload: data,
    };
};

const axios = withAxios();

export const getSmurfAsync = () => async (dispatch) => {
    addSmurfStart();

    try {
        const response = await axios.get('/smurfs');
        addSmurfFinish(response.data);
    } catch (error) {
        addSmurfFail(error.response);
    }
};
