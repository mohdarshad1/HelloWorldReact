import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//       <hi> Hello form Bridgelabz </hi>
//       </div>
//     );
//    }
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Hello From BridgeLabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    ); 
  }
}
export default App;
