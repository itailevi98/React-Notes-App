import './App.css';
import React from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import NotesListComponent from './components/NotesListComponent/NotesListComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  }

  addNote(note){
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    });
  }

  render(){
    return (
      <div className="App">
        <FormComponent 
          onAddNote={(note) => this.addNote(note)}
        />
        <NotesListComponent 
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
        />
      </div>
    );
  }

}

export default App;
