import React, { Component } from 'react';
import './css/App.css';
import SuggestionList from './components/SuggestionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JetPat - Search List</h1>
        </header>
        <p className="App-intro">
          Building an auto suggestion list for a text input. 
        </p>
        <SuggestionList></SuggestionList>
      </div>
    );
  }
}

export default App;
