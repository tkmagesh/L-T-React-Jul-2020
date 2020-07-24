import React, { Component } from 'react';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugStats from './views/BugStats';
import BugList from './views/BugList';
import './index.css';

class BugTracker extends Component {
    render() {
        const { bugs, addNew, toggle, remove, removeClosed } = this.props;
        return (
            <div>
                <h3>Bug Tracker</h3>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList bugs={bugs} toggle={toggle} remove={remove} removeClosed={removeClosed} />
            </div>
        )
    }
}

export default BugTracker;