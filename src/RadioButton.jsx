import React, {Component} from 'react';

class RadioButton extends Component {

	constructor (props) {
		super(props);
		this.onSelect = this.onSelect.bind(this); 
	}

	onSelect (event) {
		this.props.handleChange(this.props);
	}

	render() {
		return (
			<input type="radio" name={this.props.name} id={this.props.id} number={this.props.number} onChange={this.onSelect}/>
		)
	}
}

export default RadioButton;