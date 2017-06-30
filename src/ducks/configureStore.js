import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import {reducer as notifications} from 'react-notification-system-redux';

import { getLocaleFromLocalStorage } from 'utils/utils';

import auth from './auth';
import common from './common';

const logger = createLogger({
    collapsed: true,
    diff: false,
});

const locale = getLocaleFromLocalStorage() ? getLocaleFromLocalStorage() : 'ru';

export default function (initialState = { Intl: { locale } }) {
  const rootReducer = combineReducers({
      Intl,
      notifications,
      auth,
      common
  });

  return createStore(rootReducer, initialState,
      compose(
        applyMiddleware(thunk, logger)
  ));
}