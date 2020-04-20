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
    dispatch(getSmurfStart());
    try {
        const response = await axios.get('/smurfs');
        setTimeout(() => {
            dispatch(getSmurfFinish(response.data));
        }, 2000);
    } catch (error) {
        dispatch(getSmurfFail(error.response));
    }
};

export const addSmurfAsync = (data) => async (dispatch) => {
    dispatch(addSmurfStart());
    try {
        const response = await axios.post('/smurfs', data);
        setTimeout(() => {
            dispatch(addSmurfFinish(response.data));
        }, 2000);
    } catch (error) {
        dispatch(addSmurfFail(error.response));
    }
};

export const updateSmurfAsync = ({ id, changes }) => async (dispatch) => {
    dispatch(updateSmurfStart());
    try {
        const response = await axios.put(`/smurfs/${id}`, changes);
        setTimeout(() => {
            dispatch(updateSmurfFinish(response.data));
        }, 2000);
    } catch (error) {
        dispatch(updateSmurfFail(error.response));
    }
};

export const deleteSmurfAsync = (id) => async (dispatch) => {
    dispatch(deleteSmurfStart());
    try {
        const response = await axios.delete(`/smurfs/${id}`);
        setTimeout(() => {
            dispatch(deleteSmurfFinish(response.data));
        }, 2000);
    } catch (error) {
        dispatch(deleteSmurfFail(error.response));
    }
};
