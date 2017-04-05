import React, {Component} from 'react';
import Button from "./Button.jsx";

class Element extends Component {

	constructor (props) {
		super(props);

		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent(event) {
		this.props.handleEvent(event);
	}

	render() {
		return (
			<div>
				{ this.props.value ? 
					<li>
						{this.props.value} 
						<Button name="Edit" value={this.props.value} onClickEvent={this.handleEvent} /> - 
						<Button name="Delete" value={this.props.value} onClickEvent={this.handleEvent}/>
					</li> : 
					""
				}
			</div>
		)
	}
}

export default Element;