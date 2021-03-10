import React from 'react';
import './styles.css';
import moment from 'moment';

class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            note: "",
            date: undefined,
        }
    }

    onTitleChange(value){
        this.setState({title: value});
    }

    onNoteChange(value){
        let date = moment().format('MMMM Do h:mm A');
        this.setState({note: value, date: date});
    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.note === ""){
            return;
        }
        const note = {
            id: Date.now(),
            title: this.state.title,
            note: this.state.note, 
            date: this.state.date,
        }
        this.props.onAddNote(note);
        this.setState({
            title: '',
            note: '', 
            date: undefined,
        });
    }

    render(){
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
                    <button id="submit-button" type="submit" name="submitButton">Add</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;
