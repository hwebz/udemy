import React from 'react';

var isAdmin = false;
var adminComponent = (Component) => {
	return class Admin extends Component {
		ComponentDidUpdate() {
			console.log('Admin component did update');

			if(super.componentDidUpdate) {
				super.componentDidUpdate();
			}
		}
		render() {
			if (isAdmin) {
				return (
					<div className="callout secondary">
						<p>Private admin information</p>
						<Component {...this.props} />
					</div>
				);
			} else {
				return null;
			}
		}
	}
};

var adminComponent = (Component) => {
	componentDidUpdate() {
		console.log('ComponentTwo did update');
	}
	return class Admin extends React.Component {
		render() {
			if (isAdmin) {
				return (
					<div className="callout secondary">
						<p>Private admin information</p>
						{super.render()}
					</div>
				);
			} else {
				return null;
			}
		}
	}
}

class ComponentTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.count
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		this.setState({
			count: this.state.count + 1
		});
	}
	render() {
		return (
			<div>
				<h3>Component One Using React.Component </h3>
				<p>Current count: {this.state.count}</p>
				// <button className="button" onClick={this.onClick.bind(this)}>Button Two</button>
				<button className="button" onClick={this.onClick}>Button Two</button>
				// <button className="button" onClick={() => {
				// 	this.setState({
				// 		count: this.state.count + 1
				// 	});
				// }}>Button Two</button>
			</div>
		)
	}
}

ComponentTwo.defaultProps = {
	count: 50
};

ComponentTwo.propTypes = {
	count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);