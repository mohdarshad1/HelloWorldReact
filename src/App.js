import React from 'react';
import './App.css';
import logo from './asset/BL_logo_square_jpg.jpg';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else{
      this.setState({nameError: 'Name is Incorrect'})
    }

  }

  render() {
    return (
      <div>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick} 
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
      <div>
        <input class="text-box" onChange={this.onNameChange} /> 
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
      <p>At BridgeLabz, we're a techie community of</p>
      <ul>
      <li>technologists</li>
      <li>thinkers</li>
      <li>builders</li>
      </ul>
      <p>Working together to keep the Tech Employability of Engineers alive and accessible,
      so Tech Companies worldwide can get contributors and creators for Technology Solutions.
      </p>

      <p>To know about us, visit <a href="https://www.bridgelabz.com/">Bridge Labz</a>
      to learn evem more about our mission i.e. <strong> Employability to all</strong>.</p>
      </div>
      </div>
    );
  }
}


export default App;