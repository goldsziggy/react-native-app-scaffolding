import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../modules';
import initialState from './initialState';

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });

export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
