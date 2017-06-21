import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual'
import routes from './routes';
import configureStore from './ducks/configureStore';
import registerServiceWorker from './registerServiceWorker';

import i18n from './i18n';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const component = (
    <Provider store={store}>
        <IntlProvider translations={ i18n } locale='ru'>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </IntlProvider>
    </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
registerServiceWorker();
