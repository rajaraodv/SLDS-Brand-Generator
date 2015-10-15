var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">
				  <div className="slds-form-element">
				    <label className="slds-form-element__label" htmlFor="lookup">Accounts</label>
				    <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
				      <svg aria-hidden="true" className="slds-input__icon">
				        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
				      </svg>
				      <input id="lookup" className="slds-input" type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" />
				    </div>
				  </div>
				  <div className="slds-lookup__menu" role="listbox">
				    <div className="slds-lookup__item">
				      <button className="slds-button">
				        <svg aria-hidden="true" className="slds-icon slds-icon-text-default slds-icon--small">
				          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
				        </svg>&quot;ac&quot; in Accounts</button>
				    </div>
				    <ul className="slds-lookup__list" role="presentation">
				      <li className="slds-lookup__item">
				        <a id="s01" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>Paddy&#x27;s Pub</a>
				      </li>
				      <li className="slds-lookup__item">
				        <a id="s02" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>Tyrell Corporation</a>
				      </li>
				      <li className="slds-lookup__item">
				        <a id="s03" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>Paper St. Soap Company</a>
				      </li>
				      <li className="slds-lookup__item">
				        <a id="s04" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>Nakatomi Investments</a>
				      </li>
				      <li className="slds-lookup__item">
				        <a id="s05" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>Acme Landscaping</a>
				      </li>
				      <li className="slds-lookup__item">
				        <a id="s06" href="#" role="option">
				          <svg aria-hidden="true" className="slds-icon slds-icon-standard-account slds-icon--small">
				            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
				          </svg>ACME Construction</a>
				      </li>
				    </ul>
				    <div className="slds-lookup__item">
				      <button className="slds-button">
				        <svg aria-hidden="true" className="slds-icon slds-icon-text-default slds-icon--small">
				          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
				        </svg>Add Account</button>
				    </div>
				  </div>
				</div>
		)
	}
});