import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Reddit</h1>
        </header>
				<h3>Edit src/App.js to get started!</h3>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
