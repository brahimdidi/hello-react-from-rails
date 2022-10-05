import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greetingStore';

const rootReducer = combineReducers({
    greeting: greetingReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;