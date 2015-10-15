var React = require('react');
var SLDSMenuItem = require('./SLDSMenuItem.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			value: this.props.default
		}
	},
	onClick: function(value) {
		this.setState({value: value});
		this.props.onClick(this.state.value);
	},
	render: function() {
 		var items = this.props.items.map(function(v, index) {
 			return  <SLDSMenuItem key={v + index} onClick={this.onClick} value={v}/>
 		}.bind(this));

 		return (
			 <div className="slds-dropdown-trigger">
			  <button className="slds-button  slds-button--brand" aria-haspopup="true">
			    {this.state.value}&nbsp;
			    <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse">
			      <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			    </svg>
			  </button>
			  <div className="slds-dropdown slds-dropdown--down slds-dropdown--menu">
			    <ul className="slds-dropdown__list" role="menu">
			    {items}
			    </ul>
			  </div>
			</div>
 		)
 	}
});