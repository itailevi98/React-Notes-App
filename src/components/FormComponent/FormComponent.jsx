import React from 'react';
import './styles.css';
import moment from 'moment';

class FormComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || "",
            note: props.note || "",
            createdDate: props.createdDate || undefined,
            updatedDate: undefined
        }
        this.updateForm = props.updateForm;
        this.index = props.index;
    }

    onTitleChange(value) {
        this.setState({title: value});
    }

    onNoteChange(value) {
        this.setState({note: value});
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.note === ""){
            return;
        }
        let date = moment().format('MMMM Do h:mm A');
        if (this.updateForm) {
            const newNote = {
                id: Date.now(),
                title: this.state.title,
                note: this.state.note, 
                createdDate: this.state.createdDate,
                updatedDate: date,
            }
            this.props.onUpdateNote(newNote, this.index);
        }
        else {
            date = moment().format('MMMM Do h:mm A');
            const note = {
                id: Date.now(),
                title: this.state.title,
                note: this.state.note, 
                createdDate: date,
                updatedDate: undefined,
            }
            this.props.onAddNote(note);
            this.setState({
                title: '',
                note: '', 
                createdDate: undefined,
                updatedDate: undefined,
            });
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={(event) => this.onTitleChange(event.target.value)}
                    />
                    <textarea 
                        name="note" 
                        id="note" 
                        cols="30" 
                        rows="10" 
                        placeholder="Your note..."
                        value={this.state.note}
                        onChange={(event) => this.onNoteChange(event.target.value)}>
                    </textarea>
                    {!this.state.createdDate && <button id="submit-button" type="submit" name="submitButton">Add</button>}
                    {this.state.createdDate && <button id="submit-button" type="submit" name="submitButton">Update</button>}
                </form>
            </div>
        );
    }
}

export default FormComponent;
