import { i18nInit } from 'utils/utils';

const SET_LANGUAGE = 'SET_LANGUAGE';

export function setLanguage(language, self) {
    i18nInit(language, self);

    return {
        type: SET_LANGUAGE,
        language
    }
}

const initialState = {
    language: 'ru'
};

export default function (state = initialState, action) {

    switch (action.type) {

        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language

            }

        default:
            return state;
    }

}