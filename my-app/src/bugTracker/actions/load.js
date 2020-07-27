import bugApi from "../services/bugApi";

/* 
function getLocalBugs(){
    var bugs = [
        {id : 1, name: 'Bug - 1', isClosed: false, createdAt : new Date()},
        { id: 2, name: 'Bug - 2', isClosed: false, createdAt : new Date() },
        { id: 3, name: 'Bug - 3', isClosed: false, createdAt : new Date() },
    ];
    return bugs;
}
 */

function load(){
    //getLocalBugs - synchronously returns data
    /*
    const bugs = getLocalBugs();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action; */

    // getServerBugs - asynchronous function
    return function(dispatch){
        /* 
        const p = getServerBugs();
        p.then(function(bugs){
            const action = { type: 'INIT_BUGS', payload: bugs };
            dispatch(action);
        });  
        */

        /* getServerBugs()
            .then(bugs => {
                const action = { type: 'INIT_BUGS', payload: bugs };
                dispatch(action)
            }); */

        bugApi
            .getAll()
            .then(bugs => {
                const action = { type: 'INIT_BUGS', payload: bugs };
                dispatch(action);
            });
    };
}

export default load;