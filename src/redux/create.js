import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';

export default function createStore(initialState) {
    const create = compose(applyMiddleware(thunk, api))(_createStore);

    const reducer = require('./modules/reducer').default;
    const store = create(reducer);

    return store;
}
