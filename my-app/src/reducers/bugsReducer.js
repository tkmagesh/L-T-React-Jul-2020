function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newBug = action.payload;
        const newState = [...currentState, newBug];
        return newState;
    } else if (action.type === 'REPLACE_BUG') {
        const bugToReplace = action.payload;
        const newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        return newState;
    } else if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    } else if (action.type === 'INIT_BUGS') {
        const newState = [...action.payload];
        return newState;
    }

    return currentState;
}
export default bugsReducer;