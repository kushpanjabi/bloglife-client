import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const entries = props.entries;
    const listEntries = entries.map(entry => {
        return <div className="list" key={entry.key}>
            <p>{entry.text}
            <span>
                <FontAwesomeIcon className="faicons" icon='trash'
                onClick={() => props.deleteEntry(entry.key)} />
            </span>
            </p>

        </div>
    })
    return(
        <div>
            <FlipMove duration={250} easing="ease-in-out">
                {listEntries}
            </FlipMove>
            </div>
    )
}

export default ListItems;
