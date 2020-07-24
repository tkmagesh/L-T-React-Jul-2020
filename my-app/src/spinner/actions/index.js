let spinnerActionCreators = {
    decrement(delta) {
        const dec_action = { type: 'DECREMENT', payload: delta };
        return dec_action;
    },
    increment(delta) {
        const inc_action = { type: 'INCREMENT', payload: delta };
        return inc_action;
    }
};

export default spinnerActionCreators;