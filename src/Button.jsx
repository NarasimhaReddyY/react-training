import React, {Component} from 'react';

class 	Button extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	  return (
	  	<button type="button" name={this.props.name} value={this.props.value} onClick={this.props.onClickEvent}>{this.props.name}</button>
  	  )
	}
}

export default Button;