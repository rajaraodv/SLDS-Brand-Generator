var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<table className="slds-table slds-table--bordered">
			  <thead>
			    <tr className="slds-text-heading--label">
			      <th className="slds-cell-shrink" scope="col">
			        <label className="slds-checkbox" htmlFor="select-all">
			          <input name="checkbox" type="checkbox" id="select-all" />
			          <span className="slds-checkbox--faux"></span>
			          <span className="slds-form-element__label slds-assistive-text">select all</span>
			        </label>
			      </th>
			      <th className="slds-is-sortable" scope="col">
			        <span className="slds-truncate">Opportunity Name</span>
			        <button className="slds-button slds-button--icon-bare slds-button--icon-border-small">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
			          </svg>
			          <span className="slds-assistive-text">Sort</span>
			        </button>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Account Name</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Close Date</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Stage</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Confidence</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Amount</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Contact</span>
			      </th>
			      <th className="slds-row-action" scope="col">
			        <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			          </svg>
			          <span className="slds-assistive-text">Show More</span>
			        </button>
			      </th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr className="slds-hint-parent">
			      <td className="slds-row-select">
			        <label className="slds-checkbox" htmlFor="select-row1">
			          <input name="select-row1" type="checkbox" id="select-row1" />
			          <span className="slds-checkbox--faux"></span>
			          <span className="slds-form-element__label slds-assistive-text">select row1</span>
			        </label>
			      </td>
			      <th data-label="opportunity-name" role="row"><a href="#" className="slds-truncate">Acme 25</a></th>
			      <td data-label="account"><a href="#" className="slds-truncate">Acme</a></td>
			      <td data-label="activity">
			        <span className="slds-truncate">4/14/2015</span>
			      </td>
			      <td data-label="stage">
			        <span className="slds-truncate">Prospecting</span>
			      </td>
			      <td data-label="confidence">
			        <span className="slds-truncate">20%</span>
			      </td>
			      <td data-label="amount">
			        <span className="slds-truncate">$25k</span>
			      </td>
			      <td data-label="contact">
			        <span className="slds-truncate">--</span>
			      </td>
			      <td className="slds-row-action">
			        <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			          </svg>
			          <span className="slds-assistive-text">Show More</span>
			        </button>
			      </td>
			    </tr>
			    <tr className="slds-hint-parent">
			      <td className="slds-row-select">
			        <label className="slds-checkbox" htmlFor="select-row2">
			          <input name="select-row2" type="checkbox" id="select-row2" />
			          <span className="slds-checkbox--faux"></span>
			          <span className="slds-form-element__label slds-assistive-text">select row2</span>
			        </label>
			      </td>
			      <th data-label="opportunity-name" role="row"><a href="#" className="slds-truncate">Cloudhub + Anypoint Connectors</a></th>
			      <td data-label="account"><a href="#" className="slds-truncate">Cloudhub</a></td>
			      <td data-label="activity">
			        <span className="slds-truncate">9/30/2015</span>
			      </td>
			      <td data-label="stage">
			        <span className="slds-truncate">Closing</span>
			      </td>
			      <td data-label="confidence">
			        <span className="slds-truncate">90%</span>
			      </td>
			      <td data-label="amount">
			        <span className="slds-truncate">$40k</span>
			      </td>
			      <td data-label="contact"><a href="#" className="slds-truncate">jrogers@cloudhub.com</a></td>
			      <td className="slds-row-action">
			        <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			          </svg>
			          <span className="slds-assistive-text">Show More</span>
			        </button>
			      </td>
			    </tr>
			    <tr className="slds-hint-parent">
			      <td className="slds-row-select">
			        <label className="slds-checkbox" htmlFor="select-row3">
			          <input name="select-row3" type="checkbox" id="select-row3" />
			          <span className="slds-checkbox--faux"></span>
			          <span className="slds-form-element__label slds-assistive-text">select row3</span>
			        </label>
			      </td>
			      <th data-label="opportunity-name" role="row"><a href="#" className="slds-truncate">Rohde Corp 30</a></th>
			      <td data-label="account"><a href="#" className="slds-truncate">Rohde Corp</a></td>
			      <td data-label="activity">
			        <span className="slds-truncate">6/18/2015</span>
			      </td>
			      <td data-label="stage">
			        <span className="slds-truncate">Prospecting</span>
			      </td>
			      <td data-label="confidence">
			        <span className="slds-truncate">40%</span>
			      </td>
			      <td data-label="amount">
			        <span className="slds-truncate">$30k</span>
			      </td>
			      <td data-label="contact"><a href="#" className="slds-truncate">achoi@rohdecorp.com</a></td>
			      <td className="slds-row-action">
			        <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			          </svg>
			          <span className="slds-assistive-text">Show More</span>
			        </button>
			      </td>
			    </tr>
			  </tbody>
			</table>
		)
	}
});