var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter'); // Config in webpack.config.js

var firstName = "JimiDARK"

ReactDOM.render(
	<Greeter name={firstName} message="Message from prop!" />,
	document.getElementById('app')
);

ReactDOM.render(
	<Greeter />,
	document.getElementById('other')
)