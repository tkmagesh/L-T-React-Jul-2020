let prevBugId = 0;

function addNew(newBugName){
    const newBug = {
        id: ++prevBugId,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    return action;
}
export default addNew;