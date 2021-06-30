import './App.css';
import React from 'react';
import logo from './asset/BL_logo_square_jpg.jpg'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      title: "Hello From BrigdeLabz"
    }
  }
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <img src={logo} alt="The BridgeLabz Logo" />
      </div>
    );
  }
}
export default App;
