var React = require('react');
var ReactDOM = require('react-dom');
var ThemeSelector = require('./ThemeSelector.jsx');
var SLDSTemplate = require('./SLDSTemplate.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<header role="banner">
					<h1 className="slds-text-heading--label slds-m-bottom--small">SLDS Brand Generator</h1>
				</header>
				<div className="slds-grid slds-wrap">
					<ThemeSelector/>
					<SLDSTemplate />
				</div>
			</div>
			);
	}
});

ReactDOM.render(<App />, document.querySelector('.container'));
