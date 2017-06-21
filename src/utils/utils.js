export function setTokens(body) {
    localStorage.setItem('tokens', JSON.stringify({
        accessToken: body.access_token,
        refreshToken: body.refresh_token
    }));
};

export function getTokens() {
    return JSON.parse(localStorage.getItem('tokens'));
};

export function setLocaleInLocalStorage(local) {
    localStorage.setItem('locale', local);
};

export function getLocaleFromLocalStorage() {
    return localStorage.getItem('locale')
};