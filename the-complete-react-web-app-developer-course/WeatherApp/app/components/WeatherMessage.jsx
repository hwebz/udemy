var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function() {
// 		let {temp, location} = this.props;

// 		return (
// 			<p>It's {temp} in {location}</p>
// 		);
// 	}
// });

// var WeatherMessage = (props) => {
// 	let {temp, location} = props;
// 	return (
// 		<p>It's {temp} in {location}</p>
// 	);
// }

var WeatherMessage = ({temp, location}) => {
	return (
		<h3 className="text-center">It's {temp} in {location}</h3>
	);
}

module.exports = WeatherMessage;