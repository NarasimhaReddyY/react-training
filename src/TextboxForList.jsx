import React, {Component} from "react";

class TextboxForList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: this.props.value
		}
		this.handleEvent = this.handleEvent.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleEvent(event) {
		this.setState({value: event.target.value });	 
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ value: nextProps.value })
	}

	handleKeyPress(event) {
		if(event.key === 'Enter') {
			this.props.handleEvent(event.target.value);
			event.target.value = "";
		}
	}

	render() {
		return (
			<div>
				<p>Enter text and press enter to add it to list</p>
				<div>
					{ this.state.value ? <input type="text" value={this.state.value} onChange={this.handleEvent} onKeyPress={this.handleKeyPress}/> : <input type="text" onChange={this.handleEvent} onKeyPress={this.handleKeyPress}/>}
				</div>
			</div>
		)
	}
}

export default TextboxForList;