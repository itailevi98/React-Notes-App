import React from 'react';
import NoteComponent from '../NoteComponent/NoteComponent';
import './styles.css';

function NotesListComponent(props) {
    const { notes } = props;
    return (
        <div className="notes-list-container">
            {notes.map((note, index) => 
                <NoteComponent
                    key={note.id}
                    note={note}
                    index={index}
                    onDeleteNote={() => props.onDeleteNote(index)}
                    onUpdateNote={props.onUpdateNote}
                />
            )}
        </div>
    );
}

export default NotesListComponent;
