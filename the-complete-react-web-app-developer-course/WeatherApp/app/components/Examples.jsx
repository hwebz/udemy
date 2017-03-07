var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h1>Examples component</h1>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few examples locations to try out:</p>
			<ol>
				<li><Link to='/?location=Philadelphia'>Philadelphia</Link></li>
				<li><Link to='/?location=Rio'>Rio</Link></li>
			</ol>
		</div>
	);
};

module.exports = Examples;