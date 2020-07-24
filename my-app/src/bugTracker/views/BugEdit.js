import React, { Component } from 'react';

class BugEdit extends Component {
    state = {
        newBugName: ''
    };
    render() {
        return (
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={evt => this.setState({ newBugName: evt.target.value })} />
                <input type="button" value="Add new" onClick={() => this.props.addNew(this.state.newBugName)} />
            </section>
        )
    }
}

export default BugEdit;