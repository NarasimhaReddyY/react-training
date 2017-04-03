import React, {Component} from 'react';
import Textbox from './Textbox.jsx';
import Selectbox from './Selectbox.jsx'
	
class App extends Component {
  render() {
    return (
      <div> 
      	<Textbox />
      	<Selectbox />	
  	  </div>
    );
  }
}

export default App;
	