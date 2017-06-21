import axios from 'axios';
import startsWith from 'lodash/startsWith';
import Notifications from 'react-notification-system-redux';
import mockApi from 'mock/mockApi';

import { setTokens, getTokens } from './utils';

mockApi(axios);

const host = 'http://localhost:8080';

function formatUrl(path) {
    if (startsWith(path, 'http')) return path;

    return host + path;
}

export default function apiRequest(method, operation, types, dispatch, formData) {

    const EVENT_STARTED = types[0];
    const EVENT_SUCCESS = types[1];
    const EVENT_FAILED = types[2];

    dispatch({ type: EVENT_STARTED, params: formData });

    const url = formatUrl(operation);
    const authHeader = EVENT_STARTED !== 'SIGN_IN' ?
        {headers: { 'Authorization': `Bearer ${getTokens().accessToken}` }} : '';

    axios({
        method: method,
        url: url,
        data: formData,
        ...authHeader
    })
    .then(response => {
        console.log(response);
        if (EVENT_STARTED === 'SIGN_IN') {
            setTokens(response.data);

            dispatch({
                type: EVENT_SUCCESS,
                data: response.data
            });

            return;
        }

        if (response.success) {
            dispatch({
                type: EVENT_SUCCESS,
                data: response.data.body
            });
        } else {
            dispatch({
                type: EVENT_FAILED,
                error: response.data.errorCode
            });

            dispatch(Notifications.error({ message: response.data.errorCode, position: 'bl' }));
        }

    })
    .catch(error => {
        dispatch({type: EVENT_FAILED, error});

        dispatch(Notifications.error({ message: error.message, position: 'bl' }));
    })
}