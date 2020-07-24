import { createStore } from 'redux';

import bugsReducer from '../reducers/bugsReducer';

const appStore = createStore(bugsReducer);

export default appStore;