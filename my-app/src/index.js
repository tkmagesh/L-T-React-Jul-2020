import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

/* 
class TimerContainer extends React.Component {
  state = {
    show : true
  };

  render(){
    return(
      <div>
        <input type="button" value="Toggle Timer" onClick={() => this.setState({show : !this.state.show})} />
        { this.state.show ? <Timer/> : null }
      </div>
    );
  }

} 
*/

const TimerContainer = () => {
  const [show, setShow] = React.useState(true);
  return(
    <div>
      <input 
        type="button" 
        value="Toggle Timer" 
        onClick={() => setShow(!show) } />
      { show ? <Timer /> : null}
    </div>
  )
};


class Timer extends React.Component {
  state = {
    currentTime: new Date()
  }
  timerId = null;

  componentDidMount = () => {
    console.log('componentDidMount triggered');
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount triggered');
    clearInterval(this.timerId);
  }
  render(){
    return (<div>[ {this.state.currentTime.toTimeString()} ]</div>);
  }
}

const Home = () => {
  return (
    <div>
      <p>Irure ut quis aliquip velit consequat. Ut et adipisicing voluptate ex adipisicing fugiat cupidatat non magna nulla consectetur incididunt. Excepteur cillum fugiat deserunt dolor quis ea esse exercitation fugiat labore duis laborum in.</p>
      <p>Irure ut quis aliquip velit consequat. Ut et adipisicing voluptate ex adipisicing fugiat cupidatat non magna nulla consectetur incididunt. Excepteur cillum fugiat deserunt dolor quis ea esse exercitation fugiat labore duis laborum in.</p>
    </div>
  )
}

 ReactDOM.render(
    <Provider store={appStore}>
      <h1>My App</h1>
      <Router>
        <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
              [ <Link to="/bugs">Bug Tracker</Link> ]
            </span>
            <span>
              [ <Link to="/spinner">Spinner</Link> ]
            </span>
            
        </div>
       <TimerContainer />      
        <div>
          <Switch>
            <Route path="/bugs">
              <BugTracker />
            </Route>
            <Route path="/spinner">
              <Spinner />
            </Route>
           <Route path="/">
             <Home />
           </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  
  ,
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