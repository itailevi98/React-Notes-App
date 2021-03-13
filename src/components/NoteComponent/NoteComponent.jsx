import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';
import FormComponent from '../FormComponent/FormComponent';

Modal.setAppElement('#root');

function NoteComponent(props){
    const { title, note, createdDate, updatedDate } = props.note;
    const index = props.index;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <div className="note-item" onClick={() => setModalIsOpen(true)}>
                <button id="delete-button" onClick={props.onDeleteNote}>&#10006;</button>
                {title !== "" && (
                    <div>
                        <h3>{title}</h3>
                        <p id="note">{note}</p>
                    </div>
                )}
                {title === "" && (
                    <div>
                        <p id="note">{note}</p>
                        <h3>{title}</h3>
                    </div>
                )}
                <div id="date">
                    <p>Created at: {createdDate}</p>
                    {updatedDate && <p>Updated at: {updatedDate}</p>}
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} id="modal">
                <FormComponent 
                    note={note} 
                    title={title} 
                    updateForm={true} 
                    createdDate={createdDate} 
                    index={index} 
                    onUpdateNote={props.onUpdateNote} 
                />
            </Modal>
        </div>
    );
}

export default NoteComponent;
