import React from 'react';
import NoteComponent from '../NoteComponent/NoteComponent';
import './styles.css';

function NotesListComponent(props) {
    const { notes } = props;
    return (
        <div className="notes-list-container">
            <ul className="notes-list">
                {notes.map((note, index) => 
                    <NoteComponent
                        key={note.id}
                        note={note}
                        onDeleteNote={() => props.onDeleteNote(index)}
                    />
                )}
            </ul>
        </div>
        
    );
}

export default NotesListComponent;
