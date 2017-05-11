import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){ 
    // props is smth we pass in and use it as a functional component
    super(props);
    this.state = {show: true};
    setInterval(() => {
      this.setState({show: !this.state.show});
    },1000);
  }
  render() { // allways needs render method in React
    const txt = this.state.show ? this.props.name: "";
    // only use state if really needed
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>Hello {txt}</h2>
        </div>
      </div>
    );
  }
}

export default App;
