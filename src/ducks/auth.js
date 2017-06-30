import apiRequest from 'utils/api';

const SIGN_IN = 'SIGN_IN';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

const SIGN_UP = 'SIGN_UP';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const REFRESH_TOKEN = 'REFRESH_TOKEN';
const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

const SOME = 'SOME';
const SOME_SUCCESS = 'SOME_SUCCESS';
const SOME_FAILURE = 'SOME_FAILURE';

export function signIn(data) {
    const url = `/uaa/oauth/token?grant_type=password&username=${data.username}&password=${data.password}`;

    return dispatch => apiRequest('post', url,
        [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE], dispatch,
        data
    );
}

export function signUp(data) {
    const url = `/registration`;

    return dispatch => apiRequest('post', url,
        [SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE], dispatch,
        data
    );
}

export function refreshToken(refreshToken) {
    const url = `/refresh_token=${refreshToken}`;

    return dispatch => apiRequest('post', url,
        [REFRESH_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE], dispatch
    );
}

export function some() {
    return dispatch => apiRequest('post', '/some',
        [SOME, SOME_SUCCESS, SOME_FAILURE], dispatch
    );
}

const initialState = {
    signed: false
};

export default function (state = initialState, action) {

    switch (action.type) {

        case SIGN_IN:
            return {
                ...state,
                signInLoading: true,
                signInLoaded: false,

            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signInLoading: false,
                signInLoaded: true,
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                signInLoading: false,
                signInLoaded: false,
            }

        case SIGN_UP:
            return {
                ...state,
                signUpLoading: true,
                signUpLoaded: false,

            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                signUpLoaded: true,
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpLoaded: false,
            }

        case REFRESH_TOKEN:
            return {
                ...state,
                refreshTokenLoading: true,
                refreshTokenLoaded: false,
            }

        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                refreshTokenLoading: false,
                refreshTokenLoaded: true,
            }

        case REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                refreshTokenLoading: false,
                refreshTokenLoaded: false,
            }

        default:
            return state;
    }

}