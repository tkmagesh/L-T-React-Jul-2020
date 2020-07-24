const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('Before');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
}

export default loggerMiddleware;