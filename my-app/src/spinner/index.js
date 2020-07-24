import React, { Component } from 'react';

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

export default Spinner;