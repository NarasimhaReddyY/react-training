import React, {Component} from 'react';

class Button extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	  return (
	  	<button type="button" onClick={this.props.onClickEvent}>{this.props.name}</button>
  	  )
	}
}

export default Button;