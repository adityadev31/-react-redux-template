// middleware thunk to handle async calls

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/index'

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;