import React, {Component} from 'react';
import TextboxOne from './TextboxOne.jsx';
import RadioButton from './RadioButton.jsx';

class RadioVsTextBox extends Component {

	constructor (props) {
		super(props);
		this.state = {
			value: ""
		}

		this.handleChange  = this.handleChange.bind(this);
		this.handleInput   = this.handleInput.bind(this); 
	}

	handleChange (properties) {
		this.setState({
			value: properties.value
		})
	}

	handleInput (event) {
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return (
			<div>
				<p>Check a radio button to display it's value, but not vice versa</p>
				<RadioButton name="radio" value="Value one" handleChange={this.handleChange}/>Value one<br />
				<RadioButton name="radio" value="Value Two" handleChange={this.handleChange}/>Value Two<br />
				<RadioButton name="radio" value="Value Three" handleChange={this.handleChange}/>Value Three<br />
				<br/>
				<TextboxOne value={this.state.value} handleInput={this.handleInput}/>
			</div>
		)
	}
}

export default RadioVsTextBox;