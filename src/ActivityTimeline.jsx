var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<ul className="slds-timeline">
				  <li className="slds-timeline__item">
				    <span className="slds-assistive-text">Task</span>
				    <div className="slds-media slds-media--reverse">
				      <div className="slds-media__figure">
				        <div className="slds-timeline__actions">
				          <p className="slds-timeline__date">Feb 24</p>
				          <button className="slds-button slds-button--icon-border-filled">
				            <svg aria-hidden="true" className="slds-button__icon">
				              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
				            </svg>
				            <span className="slds-assistive-text">Switch</span>
				          </button>
				        </div>
				      </div>
				      <div className="slds-media__body">
				        <div className="slds-media slds-media--timeline slds-timeline__media--task">
				          <div className="slds-media__figure">
				            <svg aria-hidden="true" className="slds-icon slds-icon-standard-task slds-timeline__icon">
				              <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
				            </svg>
				          </div>
				          <div className="slds-media__body">
				            <div className="slds-media slds-tile slds-media--small">
				              <div className="slds-media__figure">
				                <label className="slds-checkbox" htmlFor="mark-complete">
				                  <input name="checkbox" type="checkbox" id="mark-complete" />
				                  <span className="slds-checkbox--faux"></span>
				                  <span className="slds-form-element__label slds-assistive-text">mark-complete</span>
				                </label>
				              </div>
				              <div className="slds-media__body">
				                <p className="slds-tile__title slds-truncate"><a href="#">Review proposals for EBC deck with larger team and have marketing review this</a></p>
				                <ul className="slds-tile__detail slds-list--horizontal slds-text-body--small">
				                  <li className="slds-list__item slds-m-right--large">
				                    <dl className="slds-dl--inline">
				                      <dt className="slds-dl--inline__label">Contact:</dt>
				                      <dd className="slds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
				                    </dl>
				                  </li>
				                  <li className="slds-list__item">
				                    <dl className="slds-dl--inline">
				                      <dt className="slds-dl--inline__label">Assigned to:</dt>
				                      <dd className="slds-dl--inline__detail"><a href="#">Betty Mason</a></dd>
				                    </dl>
				                  </li>
				                </ul>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </li>
				  <li className="slds-timeline__item">
				    <span className="slds-assistive-text">Event</span>
				    <div className="slds-media slds-media--reverse">
				      <div className="slds-media__figure">
				        <div className="slds-timeline__actions">
				          <p className="slds-timeline__date">Feb 24</p>
				          <button className="slds-button slds-button--icon-border-filled">
				            <svg aria-hidden="true" className="slds-button__icon">
				              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
				            </svg>
				            <span className="slds-assistive-text">Switch</span>
				          </button>
				        </div>
				      </div>
				      <div className="slds-media__body">
				        <div className="slds-media slds-media--timeline slds-timeline__media--event">
				          <div className="slds-media__figure">
				            <svg aria-hidden="true" className="slds-icon slds-icon-standard-event slds-timeline__icon">
				              <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
				            </svg>
				          </div>
				          <div className="slds-media__body">
				            <p><a href="#">Company One — EBC Meeting</a></p>
				            <p className="slds-truncate">Let&#x27;s get together to review the theater&#x27;s layout and facilities. We&#x27;ll also discuss potential things that truncate at a certain width.</p>
				            <ul className="slds-list--horizontal slds-text-body--small">
				              <li className="slds-list__item slds-m-right--large">
				                <dl className="slds-dl--inline">
				                  <dt className="slds-dl--inline__label">Time:</dt>
				                  <dd className="slds-dl--inline__detail"><a href="#">Feb 23, 2015 11:00am–12:00pm</a></dd>
				                </dl>
				              </li>
				              <li className="slds-list__item">
				                <dl className="slds-dl--inline">
				                  <dt className="slds-dl--inline__label">Location:</dt>
				                  <dd className="slds-dl--inline__detail"><a href="#">300 Pike St, San Francisco CA</a></dd>
				                </dl>
				              </li>
				            </ul>
				            <dl className="slds-dl--inline slds-text-body--small">
				              <dt className="slds-dl--inline__label">Name:</dt>
				              <dd className="slds-dl--inline__detail"><a href="#">Lei Chan</a>, <a href="#">Jason Dewar</a>, <a href="#">Gwen Jones</a> and <a href="#">Pete Schaffer</a></dd>
				            </dl>
				          </div>
				        </div>
				      </div>
				    </div>
				  </li>
				  <li className="slds-timeline__item">
				    <span className="slds-assistive-text">Call</span>
				    <div className="slds-media slds-media--reverse">
				      <div className="slds-media__figure">
				        <div className="slds-timeline__actions">
				          <p className="slds-timeline__date">Feb 24</p>
				          <button className="slds-button slds-button--icon-border-filled">
				            <svg aria-hidden="true" className="slds-button__icon">
				              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
				            </svg>
				            <span className="slds-assistive-text">Switch</span>
				          </button>
				        </div>
				      </div>
				      <div className="slds-media__body">
				        <div className="slds-media slds-media--timeline slds-timeline__media--call">
				          <div className="slds-media__figure">
				            <svg aria-hidden="true" className="slds-icon slds-icon-standard-log-a-call slds-timeline__icon">
				              <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>
				            </svg>
				          </div>
				          <div className="slds-media__body">
				            <p><a href="#">Mobile conversation on Monday</a></p>
				            <p className="slds-truncate">Lei seemed interested in closing this deal quickly! Let&#x27;s move move.</p>
				            <ul className="slds-list--horizontal slds-text-body--small">
				              <li className="slds-list__item slds-m-right--large">
				                <dl className="slds-dl--inline">
				                  <dt className="slds-dl--inline__label">Name:</dt>
				                  <dd className="slds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
				                </dl>
				              </li>
				              <li className="slds-list__item">
				                <dl className="slds-dl--inline">
				                  <dt className="slds-dl--inline__label">Assigned to:</dt>
				                  <dd className="slds-dl--inline__detail"><a href="#">Betty Mason</a></dd>
				                </dl>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				    </div>
				  </li>
				  <li className="slds-timeline__item">
				    <span className="slds-assistive-text">Email</span>
				    <div className="slds-media slds-media--reverse">
				      <div className="slds-media__figure">
				        <div className="slds-timeline__actions">
				          <p className="slds-timeline__date">Feb 24</p>
				          <button className="slds-button slds-button--icon-border-filled">
				            <svg aria-hidden="true" className="slds-button__icon">
				              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
				            </svg>
				            <span className="slds-assistive-text">Switch</span>
				          </button>
				        </div>
				      </div>
				      <div className="slds-media__body">
				        <div className="slds-media slds-media--timeline slds-timeline__media--email">
				          <div className="slds-media__figure">
				            <svg aria-hidden="true" className="slds-icon slds-icon-standard-email slds-timeline__icon">
				              <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#email"></use>
				            </svg>
				          </div>
				          <div className="slds-media__body">
				            <div className="slds-tile">
				              <p className="slds-tile__title slds-truncate"><a href="#">Updated Proposals</a></p>
				              <div className="slds-tile__detail">
				                <p className="slds-truncate">Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&#x27;s truncated.</p>
				                <ul className="slds-list--horizontal slds-text-body--small">
				                  <li className="slds-list__item slds-m-right--large">
				                    <dl className="slds-dl--inline">
				                      <dt className="slds-dl--inline__label">To:</dt>
				                      <dd className="slds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
				                    </dl>
				                  </li>
				                  <li className="slds-list__item">
				                    <dl className="slds-dl--inline">
				                      <dt className="slds-dl--inline__label">From:</dt>
				                      <dd className="slds-dl--inline__detail"><a href="#">Jason Dewar</a></dd>
				                    </dl>
				                  </li>
				                </ul>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </li>
				</ul>
		)
	}
});