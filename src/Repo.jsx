import React, {Component} from 'react';

class Repo extends Component {
	render() {
		return <p> <b>{this.props.params.userName}</b> you are in <b>{this.props.params.repoName}</b></p>
	}
}

export default Repo;