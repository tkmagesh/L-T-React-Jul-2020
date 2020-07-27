import axios from 'axios';

function getServerBugs() {
    return axios.get('http://localhost:3030/bugs')
        .then(response => response.data);
}

function getLocalBugs(){
    var bugs = [
        {id : 1, name: 'Bug - 1', isClosed: false, createdAt : new Date()},
        { id: 2, name: 'Bug - 2', isClosed: false, createdAt : new Date() },
        { id: 3, name: 'Bug - 3', isClosed: false, createdAt : new Date() },
    ];
    return bugs;
}

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload: bugs };
    return action;
}

export default load;