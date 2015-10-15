var React = require('react');

module.exports = React.createClass({
	render: function() {
		var inlineStyle = {
			width:'200px'
		}
		return (
				<div style={inlineStyle} className="slds-dropdown--left slds-datepicker" aria-hidden="false" data-selection="single">
			  <div className="slds-datepicker__filter slds-grid">
			    <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4">
			      <div className="slds-align-middle">
			        <button className="slds-button slds-button--icon-container">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
			          </svg>
			          <span className="slds-assistive-text">Previous Month</span>
			        </button>
			      </div>
			      <h2 id="month" className="slds-align-middle" aria-live="assertive" aria-atomic="true">June</h2>
			      <div className="slds-align-middle">
			        <button className="slds-button slds-button--icon-container">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--small">
			            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
			          </svg>
			          <span className="slds-assistive-text">Next Month</span>
			        </button>
			      </div>
			    </div>
			    <div className="slds-picklist datepicker__filter--year slds-shrink-none">
			      <button id="year" className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">2015
			        <svg aria-hidden="true" className="slds-icon slds-icon--small">
			          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			        </svg>
			      </button>
			    </div>
			  </div>
			  <table className="datepicker__month" role="grid" aria-labelledby="month">
			    <thead>
			      <tr id="weekdays">
			        <th id="Sunday">
			          <abbr title="Sunday">S</abbr>
			        </th>
			        <th id="Monday">
			          <abbr title="Monday">M</abbr>
			        </th>
			        <th id="Tuesday">
			          <abbr title="Tuesday">T</abbr>
			        </th>
			        <th id="Wednesday">
			          <abbr title="Wednesday">W</abbr>
			        </th>
			        <th id="Thursday">
			          <abbr title="Thursday">T</abbr>
			        </th>
			        <th id="Friday">
			          <abbr title="Friday">F</abbr>
			        </th>
			        <th id="Saturday">
			          <abbr title="Saturday">S</abbr>
			        </th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td className="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true">
			          <span className="slds-day">31</span>
			        </td>
			        <td headers="Monday" role="gridcell" aria-selected="false">
			          <span className="slds-day">1</span>
			        </td>
			        <td headers="Tuesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">2</span>
			        </td>
			        <td headers="Wednesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">3</span>
			        </td>
			        <td headers="Thursday" role="gridcell" aria-selected="false">
			          <span className="slds-day">4</span>
			        </td>
			        <td headers="Friday" role="gridcell" aria-selected="false">
			          <span className="slds-day">5</span>
			        </td>
			        <td headers="Saturday" role="gridcell" aria-selected="false">
			          <span className="slds-day">6</span>
			        </td>
			      </tr>
			      <tr>
			        <td headers="Sunday" role="gridcell" aria-selected="false">
			          <span className="slds-day">7</span>
			        </td>
			        <td headers="Monday" role="gridcell" aria-selected="false">
			          <span className="slds-day">8</span>
			        </td>
			        <td headers="Tuesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">9</span>
			        </td>
			        <td headers="Wednesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">10</span>
			        </td>
			        <td headers="Thursday" role="gridcell" aria-selected="false">
			          <span className="slds-day">11</span>
			        </td>
			        <td headers="Friday" role="gridcell" aria-selected="false">
			          <span className="slds-day">12</span>
			        </td>
			        <td headers="Saturday" role="gridcell" aria-selected="false">
			          <span className="slds-day">13</span>
			        </td>
			      </tr>
			      <tr>
			        <td headers="Sunday" role="gridcell" aria-selected="false">
			          <span className="slds-day">14</span>
			        </td>
			        <td headers="Monday" role="gridcell" aria-selected="false">
			          <span className="slds-day">15</span>
			        </td>
			        <td headers="Tuesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">16</span>
			        </td>
			        <td headers="Wednesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">17</span>
			        </td>
			        <td className="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false">
			          <span className="slds-day">18</span>
			        </td>
			        <td headers="Friday" role="gridcell" aria-selected="false">
			          <span className="slds-day">19</span>
			        </td>
			        <td headers="Saturday" role="gridcell" aria-selected="false">
			          <span className="slds-day">20</span>
			        </td>
			      </tr>
			      <tr>
			        <td headers="Sunday" role="gridcell" aria-selected="false">
			          <span className="slds-day">21</span>
			        </td>
			        <td headers="Monday" role="gridcell" aria-selected="false">
			          <span className="slds-day">22</span>
			        </td>
			        <td className="slds-is-selected" headers="Tuesday" role="gridcell" aria-selected="true">
			          <span className="slds-day">23</span>
			        </td>
			        <td headers="Wednesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">24</span>
			        </td>
			        <td headers="Thursday" role="gridcell" aria-selected="false">
			          <span className="slds-day">25</span>
			        </td>
			        <td headers="Friday" role="gridcell" aria-selected="false">
			          <span className="slds-day">26</span>
			        </td>
			        <td headers="Saturday" role="gridcell" aria-selected="false">
			          <span className="slds-day">27</span>
			        </td>
			      </tr>
			      <tr>
			        <td headers="Sunday" role="gridcell" aria-selected="false">
			          <span className="slds-day">28</span>
			        </td>
			        <td headers="Monday" role="gridcell" aria-selected="false">
			          <span className="slds-day">29</span>
			        </td>
			        <td headers="Tuesday" role="gridcell" aria-selected="false">
			          <span className="slds-day">30</span>
			        </td>
			        <td className="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true">
			          <span className="slds-day">1</span>
			        </td>
			        <td className="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true">
			          <span className="slds-day">2</span>
			        </td>
			        <td className="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true">
			          <span className="slds-day">3</span>
			        </td>
			        <td className="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true">
			          <span className="slds-day">4</span>
			        </td>
			      </tr>
			    </tbody>
			  </table>
			</div>
		)
	}


});