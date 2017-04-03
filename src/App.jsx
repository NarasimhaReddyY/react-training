import React, {Component} from 'react';
import Textbox from './Textbox.jsx';
import Selectbox from './Selectbox.jsx'
import Form from './Form.jsx'
import Counter from './Counter.jsx'
	
class App extends Component {
  render() {
    return (
      <div>
      	<Textbox />
        <br/>
      	<Selectbox />	
        <br/>
        <Form />
        <br/>
        <Counter />
      </div>
    );
  }
}

export default App;
	