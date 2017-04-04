import React, {Component} from 'react';
import RadioButton from './RadioButton.jsx'

class RadioButtons extends Component {

	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			name: "",
			id: "",
			number: "",
			extra: ""
		}
	}

	handleChange (properties) {
		this.setState({
			name: properties.name,
			id: properties.id,
			number: properties.number,
			extra: properties.extra
		});

	}

	render() {
		return (
			<div>
				<RadioButton name="button" id="id1" number="number1" handleChange={this.handleChange}/>Button1<br />
				<RadioButton name="button" id="id2" number="number2" extra="this is extra" handleChange={this.handleChange}/>Button2<br />
				<RadioButton name="button" id="id3" number="number3" extra="this is also extra" handleChange={this.handleChange}/>Button3<br />
				<RadioButton name="button" id="id4" number="number4" handleChange={this.handleChange}/>Button4<br />

				<p>Component has the following things inside: <br />
					  name: {this.state.name} <br />
					  id: {this.state.id} <br />
					  number: {this.state.number} <br />
					  {this.state.extra ? <p>extra: {this.state.extra} </p> : ""}
				</p>
			</div>
		)
	}
}

export default RadioButtons;