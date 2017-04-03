import React, {Component} from 'react';

class TextboxOne extends Component {
	constructor (props) {
  	  super(props);
    }

	render () {
	  return (	
	  	<div>
	  		<input type="text" value={this.props.value}/>
  		</div>
	  )	
	}
}

export default TextboxOne;