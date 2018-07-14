import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyARpX4Du9v6YWdmwq1x3tkPo_5H4-2AcDM"
})(GoogleMap)