import React, {Component} from 'react';

class SelectboxOne extends Component {
  constructor (props) {
  	super(props);
  }

  render(){
  	return (
  	  <select value={this.props.value} onChange={this.props.onValueChange}>
  	    <option value=""> Select Value </option>
  	  	<option value="Option1"> Option One </option>
  	    <option value="Option2"> Option Two </option>
  	    <option value="Option3"> Option Three </option>
  	  </select>
	)
  }
}

export default SelectboxOne;