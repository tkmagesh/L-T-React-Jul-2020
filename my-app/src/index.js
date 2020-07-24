import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';

//import App from './App';
import * as serviceWorker from './serviceWorker';

import bugActionCreators from './bugTracker/actions';
import spinnerActionCreators from './spinner/actions';

import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';

//Creating the action dispatchers - for the Component
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp() {
  const appState = appStore.getState();
  
  //extracting the data - for the component
  const bugs = appState.bugsData;
  const value = appState.spinnerData;

  ReactDOM.render(
    <React.StrictMode>
      <h1>My App</h1>
      <Spinner value={value} {...spinnerActionDispatchers}/>
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