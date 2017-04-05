import React, {Component} from 'react';
import Element from "./Element.jsx";

class ElementList extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		var elements = this.props.list;
		var that = this;
		var renderElements = elements.map(function (element) { return <Element value={element} handleEvent={that.props.buttonEvent}/>});
		return (
			<div>	
		  		<h3>Unorder List</h3>
		    	<ul>{renderElements}</ul>
		  	</div>
		)
	}
}

export default ElementList;