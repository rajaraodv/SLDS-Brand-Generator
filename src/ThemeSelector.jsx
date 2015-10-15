var React = require('react');
var Settings = require('./Settings.jsx');
var TokensList = require('./TokensList.jsx');
var Api  = require('./utils/api.jsx');
var ColorPicker = require('react-color');
var FilterTokens = require('./FilterTokens.jsx');



var ThemeSelector = React.createClass({
	getInitialState: function() {
		return  {
			tokensToOverride: {},
			versions: ['0.8.0','0.9.1', '0.9.2'],
			sldsVersion: '0.9.2',
			sldsType: 'Lightning',
			types: ['Lightning', 'Visualforce', 'Scoped'],
			displayColorPicker: false,
			colorPickerTop: 0,
			colorPickerLeft: 0,
			colorPickerColor: '',
			colorPickerTokenName: '',
			colorPickerOpenWithColor: '',
			tokenFilterVal: ''
		};
	},

	loadCSS: function(download) {
		var url = document.location.hostname.indexOf('localhost') >=0 ? 'http://localhost:3000/override': '/override';
		
		var body = {
			designFile: 'index-ltng.scss',
			tokensToOverride: this.state.tokensToOverride,
			sldsVersion: this.state.sldsVersion
		};

		Api.post(url, body).then(function(result) {
			var style = document.getElementById('customCSSPlaceHolder');
			// var head = document.head || document.getElementsByTagName('head')[0];
			// var style = document.createElement('style');

			// style.type = 'text/css';
			if (style.styleSheet){
				style.styleSheet.cssText = result.css;
			} else {
				style.appendChild(document.createTextNode(result.css));
			}

			//head.appendChild(style);
		})
	},
	downloadFile: function() {
		var url = document.location.hostname.indexOf('localhost') >=0 ? 'http://localhost:3000/download': '/download';
		var body = {
			designFile: 'index-ltng.scss',
			tokensToOverride: this.state.tokensToOverride,
			sldsVersion: this.state.sldsVersion
		};

		Api.download(url, body).then(function(result) {
			var url = document.location.hostname.indexOf('localhost') >=0 ? 'http://localhost:3000'+result.file : result.file;
			document.getElementById('downloadIframe').src = url;
		})
	},

	componentWillMount: function() {
		this.loadCSS();
	},

	onTokenChange: function(tokenObj) {
		var to = this.state.tokensToOverride;
		to[tokenObj.name] = tokenObj.value;
		this.setState({tokensToOverride: to});
		this.loadCSS();
	},

	onVersionChange: function(newVersion) {
		this.setState({sldsVersion: newVersion});
		this.loadCSS();
	},
	onTypeChange: function(newType) {
		this.setState({sldsType: newType});
		this.loadCSS();
	},

	handleTokenFieldFocus: function(obj) {	
		this.setState({
			displayColorPicker: !this.state.displayColorPicker,
			colorPickerTop: obj.top,
			colorPickerLeft: obj.left,
			colorPickerTokenName: obj.tokenName,
			colorPickerOpenWithColor: obj.currentTokenColor
		});
  	},

  	handleColorPickerClose: function(obj) {
  		var newColor = '#'+obj.hex;
  		this.setState({colorPickerColor: newColor, displayColorPicker: !this.state.displayColorPicker});
  		this.onTokenChange({
  			name: this.state.colorPickerTokenName,
  			value: newColor
  		})
  	},

  	handleFilterChanged: function(newFilterVal) {
  		this.setState({tokenFilterVal: newFilterVal});
  	},

	render: function() {
		var popupPosition = {
	      position: 'absolute',
	      top: this.state.colorPickerTop + 'px',
	      left: this.state.colorPickerLeft + 'px',
	    };


		return (
			<div className="slds-col slds-size--3-of-12 slds-medium-size--1-of-6 slds-large-size--3-of-12 slds-scrollable--y">
				<ColorPicker 
					type="chrome"
					color= {this.state.colorPickerOpenWithColor}  
					positionCSS={ popupPosition } 
					display={ this.state.displayColorPicker}
					onClose={ this.handleColorPickerClose }
				/>
				<Settings 
					downloadClickHdlr={this.downloadFile}
					onTokenChange={this.onTokenChange} 
					onVersionChange={this.onVersionChange} 
					versions={this.state.versions} 
					sldsVersion={this.state.sldsVersion}
					types={this.state.types} 
					sldsType={this.state.sldsType}
					onTypeChange={this.onTypeChange}
				/>
				<FilterTokens filterChanged={this.handleFilterChanged} />
				<TokensList 
					onTokenChange={this.onTokenChange} 
					handleFocus={this.handleTokenFieldFocus}
					colorPickerTokenName={this.state.colorPickerTokenName}
					colorPickerColor={this.state.colorPickerColor}
					tokenFilterVal={this.state.tokenFilterVal}
					tokensToOverride={this.state.tokensToOverride}
				/>
			</div>
			)
	}
});

module.exports = ThemeSelector;