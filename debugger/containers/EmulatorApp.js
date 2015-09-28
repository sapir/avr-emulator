import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import RegisterState from '../components/RegisterState';
import IOStore from '../components/IOStore';
import DebuggerButtons from '../components/DebuggerButtons';
import AssemblyProgram from '../components/AssemblyProgram';
import * as DebuggerActions from '../actions/DebuggerActions';

export default class EmulatorApp {
  render() {
    return (
      <Connector>
        {({ emulator, programRunner, dispatch }) =>
          <div className="rs-ui">
            <div className="action-item-header">
              <div className="row">
                <div className="col-1-2">
                  <h5 className="h5">
                    Messages &amp; Showing Requests (1)
                  </h5>
                </div>
                <div className="col-1-2 text-right">
                  <div className="sorting-container">
                    <button className="latest-action-items text-button">Latest</button>

                    <button className="archived-action-items text-button grey">Completed</button>
                  </div>
                </div>
              </div>
            </div>

            <div infinite-scroll="" load-next="loadInfiniteScroll()" scroll-disabled="infiniteScrollControl.disabled" className="action-container">
            <div>
              <p className="message-header">
                <a href="/agent/users/283601" target="_self" className="user-link">Joe Dirt</a> requested to
                visit
                <a href="#" className="property-link propertyClick" id="property_1224058">10 Las Palomas</a>
              <span className="message-time">
                <time dateTime="2015-09-26T00:44:26Z">3 days ago</time>
              </span>
              </p>

              <div className="message-body">

                <a href="#" className="showing-image property-link propertyClick" id="property_1224058">
                  <img src="https://s3.amazonaws.com/realscout_v2/property_photos/property_photos/050/605/665/thumb/image_40717004_1.jpg?1443197913"/>
                </a>

                <p className="message-text">
                  <a href="#" className="property-link propertyClick" id="property_1224058">10 Las Palomas</a>
                  <span className="quote">"I'd like to see this property today. When are you available to show it?"</span>
                </p>
              </div>
            </div>

            <div className="action-item-buttons">
              <div>
                <button data-ng-click="respond()"className="respond outline button">
                  RESPOND
                </button>
                <button data-ng-click="complete()"className="complete button green with-icon outline">
                  <i className="icon-circle-check action-item-icon"></i>
                </button>
                <button data-ng-click="dismiss()" className="dismiss button pink with-icon outline">
                  <i className="icon-close action-item-icon"></i>
                </button>
              </div>
            </div>

          </div>
          </div>
        }
      </Connector>
    );
  }
}
