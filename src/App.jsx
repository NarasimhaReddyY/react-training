import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
      	<h3>Welcome to React App</h3>
        <ol>
          <li><Link to="/textbox">Textbox</Link></li>
          <li><Link to="/selectbox">Selectbox</Link></li>
          <li><Link to="/selected-text">Display Text</Link></li>
          <li><Link to="/counter-app">Counter App</Link></li>
          <li><Link to="/unordered-list">Unorder List</Link></li>
          <li><Link to="/repo/narasimha/react-training">Current Repo</Link></li>
          <li><Link to="/radio-buttons">Radio Buttons</Link></li>
          <li>Auto sync between components           
              <ul>
                <li>
                  <Link to="/radio-select">Radio vs Select Box</Link>
                </li>
              </ul>
          </li>
          {this.props.children}
        </ol>
      </div>
    );
  }
}

export default App;
	