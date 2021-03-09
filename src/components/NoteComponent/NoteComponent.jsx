import React from 'react';
import './styles.css';

function NoteComponent(props){
    const { note, date } = props.note;
    return (
        <li className="note-item">
            <div id="date">
                <span>{date}</span>
                <button id="delete-button" onClick={props.onDeleteNote}>&#10006;</button>
            </div>
            <span id="note">{note}</span>
        </li>
    );
}

export default NoteComponent;
