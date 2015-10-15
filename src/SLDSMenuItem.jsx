var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			value: this.props.value
		}
	},
	onClick: function() {
		this.props.onClick(this.state.value)
	},
	render: function() {
 			return  <li onClick={this.onClick} className="slds-dropdown__item"><a className="slds-truncate" role="menuitem">{this.props.value}</a></li>
	}
});