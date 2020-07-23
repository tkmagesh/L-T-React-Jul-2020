var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function triggerCallbacks(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) /* old state, state didnot change */ return;
        _currentState = newState;
        triggerCallbacks();
    }

    function createStore(reducer){
        if (!reducer || typeof reducer !== 'function')
            throw new Error('A reducer is manadatory to create the store');
        _reducer = reducer;
        //to initialize the currentState with a VALID STATE
        _currentState = _reducer(undefined, _init_action);
        const store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function (...args) {
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})()