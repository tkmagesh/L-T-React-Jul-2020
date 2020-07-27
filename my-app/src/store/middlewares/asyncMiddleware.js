
const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch);
    }
    next(action);
}

export default asyncMiddleware;