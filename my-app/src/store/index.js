import { createStore, combineReducers } from 'redux';

import bugsReducer from '../reducers/bugsReducer';
import spinnerReducer from '../reducers/spinnerReducer';

const rootReducer = combineReducers({
 bugsData : bugsReducer,
 spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer);

export default appStore;