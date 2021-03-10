import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

Modal.setAppElement('#root');

function NoteComponent(props){
    const { title, note, date } = props.note;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <li>
            <div className="note-item" onClick={() => setModalIsOpen(true)}>
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
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} id="modal">
                <div id="modal-note-item">
                    <div id="date">
                        <span>{date}</span>
                        <button id="delete-button" onClick={() => setModalIsOpen(false)}>&#10006;</button>
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
                </div>
                
            </Modal>
                
        </li>
    );
}

export default NoteComponent;
