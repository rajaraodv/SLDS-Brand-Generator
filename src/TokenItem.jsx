var React = require('react');
var colorNames = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','rebeccapurple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];
var inputStyle = {
	width:'90%'
};
var listStyle = {
	paddingTop:'10px'
};
var labelStyle = {
	padding:'5px',
	marginBottom: '10px'
};

var TokenItem = React.createClass({
	getInitialState: function() {
		return {
			value:  this.props.tokenValue
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if(nextProps.colorPickerTokenName !== nextProps.tokenName) {
			return;
		}

		var value = nextProps.colorPickerColor !== '' ? nextProps.colorPickerColor : nextProps.tokenValue;
		if(value != this.state.value) {
		 	this.setState({
		    	value: value
		 	});
		}
	},

	isValidColor: function(c) {
		if(c.match(/^#[a-f0-9]{6}$/i)) {
			return true;
		}
		if(colorNames.indexOf(c.toLowerCase()) >= 0) {
			return true;
		}
		return false;
	},

	changeHandler: function(e) {
		var value = e.target.value;
		this.setState({value: value});
		if(this.isValidColor(value)){
			this.props.onTokenChange({name: this.props.tokenName, value: value});
		}
	},

	handleFocus: function(e){
		this.props.handleFocus({
			left: e.clientX,
			top: e.clientY,
			tokenName: this.props.tokenName,
			currentTokenColor: this.state.value
		});
	},

	render: function() {

		var aABoxStyle = {
			backgroundColor: this.state.value,
			padding:'5px !important',
			border: '1px solid gray'	
		};

		var aABoxBorderStyle = {
			padding:'5px !important',
			border: '2px solid '+this.state.value	
		};

		var aAStyle = this.props.tokenName.indexOf('border')> 0 ? aABoxBorderStyle : aABoxStyle;
		return (
			<li style={listStyle} >
				<div style={labelStyle} className="slds-form-element__label--large"><span style={aAStyle}>Aa</span> {this.props.tokenName} </div>
		  		<div className="slds-form-element__control">
		    		<input style={inputStyle} onClick={this.handleFocus}  onChange={this.changeHandler} className="slds-input" type="text" placeholder={'default: ' + this.props.tokenValue} value={this.state.value} />
		  		</div>
		  		<br/>
			</li>
		)
	}
});

module.exports = TokenItem;