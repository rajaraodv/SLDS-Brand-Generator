var React = require('react');
var Api = require('./utils/api.jsx');
var TokenItem = require('./TokenItem.jsx');

var TokensList = React.createClass({
	getInitialState: function() {
		return {
			tokens: {}
		}
	},
	componentWillMount: function() {
		Api.get('/tokens.json')
		.then(function(result){
			this.setState({tokens: result});
		}.bind(this));
	},

	renderEachTokenType: function(tokenType, tokenObj) {
		var tokenNames = Object.keys(tokenObj);

		return tokenNames.map(function(tokenName) {
				if(tokenName.toLowerCase().indexOf(this.props.tokenFilterVal) == -1) {
					return;
				}
				var tokenValue = tokenObj[tokenName];
				if(this.props.tokensToOverride[tokenName]){
					tokenValue = this.props.tokensToOverride[tokenName]
				}

				return (
					<TokenItem 
						handleFocus={this.props.handleFocus} 
						key={tokenName} 
						onTokenChange={this.props.onTokenChange} 
						tokenType={tokenType} 
						tokenName={tokenName} 
						tokenValue={tokenValue} 
						colorPickerTokenName={this.props.colorPickerTokenName}
						colorPickerColor={this.props.colorPickerColor}
					/>
				)

		}.bind(this))
	},

	renderAllTokens: function() {
		var tokenTypes = Object.keys(this.state.tokens);
		if(tokenTypes.length == 0) {
			return;
		}
		return tokenTypes.map(function(tokenType){
			return (
			<section key={tokenType}>
				<div className="slds-text-heading--small slds-page-header">
					{tokenType}
				</div>
				<ul>
				{this.renderEachTokenType(tokenType, this.state.tokens[tokenType])}
				</ul>
			</section>
		   )
		}.bind(this));
	},
	render: function() {
		return (
		<div>
			{this.renderAllTokens()}
		</div>
		)
	}
});

module.exports = TokensList;