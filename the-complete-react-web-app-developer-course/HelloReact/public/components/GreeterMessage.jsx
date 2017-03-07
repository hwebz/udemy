var React = require('react');

var GreeterMessage = React.createClass({
	render: function() {
		let name = this.props.name,
			message = this.props.message;
		return (
			<div>
				<h1>Hello {name} from Component</h1>
				<p>{ message + '!!' }</p>
			</div>
		);
	}
});

module.exports = GreeterMessage;