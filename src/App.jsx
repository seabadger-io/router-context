import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar title="PageTitle" />
        </header>
      </div>
    );
  }
}

export default App;
