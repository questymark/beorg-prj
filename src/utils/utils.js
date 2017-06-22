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

export function i18nInit(language, self) {
    i18next.init({
        lng: language,
        resources: require(`i18n/${language}.json`)
    }, (err, t) => {
        self.forceUpdate();
    });
};