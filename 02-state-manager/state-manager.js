var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

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
        const newState = _reducer(action, _currentState);
        if (newState === _currentState) /* old state, state didnot change */ return;
        _currentState = newState;
        triggerCallbacks();
    }

    function createStore(reducer){
        if (!reducer || typeof reducer !== 'function')
            throw new Error('A reducer is manadatory to create the store');
        _reducer = reducer;
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})()