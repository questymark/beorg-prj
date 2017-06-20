import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import auth from './auth';
import common from './common';

const logger = createLogger({
    collapsed: true,
    diff: false,
});

export default function (initialState = {}) {
  const rootReducer = combineReducers({
      auth,
      common
  });

  return createStore(rootReducer, initialState,
      compose(
        applyMiddleware(thunk, logger)
  ));
}