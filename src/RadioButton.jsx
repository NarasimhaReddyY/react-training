import React, {Component} from 'react';

//this component is reused in example 7A to 7D
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
			<input type="radio" value={this.props.value} name={this.props.name} id={this.props.id} number={this.props.number} onChange={this.onSelect}/>
		)
	}
}

export default RadioButton;