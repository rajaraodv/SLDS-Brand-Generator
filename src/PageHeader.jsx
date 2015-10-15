var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="slds-page-header" role="banner">
			  <div className="slds-grid">
			    <div className="slds-col slds-has-flexi-truncate">
			      <div className="slds-media">
			        <div className="slds-media__figure">
			          <svg aria-hidden="true" className="slds-icon slds-icon--large slds-icon-standard-user">
			            <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#user"></use>
			          </svg>
			        </div>
			        <div className="slds-media__body">
			          <p className="slds-text-heading--label">Record Type</p>
			          <div className="slds-grid">
			            <h1 className="slds-text-heading--medium slds-m-right--small slds-truncate slds-align-middle" title="Record Title">Record Title</h1>
			            <div className="slds-col slds-shrink-none">
			              <button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
			                <span className="slds-text-not-selected">
			                  <svg aria-hidden="true" className="slds-button__icon--stateful slds-button__icon--left">
			                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
			                  </svg>Follow</span>
			                <span className="slds-text-selected">
			                  <svg aria-hidden="true" className="slds-button__icon--stateful slds-button__icon--left">
			                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
			                  </svg>Following</span>
			                <span className="slds-text-selected-focus">
			                  <svg aria-hidden="true" className="slds-button__icon--stateful slds-button__icon--left">
			                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
			                  </svg>Unfollow</span>
			              </button>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="slds-col slds-no-flex slds-align-bottom">
			      <div className="slds-button-group" role="group">
			        <button className="slds-button slds-button--neutral">Edit</button>
			        <button className="slds-button slds-button--neutral">Delete</button>
			        <button className="slds-button slds-button--neutral">Clone</button>
			        <div className="slds-button--last">
			          <button className="slds-button slds-button--icon-border-filled">
			            <svg aria-hidden="true" className="slds-button__icon">
			              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			            </svg>
			            <span className="slds-assistive-text">More</span>
			          </button>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="slds-grid slds-page-header__detail-row">
			    <div className="slds-col--padded slds-size--1-of-4">
			      <dl>
			        <dt>
			          <p className="slds-truncate" title="Field 1">Field 1</p>
			        </dt>
			        <dd>
			          <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">Description that demonstrates truncation with a long text field</p>
			        </dd>
			      </dl>
			    </div>
			    <div className="slds-col--padded slds-size--1-of-4">
			      <dl>
			        <dt>
			          <p className="slds-text-heading--label slds-truncate" title="Field2 (3)">Field 2 (3)
			            <button className="slds-button slds-button--icon-bare">
			              <svg aria-hidden="true" className="slds-button__icon slds-button__icon--small">
			                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			              </svg>
			              <span className="slds-assistive-text">More Actions</span>
			            </button>
			          </p>
			        </dt>
			        <dd>
			          <p className="slds-text-body--regular">Multiple Values</p>
			        </dd>
			      </dl>
			    </div>
			    <div className="slds-col--padded slds-size--1-of-4">
			      <dl>
			        <dt>
			          <p className="slds-text-heading--label slds-truncate" title="Field 3">Field 3</p>
			        </dt>
			        <dd><a href="#">Hyperlink</a></dd>
			      </dl>
			    </div>
			    <div className="slds-col--padded slds-size--1-of-4">
			      <dl>
			        <dt>
			          <p className="slds-text-heading--label slds-truncate" title="Field 4">Field 4</p>
			        </dt>
			        <dd>
			          <p>
			            <span>Description (2-line truncation—must use JS to t...</span>
			          </p>
			        </dd>
			      </dl>
			    </div>
			  </div>
			</div>
		)
	}
});