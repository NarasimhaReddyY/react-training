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
		  		<p>Note: While editing you can add continuation to existing element but can't replace.</p>
		    	<ul>{renderElements}</ul>
		  	</div>
		)
	}
}

export default ElementList;