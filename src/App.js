import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import exercisesOverviewPage from './exercises-overview/exercises-overview-page';
import NavBar from './nav-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
