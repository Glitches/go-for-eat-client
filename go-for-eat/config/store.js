import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';
import api from '../middleware/api';
import { saveState, loadState } from '../localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(api))
);


store.subscribe(() => {
  saveState({
    authentication: store.getState().authentication,
    entities: store.getState().entities,
  });
});

export default store;
