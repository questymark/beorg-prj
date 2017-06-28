import axios from 'axios';
import startsWith from 'lodash/startsWith';
import Notifications from 'react-notification-system-redux';
import { browserHistory } from 'react-router';

import mockApi from 'mock/mockApi';
import { setTokens, getTokens, setRefreshToken } from './utils';

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
    const authHeader = EVENT_STARTED !== 'SIGN_IN' && getTokens() ?
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
        const tokens = getTokens();
        const authToken = error.config.headers.Authorization;
        const status = error.response.status;

        dispatch({type: EVENT_FAILED, error});

        dispatch(Notifications.error({ message: error.message, position: 'bl' }));

        if (status === 401) {

            // проверяем на наличие токена в заголовке и в localStorage
            if (authToken && tokens) {

                // проверяем, равен ли текущий токен refresh токену
                if (authToken !== `Bearer ${tokens.refreshToken}`) {
                    console.log('refresh token');

                    // обновляем токен
                    setRefreshToken();

                    // вызываем рекурсивно apiRequest
                    apiRequest(method, operation, types, dispatch, formData);
                } else {

                    // сюда попадаем, если уже стоит refreshToken и ошибка 401
                    browserHistory.push('/signin');
                }

                return;
            }

            // если в заголовке нет токена, редиректим на /signin
            browserHistory.push('/signin');

        }
    })
}