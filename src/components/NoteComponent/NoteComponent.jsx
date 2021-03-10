import React from 'react';
import './styles.css';

function NoteComponent(props){
    const { title, note, date } = props.note;
    return (
        <li className="note-item">
            <div id="date">
                <span>{date}</span>
                <button id="delete-button" onClick={props.onDeleteNote}>&#10006;</button>
            </div>
            {title !== "" && (
                <div>
                    <h3>{title}</h3>
                    <span id="note">{note}</span>
                </div>
            )}
            {title === "" && (
                <div>
                    <span id="note">{note}</span>
                    <h3>{title}</h3>
                </div>
            )}
        </li>
    );
}

export default NoteComponent;
