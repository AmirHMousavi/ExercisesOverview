import React, {Component} from 'react';
import logo from './logo.svg';
import NavBar from './nav-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <div>
          <NavBar/> 
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
