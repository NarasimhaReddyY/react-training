import React, {Component} from 'react';
import Button from './Button.jsx';
import TextboxOne from './TextboxOne.jsx';	

class Counter extends Component {

	constructor (props) {
		super(props);

		this.state = {
			value: 0
		}

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement () {
		this.setState(prevState => ({value: prevState.value + 1 }));
	}

	handleDecrement () {
		this.setState(prevState => ({value: prevState.value - 1 }));
	}



	render() {
		return (
		  <div>
		  	<h3>Counter App</h3>
			<Button name="+" onClickEvent={this.handleIncrement}/>
			<TextboxOne value={this.state.value}/>
			<Button name="-" onClickEvent={this.handleDecrement}/>
		  </div>
		)
	}
}

export default Counter;