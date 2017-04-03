import React, {Component} from 'react';

class Selectbox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		this.setState({value: event.target.value})
	}

	handleSubmit (event) {
		alert("you have submited: " + this.state.value)
	}

	render() {
	  return (
	    <div>
 	      <h3>Select a country from list</h3>
 	       <select onChange={this.handleChange} value={this.state.value}>
 	        <option value="">Select a Country</option>
 	        <option value="India">India</option>
 	        <option value="Sri Lanka">Sri Lanka</option>
 	        <option value="Bangladesh">Bangladesh</option>
 	        <option value="Pakistan">Pakistan</option>
 	        <option value="Chaina">Chaina</option>
 	      </select>

	      <p> you have selected: {this.state.value} </p>
	    </div>
	  )
	}
}

export default Selectbox;