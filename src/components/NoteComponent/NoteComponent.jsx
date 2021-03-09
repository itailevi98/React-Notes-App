import React from 'react';
import './styles.css';

function NoteComponent(props){
    const { note } = props.note;
    return (
        <li className="note-item">
            <span>{note}</span>
        </li>
    );
}

export default NoteComponent;
