// import { createStore } from 'redux';
// import rootReducer from '../modules'

// const inititalState = {
// 	error: false
// }

// export default createStore(rootReducer, defaultState);

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../modules';
import initialState from './initialState';

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);