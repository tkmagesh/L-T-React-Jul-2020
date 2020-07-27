import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggerMiddleware from './middlewares/loggerMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';

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

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default appStore;