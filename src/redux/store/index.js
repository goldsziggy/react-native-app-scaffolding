import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../modules';
import initialState from './initialState';

const middleware = [thunk];

const store = process.env.NODE_ENV === 'development' ? 
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) : 
  createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;