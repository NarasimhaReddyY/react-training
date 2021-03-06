import React, {Component} from 'react';
import TextboxForList from "./TextboxForList.jsx";
import ElementList from "./ElementList.jsx";
class List extends Component {

	constructor (props) {
		super(props);
		this.state = {
			value: "",
			list: []
		}
		this.handleEvent = this.handleEvent.bind(this);
		this.buttonEvent = this.buttonEvent.bind(this);
	}



	handleEvent(newValue) {
		var elements = this.state.list;
		var currentValue = this.state.value;
		var valueReplaced = false;

		this.setState({value: ""});

		if (elements.length > 0) {
			for(var i=0; i < elements.length; i++) {
				if (!newValue.startsWith(elements[i])) {
					continue; 			
				} else {
					elements[i] = newValue;
					valueReplaced = !valueReplaced;
					break;
				}
			}

			if (!valueReplaced) {
				elements.push(newValue);
			}

		} else {
			elements.push(newValue);

		}

		this.setState({list: elements});
	}

	buttonEvent(event) {
		if (event.target.name === "Edit") {
			this.setState({value: event.target.value});		
		} else if (event.target.name === "Delete") {
			var elements = this.state.list;

			for(var i=0; i < elements.length; i++) {
				if (elements[i] === event.target.value) {
					elements.splice(i, 1);
					break;
				}
			}

			this.setState({list: elements});
		}
	}

	render() {
		return (
			<div>
				<TextboxForList value={this.state.value} handleEvent={this.handleEvent}/>
				<ElementList list={this.state.list} buttonEvent={this.buttonEvent}/>
			</div>
		)
	}
}

export default List;