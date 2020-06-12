import React from 'react';
import './Home.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Timestamp from 'react-timestamp';


library.add(faTrash);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries:[],
      currentEntry:{
        text: '',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentEntry:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addEntry(e) {
    e.preventDefault();
    const newEntry = this.state.currentEntry;
    console.log(newEntry);
    if(newEntry.text !== '') {
      const newEntries =[...this.state.entries, newEntry]
      this.setState({
        entries: newEntries,
        currentEntry:{
          text:'',
          key:''
        } 
      })
    }
  }

  deleteEntry(key){
    const filteredEntries = this.state.entries.filter(entry => entry.key!==key);
    this.setState({
      entries: filteredEntries
    })
  }
  render() {
    return (
      <div>
        <h1>Blog Life</h1>
        <span className="timestamp">Currently: <Timestamp options={{ includeDay: true }} /></span>
        <div className='App'>
          <header>
            <form id="blog-entry-form" onSubmit={this.addEntry}>
              <input
              type="text" 
              placeholder="What did you do today?" 
              value={this.state.currentEntry.text}
              onChange={this.handleInput} />
              <button type="submit">Add</button>
            </form>
          </header>
          <ListItems 
          entries={this.state.entries} 
          deleteEntry={this.deleteEntry}
          />
        </div>
      </div>
    );
  }
}

export default Home;
