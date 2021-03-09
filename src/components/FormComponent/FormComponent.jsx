import React from 'react';
import './styles.css';
import moment from 'moment';

class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note: "",
            date: undefined,
        }
    }

    onNoteChange(value){
        let date = moment().format('MMMM Do h:mm A');
        this.setState({note: value, date: date});
    }

    onSubmit(event){
        event.preventDefault();
        const note = {
            id: Date.now(),
            note: this.state.note, 
            date: this.state.date,
        }
        this.props.onAddNote(note);
        this.setState({
            note: '', 
            date: undefined,
        });
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <textarea 
                        name="note" 
                        id="note" 
                        cols="30" 
                        rows="10" 
                        placeholder="Your note..."
                        value={this.state.note}
                        onChange={(event) => this.onNoteChange(event.target.value)}></textarea>
                    <button id="submit-button" type="submit" name="submitButton">Add</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;
