import bugApi from "../services/bugApi";

function removeClosed() {

    return function(dispatch, getState){
        const bugs = getState().bugsData;
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