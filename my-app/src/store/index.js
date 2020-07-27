import { createStore, combineReducers, applyMiddleware } from 'redux';
//import loggerMiddleware from './middlewares/loggerMiddleware';
// yarn add redux-logger
import logger from 'redux-logger';

//import asyncMiddleware from './middlewares/asyncMiddleware';
//yarn add redux-thunk
import thunk from 'redux-thunk';

import bugsReducer from '../reducers/bugsReducer';
import spinnerReducer from '../reducers/spinnerReducer';

const rootReducer = combineReducers({
 bugsData : bugsReducer,
 spinnerData : spinnerReducer
});

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.log(action);
            return next(action);
        }
    }
} 
*/

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk));

export default appStore;