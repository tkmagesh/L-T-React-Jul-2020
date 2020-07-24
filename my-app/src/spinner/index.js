import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

class Spinner extends Component {
    state = {
        delta: 0,
    };

    render() {
        const { value: spinnerValue, increment, decrement } = this.props;
        return (
            <div>
                <h3>Spinner</h3>
                <label>Delta : </label>
                <input type="number" value={this.state.delta} onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={() => decrement(this.state.delta)} />
                <span> {spinnerValue} </span>
                <input type="button" value="Increment" onClick={() => increment(this.state.delta)} />
            </div>
        )
    }
}

function mapStateToProps(appState){
    const value = appState.spinnerData;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);