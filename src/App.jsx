import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
      	<h3>Welcome to React App</h3>
        <ul>
          <li><Link to="/textbox">Textbox</Link></li>
          <li><Link to="/selectbox">Selectbox</Link></li>
          <li><Link to="/selected-text">Display Text</Link></li>
          <li><Link to="/counter-app">Counter App</Link></li>
          <li><Link to="/unordered-list">Unorder List</Link></li>
          <li><Link to="/repo/narasimha/react-training">Current Repo</Link></li>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default App;
	