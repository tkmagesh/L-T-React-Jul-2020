import bugApi from "../services/bugApi";

function toggle(bugToToggle) {
    const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    return function(dispatch){
        bugApi
            .save(toggledBugData)
            .then(toggledBug => {
                const action = { type: 'REPLACE_BUG', payload: toggledBug };
                dispatch(action);
            });
    }
}

export default toggle;