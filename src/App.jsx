import React, {Component} from 'react';
import Textbox from './Textbox.jsx';
import Selectbox from './Selectbox.jsx'
import Form from './Form.jsx'
import Counter from './Counter.jsx'
import UnorderList from './UnorderList.jsx'
	
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
        <br/>
        <UnorderList />
      </div>
    );
  }
}

export default App;
	