import bugApi from "../services/bugApi";
//let prevBugId = 0;

function addNew(newBugName){
    return function(dispatch){
        const newBugData = {
            id: 0,
            name: newBugName,
            isClosed: false,
            createdAt: new Date()
        };
        bugApi
            .save(newBugData)
            .then(newBug => {
                const action = { type: 'ADD_NEW_BUG', payload: newBug };
                dispatch(action);
            })
        
    }
}
export default addNew;