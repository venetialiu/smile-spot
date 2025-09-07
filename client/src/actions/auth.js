import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // call signin api
        const { data } = await api.signIn(formData);

        // dispatch data to reducer
        dispatch({ type: AUTH, data });

        // navigat to home page
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // sign up the user
        const { data } = await api.signUp(formData);

        // dispatch data to reducer
        dispatch({ type: AUTH, data });

        // navigat to home page
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}