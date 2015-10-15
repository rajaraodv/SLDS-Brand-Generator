var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
			<div className="slds-tooltip slds-nubbin--right" role="tooltip">
			  <div className="slds-tooltip__content">
			    <div className="slds-tooltip__body">This is Tooltip. Sit nulla est ex deserunt exercitation anim occaecat. Nostrud </div>
			  </div>
			</div>
			<br/>
			<div className="slds-popover slds-nubbin--right" role="dialog">
			  <div className="slds-popover__content">
			    <div className="slds-popover__header">
			      <p className="slds-text-heading--small">Popover Heading</p>
			    </div>
			    <div className="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud <a href="#">ullamco</a> deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
			  </div>
			</div>
			</div>
		)
	}
});