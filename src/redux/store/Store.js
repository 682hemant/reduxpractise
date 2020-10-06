import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import CounterReducer from '../reducers/CounterReducers';
import StoreReducer from '../reducers/storereducer';
import  FormReducer from '../reducers/AuthReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
      ctr:CounterReducer,
      str: StoreReducer,
      form: formReducer,
      frm: FormReducer
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export default store;