var React = require('react');
var DatePickers = require('./DatePickers.jsx');
var Card = require('./Card.jsx');
var Table = require('./Table.jsx');
var LookUps = require('./LookUps.jsx');
var ActivityTimeline = require('./ActivityTimeline.jsx');
var PageHeader = require('./PageHeader.jsx');
var ToolTipsAndPopovers = require('./ToolTipsAndPopovers.jsx');

var SLDSTemplate = React.createClass({
	render: function() {
		return (
			<div className="slds-col slds-size--9-of-12 slds-medium-size--5-of-6 slds-large-size--9-of-12  slds-scrollable--y">
				
			    <div className="main" role="main">


				<PageHeader />
				<br/>
				<br/>
			    <ActivityTimeline />
			    <br/>
			    <br/>
 				<div className="demo">
				<button className="slds-button">Button</button>
				<button className="slds-button slds-button--brand">Button Brand</button><a href="#" className="slds-button slds-button--brand">Anchor Button Brand</a>
				<button className="slds-button slds-button--brand" disabled="">Disabled</button>
				<br/>
				<button className="slds-button slds-button--brand slds-button--small">Button Small</button>
				<button className="slds-button slds-button--neutral">Button neutral</button><a href="#" className="slds-button slds-button--neutral">Anchor Button Neutral</a>
				<button className="slds-button slds-button--neutral" disabled="">Disabled</button>
				<button className="slds-button slds-button--neutral slds-button--small">Button Small</button>
				</div>
				   <br/>
			    <br/>
			    <span className="slds-badge">Label</span>
				<span className="slds-badge slds-theme--default">Label</span>
				<span className="slds-badge slds-theme--shade">Label</span>
				<span className="slds-badge slds-theme--inverse">Label</span>
				<br/>
				<br/>
				<nav role="navigation">
					<p id="bread-crumb-label" className="slds-assistive-text">You are here:</p>
					<ol className="slds-breadcrumb slds-list--horizontal" aria-labelledby="bread-crumb-label">
						<li className="slds-list__item slds-text-heading--label"><a href="#">Parent Entity</a></li>
						<li className="slds-list__item slds-text-heading--label"><a href="#">Parent Record Name</a></li>
					</ol>
				</nav>
				<br/>
				<ToolTipsAndPopovers />
				<br/>
			    <Card />

			    <DatePickers />
			 
			   


				<Table />
				<LookUps />

			      <section aria-labelledby="tabs-component">
			        <h2 id="tabs-component" className="slds-text-heading--large slds-p-top--medium slds-p-bottom--medium">Components/Tabs</h2>

			        <div className="slds-tabs--default" role="tablist">
			          <ul className="slds-tabs--default__nav" role="presentation">
			            <li className="slds-tabs__item slds-text-heading--label slds-active" title="Item One">
			              <a href="#" role="tab" aria-selected="true" tabIndex="0">Tab 1</a>
			            </li>
			            <li className="slds-tabs__item slds-text-heading--label" title="Item Two">
			              <a href="#" role="tab" aria-selected="false" tabIndex="0">Tab 2</a>
			            </li>
			            <li className="slds-tabs__item slds-text-heading--label" title="Item Three">
			              <a href="#" role="tab" aria-selected="false" tabIndex="0">Tab 3</a>
			            </li>
			          </ul>
			          <div className="slds-tabs__content slds-show" role="tabpanel" aria-labelledby="one">
			            <h2>Tab 1 content</h2>
			          </div>
			          <div className="slds-tabs__content slds-hide" role="tabpanel" aria-labelledby="one">
			            <h2>Tab 2 content</h2>
			          </div>
			          <div className="slds-tabs__content slds-hide" role="tabpanel" aria-labelledby="one">
			            <h2>Tab 3 content</h2>
			          </div>
			        </div>
			      </section>

			    </div>

			    <footer role="contentinfo" className="slds-p-top--x-large slds-p-bottom--x-large">
			      <h2 id="labels" className="slds-text-heading--large slds-p-top--x-large slds-p-bottom--medium">Core/Grid</h2>
			      <div className="slds-grid slds-grid--align-spread">
			        <p className="slds-col">Footer Col 1: Salesforce Design System tutorial</p>
			        <p className="slds-col">Footer Col 2: Salesforce Design System tutorial</p>
			      </div>
			    </footer>

			  </div>
		)
	}
});

module.exports = SLDSTemplate;