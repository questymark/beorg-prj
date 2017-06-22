import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import common from './common';

const logger = createLogger({
    collapsed: true,
    diff: false,
});

export default function (initialState = {}) {
  const rootReducer = combineReducers({
      common
  });

  return createStore(rootReducer, initialState,
      compose(
        applyMiddleware(thunk, logger)
  ));
}