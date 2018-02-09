import { AsyncStorage } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://api.dev.peerceive.com/api/v1';

function callApi(type, endpoint, options) {
    let token = AsyncStorage.getItem('jwt') || null;

    return axios({
        method: type,
        headers: { Authorization: `Bearer ${token}` },
        body: options,
        baseURL: BASE_URL,
        url: endpoint
    }).then(res => {
        if (!res.ok) {
            throw res;
            // return Promise.reject(res);
        }
        return res;
    });
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, type, options, actions } = callAPI;
    next({ type: actions.request });
    return callApi(type, endpoint, options).then(
        response => {
            next({
                response: response.body,
                type: actions.success
            });
        },
        error => {
            if (error.status === 401) {
                AsyncStorage.removeItem('jwt');
                next({
                    type: 'application/auth/LOGOUT_SUCCESS',
                    isFetching: false,
                    isAuthenticated: false
                });
            } else {
                next({
                    error: error.message || 'There was an error.',
                    type: actions.failure
                });
            }
        }
    );
};
