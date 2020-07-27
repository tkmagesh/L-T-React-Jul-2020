import bugApi from "../services/bugApi";
function removeClosed(bugs) {
    return function(dispatch){
        bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => {
                bugApi.remove(closedBug)
                    .then(() => {
                        const action = { type: 'REMOVE_BUG', payload: closedBug};
                        dispatch(action);
                    })
            });
    };
    
}

export default removeClosed;