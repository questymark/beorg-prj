import i18next from 'i18next';

export function setTokens(body) {
    localStorage.setItem('tokens', JSON.stringify({
        accessToken: body.access_token,
        refreshToken: body.refresh_token
    }));
};

export function getTokens() {
    return JSON.parse(localStorage.getItem('tokens'));
};