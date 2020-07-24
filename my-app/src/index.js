import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';

//import App from './App';
import * as serviceWorker from './serviceWorker';
import bugActionCreators from './bugTracker/actions';
import appStore from './store';
import BugTracker from './bugTracker';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp() {
  const bugs = appStore.getState();
  ReactDOM.render(
    <React.StrictMode>
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById('root'));
};
renderApp();
appStore.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//ES6 Modules discussion

/*
import * as calc from './calculator';
console.log(calc);
*/

/*
import * as calc from './calculator';
//const add = calc.add;
const { add } = calc;
console.log(add(100,200));
*/

/*
import { add } from './calculator';
console.log(add(100, 200));
*/

//importing default exported object
/* import calc from './calculator'
console.log(calc); */