var React = require('react');
var Api = require('./utils/api.jsx');
var SLDSMenu = require('./SLDSMenu.jsx');
var Settings = React.createClass({
	getInitialState: function() {
		return {
			sldsVersion: this.props.sldsVersion,
			sldsType: this.props.sldsType
		}
	},

	onVersionChange: function(newVersion) {
		this.setState({
			sldsVersion: newVersion
		});
		this.props.onVersionChange(newVersion);
	},

	onTypeChange: function(newType) {
		this.setState({
			sldsType: newType
		});
		this.props.onVersionChange(newType);
	},


	render: function() {
		var inlineStyle = {
			marginBottom:'30px'
		};

		var downloadBtnStyle =  {
			backgroundColor: 'brown',
			borderColor:'white'
		};
		return (
			<div style={inlineStyle} className="slds-card slds-grid--align-center">
				<div className="slds-card__header">
					<div className="slds-text-heading--medium">
					Settings
				</div>
				<br/>
					SLDS Version:&nbsp; <SLDSMenu onClick={this.onVersionChange} default={this.state.sldsVersion} items={this.props.versions} />
					<br/>
					<br/>

					SLDS CSS:&nbsp;&nbsp;&nbsp; <SLDSMenu onClick={this.onTypeChange} default={this.state.sldsType} items={this.props.types} />

					<br/>
					<br/>
					<button style={downloadBtnStyle} onClick={this.props.downloadClickHdlr} className="slds-button slds-button--brand">Download Custom CSS
					  <svg aria-hidden="true"  className="slds-button__icon slds-button__icon--inverse slds-button__icon--right">
					    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#download"></use>
					  </svg>
					</button>
				</div>
			</div>
			)
	}
});

module.exports = Settings;