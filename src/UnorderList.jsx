import React, {Component} from 'react';

class UnorderList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let names = ["Name1", "Name2", "Name3"];
		let nameList = names.map((element) => { return <li>{element}</li>});

		return (
		  <div>
		  	<h3>Unorder List</h3>
		    <ul>
		      {nameList}
		    </ul>
		  </div>
		)
	}
}

export default UnorderList;