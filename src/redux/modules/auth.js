/*eslint no-console: 0 */
import { AsyncStorage } from 'react-native';
import axios from 'axios';
//User Actions
const LOGIN_REQUEST = 'application/auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'application/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'application/auth/LOGIN_FAILURE';
const LOGOUT_REQUEST = 'application/auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'application/auth/LOGOUT_SUCCESS';

//Initial State
const initialState = {
    loading: false,
    isAuthenticated: AsyncStorage.getItem('jwt') ? true : false
};

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                errorMessage: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                errorMessage: action.message
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            };
        default:
            return state;
    }
}

//Action Creators
export function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        creds
    };
}

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        id_token: user.id_token
    };
}

export function loginError(response) {
    return {
        type: LOGIN_FAILURE,
        response
    };
}

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS
    };
}

//Async actions
export function loginUser(creds) {
    return dispatch => {
        dispatch(requestLogin(creds));
        return axios({
            url: '/auth/login',
            baseURL: 'https://api.dev.peerceive.com/api/v1',
            method: 'post',
            data: creds
        }).then(
            res => {
                //dispatch(setLoading(false));
                dispatch(receiveLogin(res));
                console.log(res);
                AsyncStorage.setItem('jwt', res.data.data.token);
            },
            err => {
                dispatch(loginError(err.response));
            }
        );
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        AsyncStorage.removeItem('jwt');
        dispatch(receiveLogout());
    };
}
