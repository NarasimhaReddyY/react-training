import React, {Component} from 'react';
	
class Textbox extends Component {

  constructor(props) {
	super(props);
	this.state = {
	  value: ''
	}

	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.setState({value: event.target.value })
  }


  render() {
    return (
      <div>
      	<h3>Enter Text</h3>
      	<input type="text" 
      		   placeholder="Enter Value" 
      		   value={this.state.value}
      		   onChange={this.handleChange} />
      </div>	
    );
  }
}

export default Textbox;
	