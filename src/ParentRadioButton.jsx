import React, {Component} from 'react';
import SelectboxOne from './SelectboxOne.jsx';
import RadioButton from './RadioButton.jsx';

class ParentRadioButton extends Component {

	constructor (props) {
		super(props);
		this.state = {
			value: ""
		}

		this.handleChange  = this.handleChange.bind(this);
		this.onValueChange = this.onValueChange.bind(this); 
	}

	handleChange (properties) {
		this.setState({
			value: properties.value
		})
	}

	onValueChange (event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<div>
				<p>Check a radio button to auto select it's value, but not vice versa</p>
				<RadioButton name="radio" value="Option1" handleChange={this.handleChange}/>Option1<br />
				<RadioButton name="radio" value="Option2" handleChange={this.handleChange}/>Option2<br />
				<RadioButton name="radio" value="Option3" handleChange={this.handleChange}/>Option3<br />
				<br/>
				<SelectboxOne value={this.state.value} onValueChange={this.onValueChange}/>
			</div>
		)
	}
}

export default ParentRadioButton;