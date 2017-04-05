import React, {Component} from "react";

class TextboxForList extends Component {
	constructor (props) {
		super(props);
		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent(event) {
		if(event.key === 'Enter') {
			this.props.handleEvent(event.target.value);
			event.target.value = "";
		} else {
			// i should handle here
		}
 
	}

	//bellow am using ternary operater, because
	//there are two cases
	//1. text box with a predefined value(getting through props) - to edit exising element
	//2. text box with no value- to add a new value to element
	render() {
		return (
			<div>
				<p>Enter text and press enter to add it to list</p>
				<div>
					{this.props.value ? <input type="text" value={this.props.value} onKeyPress={this.handleEvent}/> : <input type="text" onKeyPress={this.handleEvent}/>}
				</div>
			</div>
		)
	}
}

export default TextboxForList;