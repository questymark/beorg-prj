import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { IntlReducer as Intl } from 'react-redux-multilingual'

import auth from './auth';

const logger = createLogger({
    collapsed: true,
    diff: false,
});

export default function (initialState = { Intl: {locale: 'ru'} }) {
  const rootReducer = combineReducers({
      Intl,
      auth
  });

  return createStore(rootReducer, initialState,
      compose(
        applyMiddleware(thunk, logger)
  ));
}