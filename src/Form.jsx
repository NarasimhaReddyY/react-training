import React, {Component} from 'react';
import SelectboxOne from './SelectboxOne.jsx';
import TextboxOne from './TextboxOne.jsx'

class Form extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		value: ''
  	}

  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
  	this.setState({value: event.target.value})
  }

  render() {
  	return (
  	  <div>
  	  	<h3>Select text to see value in textbox</h3>
	    <SelectboxOne value={this.state.value} onValueChange={this.handleChange}/>
  	    <TextboxOne value={this.state.value}/>
	  </div>
	)
  }
}

export default Form;