import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import bugActionCreators from "./actions";

import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugStats from './views/BugStats';
import BugList from './views/BugList';
import './index.css';

class BugTracker extends Component {
    render() {
        const { bugs, addNew, toggle, remove, removeClosed, load } = this.props;
        return (
            <div>
                <h3>Bug Tracker</h3>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <input type="button" value="LOAD BUGS" onClick={load} />
                <BugList bugs={bugs} toggle={toggle} remove={remove} removeClosed={removeClosed} />
            </div>
        )
    }
}

function mapStateToProps(appState){
    const bugs = appState.bugsData.filter(bug => bug.id % 2 === appState.spinnerData % 2);
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);