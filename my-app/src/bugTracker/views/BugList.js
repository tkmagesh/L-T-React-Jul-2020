import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
    const bugItems = bugs.map(bug => (
        <BugItem key={bug.id} bug={bug} toggle={toggle} remove={remove} />
    ));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed()} />
        </section>
    )
}

export default BugList;