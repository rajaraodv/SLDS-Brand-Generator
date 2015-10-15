var React = require('react');

module.exports = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		value: ''
	// 	}
	// },
	changeHdlr: function(e) {
		//this.setState({value: e.target.value});
		this.props.filterChanged(e.target.value);
	},

	render: function() {
		return (
			<div>
				Filter Tokens By Name: <input className="slds-input" type='text' onChange={this.changeHdlr} placeholder='e.g. button or brand or background'/>
				<br/>
				<br/>
			</div>
		)
	}
});