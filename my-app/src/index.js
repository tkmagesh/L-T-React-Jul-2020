import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <h1>My App</h1>
      <Spinner/>
      <BugTracker/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
 

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